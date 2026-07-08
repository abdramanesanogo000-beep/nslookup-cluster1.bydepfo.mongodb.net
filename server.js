// Backend Hygia — API commandes + admin
// Déploiement Render.com :
// 1. Pousser ce dossier backend/ sur un repo GitHub (sans le .env)
// 2. Créer un compte sur Render.com
// 3. New Web Service → connecter le repo GitHub
// 4. Build command : npm install
// 5. Start command : node server.js
// 6. Ajouter les variables d'environnement (MONGODB_URI, ADMIN_PASSWORD) dans Render
// 7. Une fois déployé, remplacer l'URL dans yames.js, admin.html et admin-commandes.html

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Commande = require('./models/Commande');
const Utilisateur = require('./models/Utilisateur');
const { envoyerEmailBienvenue, envoyerEmailRecapCommande } = require('./services/email');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS — autorise toutes les origines (adapter en production si besoin)
app.use(cors());
app.use(express.json());

// Middleware de log simple
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} — ${req.method} ${req.path}`);
    next();
});

// Vérification mot de passe admin
function verifierAdmin(req, res, next) {
    const password = req.headers['x-admin-password'];

    if (!password || password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ erreur: 'Non autorisé' });
    }

    next();
}

// Health check
app.get('/', (req, res) => {
    res.json({ statut: 'OK', service: 'Hygia API', version: '2.0' });
});

// ===========================================
// AUTHENTIFICATION UTILISATEURS
// ===========================================

// Inscription
app.post('/api/auth/inscription', async (req, res) => {
    try {
        const { nom, telephone, email, motdepasse } = req.body;

        if (!nom || !telephone || !email || !motdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Tous les champs sont obligatoires.' });
        }

        const emailNormalise = email.toLowerCase().trim();
        const existe = await Utilisateur.findOne({ email: emailNormalise });
        if (existe) {
            return res.status(400).json({ succes: false, erreur: 'Un compte existe déjà avec cet email.' });
        }

        const utilisateur = new Utilisateur({ nom, telephone, email: emailNormalise, motdepasse });
        await utilisateur.save();

        // Envoyer l'email de bienvenue en arrière-plan (ne bloque pas la réponse)
        envoyerEmailBienvenue({ nom, email: emailNormalise }).catch(err => {
            console.error('Erreur email de bienvenue :', err);
        });

        return res.status(201).json({
            succes: true,
            message: 'Compte créé avec succès.',
            utilisateur: { nom, email: emailNormalise }
        });
    } catch (error) {
        console.error('Erreur POST /api/auth/inscription :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Connexion
app.post('/api/auth/connexion', async (req, res) => {
    try {
        const { email, motdepasse } = req.body;

        if (!email || !motdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Email et mot de passe obligatoires.' });
        }

        const emailNormalise = email.toLowerCase().trim();
        const utilisateur = await Utilisateur.findOne({ email: emailNormalise });

        if (!utilisateur) {
            return res.status(401).json({ succes: false, erreur: 'Email ou mot de passe incorrect.' });
        }

        const motDePasseValide = await utilisateur.comparerMotDePasse(motdepasse);
        if (!motDePasseValide) {
            return res.status(401).json({ succes: false, erreur: 'Email ou mot de passe incorrect.' });
        }

        return res.json({
            succes: true,
            message: 'Connexion réussie.',
            utilisateur: {
                nom: utilisateur.nom,
                email: utilisateur.email,
                telephone: utilisateur.telephone
            }
        });
    } catch (error) {
        console.error('Erreur POST /api/auth/connexion :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Supprimer un compte utilisateur
app.delete('/api/auth/supprimer', async (req, res) => {
    try {
        const { email, motdepasse } = req.body;

        if (!email || !motdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Email et mot de passe obligatoires.' });
        }

        const emailNormalise = email.toLowerCase().trim();
        const utilisateur = await Utilisateur.findOne({ email: emailNormalise });

        if (!utilisateur) {
            return res.status(404).json({ succes: false, erreur: 'Compte introuvable.' });
        }

        const motDePasseValide = await utilisateur.comparerMotDePasse(motdepasse);
        if (!motDePasseValide) {
            return res.status(401).json({ succes: false, erreur: 'Mot de passe incorrect.' });
        }

        await Utilisateur.deleteOne({ email: emailNormalise });

        return res.json({ succes: true, message: 'Compte supprimé avec succès.' });
    } catch (error) {
        console.error('Erreur DELETE /api/auth/supprimer :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Consulter le profil (avec vérification du mot de passe)
app.post('/api/auth/profil', async (req, res) => {
    try {
        const { email, motdepasse } = req.body;

        if (!email || !motdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Email et mot de passe obligatoires.' });
        }

        const emailNormalise = email.toLowerCase().trim();
        const utilisateur = await Utilisateur.findOne({ email: emailNormalise });

        if (!utilisateur) {
            return res.status(404).json({ succes: false, erreur: 'Compte introuvable.' });
        }

        const motDePasseValide = await utilisateur.comparerMotDePasse(motdepasse);
        if (!motDePasseValide) {
            return res.status(401).json({ succes: false, erreur: 'Mot de passe incorrect.' });
        }

        return res.json({
            succes: true,
            utilisateur: {
                nom: utilisateur.nom,
                email: utilisateur.email,
                telephone: utilisateur.telephone
            }
        });
    } catch (error) {
        console.error('Erreur POST /api/auth/profil :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Modifier le profil (nom, téléphone)
app.patch('/api/auth/profil', async (req, res) => {
    try {
        const { email, motdepasse, nom, telephone } = req.body;

        if (!email || !motdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Email et mot de passe obligatoires.' });
        }

        const emailNormalise = email.toLowerCase().trim();
        const utilisateur = await Utilisateur.findOne({ email: emailNormalise });

        if (!utilisateur) {
            return res.status(404).json({ succes: false, erreur: 'Compte introuvable.' });
        }

        const motDePasseValide = await utilisateur.comparerMotDePasse(motdepasse);
        if (!motDePasseValide) {
            return res.status(401).json({ succes: false, erreur: 'Mot de passe incorrect.' });
        }

        if (nom) utilisateur.nom = nom.trim();
        if (telephone) utilisateur.telephone = telephone.trim();
        await utilisateur.save();

        return res.json({
            succes: true,
            message: 'Profil mis à jour avec succès.',
            utilisateur: {
                nom: utilisateur.nom,
                email: utilisateur.email,
                telephone: utilisateur.telephone
            }
        });
    } catch (error) {
        console.error('Erreur PATCH /api/auth/profil :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Changer le mot de passe
app.patch('/api/auth/motdepasse', async (req, res) => {
    try {
        const { email, ancienMotdepasse, nouveauMotdepasse } = req.body;

        if (!email || !ancienMotdepasse || !nouveauMotdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Tous les champs sont obligatoires.' });
        }

        if (nouveauMotdepasse.length < 6) {
            return res.status(400).json({ succes: false, erreur: 'Le nouveau mot de passe doit contenir au moins 6 caractères.' });
        }

        const emailNormalise = email.toLowerCase().trim();
        const utilisateur = await Utilisateur.findOne({ email: emailNormalise });

        if (!utilisateur) {
            return res.status(404).json({ succes: false, erreur: 'Compte introuvable.' });
        }

        const ancienValide = await utilisateur.comparerMotDePasse(ancienMotdepasse);
        if (!ancienValide) {
            return res.status(401).json({ succes: false, erreur: 'Ancien mot de passe incorrect.' });
        }

        utilisateur.motdepasse = nouveauMotdepasse;
        await utilisateur.save();

        return res.json({ succes: true, message: 'Mot de passe modifié avec succès.' });
    } catch (error) {
        console.error('Erreur PATCH /api/auth/motdepasse :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Créer une commande (appelé depuis yames.js)
app.post('/api/commandes', async (req, res) => {
    try {
        const { client, articles, total, modePaiement } = req.body;

        if (!client || !client.nom || !client.telephone || !client.adresse) {
            return res.status(400).json({ erreur: 'Informations de livraison incomplètes.' });
        }

        if (!Array.isArray(articles) || articles.length === 0) {
            return res.status(400).json({ erreur: 'La commande doit contenir au moins un article.' });
        }

        const commande = new Commande({
            client: {
                nom: client.nom,
                telephone: client.telephone,
                adresse: client.adresse,
                email: client.email || ''
            },
            articles,
            total,
            modePaiement
        });

        await commande.save();

        return res.status(201).json({
            succes: true,
            numero: commande.numero,
            message: `Commande ${commande.numero} enregistrée.`
        });
    } catch (error) {
        console.error('Erreur POST /api/commandes :', error);
        return res.status(500).json({ erreur: 'Erreur serveur.' });
    }
});

// ===========================================
// PAIEMENT PAYTECH
// ===========================================

const PAYTECH_API_URL = 'https://paytech.sn/api/payment/request-payment';
const PAYTECH_API_KEY = process.env.PAYTECH_API_KEY;
const PAYTECH_SECRET_KEY = process.env.PAYTECH_SECRET_KEY;
const PAYTECH_ENV = process.env.PAYTECH_ENV || 'test';

function mapMethodePayTech(methode) {
    switch (methode) {
        case 'orange': return 'Orange Money';
        case 'wave': return 'Wave';
        case 'carte': return 'Carte Bancaire';
        default: return '';
    }
}

// Initier un paiement PayTech (Orange Money, Wave, Carte bancaire)
app.post('/api/paiement/initier', async (req, res) => {
    try {
        const { commande_id, montant, client, methode } = req.body;

        if (!commande_id || !montant || !client || !methode) {
            return res.status(400).json({ succes: false, erreur: 'Données de paiement incomplètes.' });
        }

        if (!PAYTECH_API_KEY || !PAYTECH_SECRET_KEY) {
            return res.status(500).json({ succes: false, erreur: 'Clés PayTech non configurées.' });
        }

        const targetPayment = mapMethodePayTech(methode);

        const payload = {
            item_name: `Commande Hygia ${commande_id}`,
            item_price: Math.round(montant),
            currency: 'XOF',
            ref_command: commande_id,
            command_name: `Matériel médical Hygia — ${commande_id}`,
            env: PAYTECH_ENV,
            target_payment: targetPayment,
            ipn_url: `${process.env.BACKEND_URL}/api/paiement/notification`,
            success_url: `${process.env.FRONTEND_URL}/commande-confirmee.html?ref=${commande_id}`,
            cancel_url: `${process.env.FRONTEND_URL}/panier.html?annule=1`,
            custom_field: JSON.stringify({
                client_nom: client.nom,
                client_tel: client.telephone,
                client_email: client.email,
                methode
            })
        };

        const response = await fetch(PAYTECH_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'API_KEY': PAYTECH_API_KEY,
                'API_SECRET': PAYTECH_SECRET_KEY
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.success === 1 && data.redirect_url) {
            await Commande.findOneAndUpdate(
                { numero: commande_id },
                {
                    $set: {
                        paytech_token: data.token || '',
                        statut: 'En attente paiement',
                        paiement_confirme: false
                    }
                }
            );

            return res.json({
                succes: true,
                redirect_url: data.redirect_url,
                token: data.token
            });
        }

        console.error('Erreur PayTech /payment/request-payment :', data);
        return res.status(400).json({ succes: false, erreur: 'Erreur initialisation paiement' });
    } catch (error) {
        console.error('Erreur POST /api/paiement/initier :', error);
        return res.status(500).json({ erreur: 'Erreur serveur' });
    }
});

// Webhook PayTech — notification automatique après paiement
app.post('/api/paiement/notification', async (req, res) => {
    try {
        const { type_event, ref_command, token } = req.body;

        if (!ref_command) {
            return res.status(200).json({ status: 'ok' });
        }

        const commande = await Commande.findOne({ numero: ref_command });

        if (!commande) {
            console.log('⚠️ IPN PayTech : commande introuvable pour ' + ref_command);
            return res.status(200).json({ status: 'ok' });
        }

        if (commande.paytech_token && token && commande.paytech_token !== token) {
            console.log('⚠️ IPN PayTech : token invalide pour ' + ref_command);
            return res.status(200).json({ status: 'ok' });
        }

        if (type_event === 'sale_complete') {
            const commandeConfirmee = await Commande.findOneAndUpdate(
                { numero: ref_command },
                { $set: { statut: 'Confirmée', paiement_confirme: true } },
                { new: true }
            );
            console.log('✅ Paiement PayTech confirmé : ' + ref_command);

            if (commandeConfirmee) {
                envoyerEmailRecapCommande(commandeConfirmee).catch(err => {
                    console.error('Erreur email récap commande :', err);
                });
            }
        } else {
            await Commande.findOneAndUpdate(
                { numero: ref_command },
                { $set: { statut: 'Paiement échoué', paiement_confirme: false } }
            );
            console.log('❌ Paiement PayTech échoué : ' + ref_command);
        }

        return res.status(200).json({ status: 'ok' });
    } catch (error) {
        console.error('Erreur POST /api/paiement/notification :', error);
        return res.status(200).json({ status: 'ok' });
    }
});

// Vérifier le statut d'un paiement (appelé depuis commande-confirmee.html)
app.get('/api/paiement/statut', async (req, res) => {
    try {
        const ref = req.query.ref;

        if (!ref) {
            return res.status(400).json({ erreur: 'Référence manquante.' });
        }

        const commande = await Commande.findOne({ numero: ref });

        if (!commande) {
            return res.status(404).json({ erreur: 'Commande introuvable' });
        }

        return res.json({
            statut: commande.statut,
            paiement_confirme: commande.paiement_confirme,
            numero: commande.numero,
            total: commande.total,
            modePaiement: commande.modePaiement,
            nom: commande.client?.nom || ''
        });
    } catch (error) {
        console.error('Erreur GET /api/paiement/statut :', error);
        return res.status(500).json({ erreur: 'Erreur serveur.' });
    }
});

// Lister toutes les commandes (admin)
app.get('/api/admin/commandes', verifierAdmin, async (req, res) => {
    try {
        const commandes = await Commande.find().sort({ date: -1 });
        return res.json(commandes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erreur: 'Erreur serveur.' });
    }
});

// Détails d'une commande (admin)
app.get('/api/admin/commandes/:numero', verifierAdmin, async (req, res) => {
    try {
        const commande = await Commande.findOne({ numero: req.params.numero });

        if (!commande) {
            return res.status(404).json({ erreur: 'Commande introuvable.' });
        }

        return res.json(commande);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erreur: 'Erreur serveur.' });
    }
});

// Modifier le statut d'une commande (admin) — Payé, livré, annulé
app.patch('/api/admin/commandes/:numero/statut', verifierAdmin, async (req, res) => {
    try {
        const { statut, notes } = req.body;

        const statutsValides = ['En attente', 'Payé non livré', 'Payé livré', 'Annulée'];
        if (statut && !statutsValides.includes(statut)) {
            return res.status(400).json({ erreur: 'Statut invalide.' });
        }

        const update = {};
        if (statut) update.statut = statut;
        if (typeof notes !== 'undefined') update.notes = notes;

        const commande = await Commande.findOneAndUpdate(
            { numero: req.params.numero },
            { $set: update },
            { new: true, runValidators: true }
        );

        if (!commande) {
            return res.status(404).json({ erreur: 'Commande introuvable.' });
        }

        return res.json({ succes: true, commande });
    } catch (error) {
        console.error('Erreur PATCH statut :', error);
        return res.status(500).json({ erreur: 'Erreur serveur.' });
    }
});

// Statistiques (admin)
app.get('/api/admin/stats', verifierAdmin, async (req, res) => {
    try {
        const totalCommandes = await Commande.countDocuments();
        const enAttente = await Commande.countDocuments({ statut: 'En attente' });
        const payeNonLivre = await Commande.countDocuments({ statut: 'Payé non livré' });
        const livrees = await Commande.countDocuments({ statut: 'Payé livré' });
        const annulees = await Commande.countDocuments({ statut: 'Annulée' });

        const chiffreAffairesResult = await Commande.aggregate([
            { $match: { statut: 'Payé livré' } },
            {
                $group: {
                    _id: null,
                    chiffreAffaires: { $sum: '$total' }
                }
            }
        ]);

        const chiffreAffaires = chiffreAffairesResult[0]?.chiffreAffaires || 0;

        return res.json({
            totalCommandes,
            enAttente,
            payeNonLivre,
            livrees,
            annulees,
            chiffreAffaires
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erreur: 'Erreur serveur.' });
    }
});

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).json({ erreur: 'Route non trouvée.' });
});

// Connexion MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('✅ Connecté à MongoDB');
        app.listen(PORT, () => {
            console.log(`🚀 Serveur démarré sur le port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('❌ Erreur MongoDB', error);
    });
