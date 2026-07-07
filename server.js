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
// PAIEMENT CINETPAY
// ===========================================

const CINETPAY_API_URL = 'https://api-checkout.cinetpay.com/v2/payment';
const CINETPAY_CHECK_URL = 'https://api-checkout.cinetpay.com/v2/payment/check';

function genererTransactionId() {
    const random = Math.random().toString(36).substring(2, 7);
    return `HYG-${Date.now()}-${random}`;
}

// Initier un paiement CinetPay (Orange Money, Wave, Carte bancaire)
app.post('/api/paiement/initier', async (req, res) => {
    try {
        const { commande_id, montant, client, methode } = req.body;

        if (!montant || !client || !methode) {
            return res.status(400).json({ succes: false, erreur: 'Données de paiement incomplètes.' });
        }

        const transaction_id = genererTransactionId();

        const channels = methode === 'carte' ? 'CREDIT_CARD' : 'MOBILE_MONEY';

        const payload = {
            apikey: process.env.CINETPAY_API_KEY,
            site_id: process.env.CINETPAY_SITE_ID,
            transaction_id,
            amount: Math.round(montant),
            currency: 'XOF',
            description: `Commande Hygia ${commande_id || ''}`.trim(),
            return_url: `${process.env.FRONTEND_URL}/commande-confirmee.html?transaction=${transaction_id}`,
            notify_url: `${process.env.BACKEND_URL}/api/paiement/notification`,
            customer_name: client.nom || '',
            customer_email: client.email || 'client@hygia.com',
            customer_phone_number: client.telephone || '',
            customer_address: client.adresse || '',
            customer_city: 'Bamako',
            customer_country: 'ML',
            channels,
            lang: 'fr',
            metadata: commande_id || ''
        };

        const response = await fetch(CINETPAY_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.code === '201') {
            if (commande_id) {
                await Commande.findOneAndUpdate(
                    { numero: commande_id },
                    { $set: { transaction_id, statut: 'En attente paiement' } }
                );
            }

            return res.json({
                succes: true,
                payment_url: data.data.payment_url,
                transaction_id
            });
        }

        return res.status(400).json({ succes: false, erreur: data.message || 'Erreur CinetPay.' });
    } catch (error) {
        console.error('Erreur POST /api/paiement/initier :', error);
        return res.status(500).json({ erreur: 'Erreur serveur.' });
    }
});

// Webhook CinetPay — notification automatique après paiement
app.post('/api/paiement/notification', async (req, res) => {
    try {
        const cpm_trans_id = req.body.cpm_trans_id;

        if (!cpm_trans_id) {
            return res.status(200).send('OK');
        }

        const response = await fetch(CINETPAY_CHECK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                apikey: process.env.CINETPAY_API_KEY,
                site_id: process.env.CINETPAY_SITE_ID,
                transaction_id: cpm_trans_id
            })
        });

        const data = await response.json();

        if (data.code === '00' && data.data && data.data.status === 'ACCEPTED') {
            const commande = await Commande.findOneAndUpdate(
                { transaction_id: cpm_trans_id },
                { $set: { statut: 'Payé non livré', paiement_confirme: true } },
                { new: true }
            );
            console.log('✅ Paiement confirmé : ' + cpm_trans_id);

            if (commande) {
                envoyerEmailRecapCommande(commande).catch(err => {
                    console.error('Erreur email récap commande :', err);
                });
            }
        } else {
            await Commande.findOneAndUpdate(
                { transaction_id: cpm_trans_id },
                { $set: { statut: 'Paiement échoué' } }
            );
            console.log('❌ Paiement échoué : ' + cpm_trans_id);
        }

        return res.status(200).send('OK');
    } catch (error) {
        console.error('Erreur POST /api/paiement/notification :', error);
        return res.status(200).send('OK');
    }
});

// Vérifier le statut d'un paiement (appelé depuis commande-confirmee.html)
app.get('/api/paiement/verifier', async (req, res) => {
    try {
        const transaction_id = req.query.transaction;

        if (!transaction_id) {
            return res.status(400).json({ statut: 'FAILED', erreur: 'Transaction manquante.' });
        }

        const response = await fetch(CINETPAY_CHECK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                apikey: process.env.CINETPAY_API_KEY,
                site_id: process.env.CINETPAY_SITE_ID,
                transaction_id
            })
        });

        const data = await response.json();

        if (data.code === '00') {
            const commande = await Commande.findOne({ transaction_id });

            return res.json({
                statut: data.data.status,
                numero: commande?.numero || '',
                total: commande?.total || 0,
                methode: commande?.modePaiement || '',
                nom: commande?.client?.nom || ''
            });
        }

        return res.json({ statut: 'FAILED' });
    } catch (error) {
        console.error('Erreur GET /api/paiement/verifier :', error);
        return res.status(500).json({ statut: 'FAILED', erreur: 'Erreur serveur.' });
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
