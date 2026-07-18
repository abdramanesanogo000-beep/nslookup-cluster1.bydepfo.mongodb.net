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
const helmet = require('helmet');
require('dotenv').config();

const Commande = require('./models/Commande');
const Utilisateur = require('./models/Utilisateur');
const Partenaire = require('./models/Partenaire');
const Produit = require('./models/Produit');
const produitsSeed = require('./data/produits');
const crypto = require('crypto');
const { envoyerEmailBienvenue, envoyerEmailRecapCommande, envoyerEmailReinitialisationMotDePasse } = require('./services/email');

const { signUserToken, verifierUtilisateur } = require('./middleware/auth');
const { signAdminToken, verifierAdmin, verifierMotDePasseAdmin } = require('./middleware/adminAuth');
const { globalLimiter, authLimiter } = require('./middleware/rateLimit');

const app = express();

// Nettoyage global des entrées : protection NoSQL + XSS basique
function sanitizeInput(req, res, next) {
    function clean(value) {
        if (typeof value === 'string') {
            return value.replace(/[<>]/g, '').trim();
        }
        if (Array.isArray(value)) {
            return value.map(clean);
        }
        if (value && typeof value === 'object' && !(value instanceof Date)) {
            const cleanObj = {};
            for (const [key, val] of Object.entries(value)) {
                // Protège contre les injections NoSQL via clés contenant $ ou .
                if (key.startsWith('$') || key.includes('.')) continue;
                const safeKey = key.replace(/[<>]/g, '');
                cleanObj[safeKey] = clean(val);
            }
            return cleanObj;
        }
        return value;
    }
    req.body = clean(req.body);
    req.query = clean(req.query);
    req.params = clean(req.params);
    next();
}
const PORT = process.env.PORT || 3000;

// Vérifications critiques de configuration
if (!process.env.JWT_SECRET) {
    console.error('❌ JWT_SECRET manquant dans .env');
    process.exit(1);
}
if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI manquant dans .env');
    process.exit(1);
}
if (!process.env.ADMIN_PASSWORD_HASH) {
    console.warn('⚠️ ADMIN_PASSWORD_HASH manquant. La connexion admin sera refusée.');
}

// CORS restreint aux origines autorisées
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000,http://localhost:5500,http://localhost:5501,http://127.0.0.1:5500').split(',').map(o => o.trim());
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.warn('CORS rejeté :', origin);
            callback(new Error('CORS non autorisé'));
        }
    },
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json());
app.use(sanitizeInput);
app.use(globalLimiter);

// Middleware de log simple
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} — ${req.method} ${req.path}`);
    next();
});

// ===========================================
// PARTENAIRES & CODES PROMO
// ===========================================

const REDUCTION_CLIENT_PARTENAIRE = 5; // % de réduction client sur code partenaire

// Calcule la commission d'un partenaire selon les paliers de chiffre d'affaires généré
function calculerCommission(totalFCFA) {
    let taux;
    if (totalFCFA >= 1000000) taux = 10;
    else if (totalFCFA >= 500000) taux = 5;
    else taux = 3;
    return { taux, montant: Math.round(totalFCFA * taux / 100) };
}

// Authentification admin centralisée dans middleware/adminAuth.js (JWT + bcrypt)

// Health check
app.get('/', (req, res) => {
    res.json({ statut: 'OK', service: 'Hygia API', version: '2.0' });
});

// Seeding automatique des produits si la collection est vide
async function seedProduits() {
    try {
        const count = await Produit.countDocuments();
        if (count === 0) {
            await Produit.insertMany(produitsSeed);
            console.log(`✅ ${produitsSeed.length} produits seedés.`);
        }
    } catch (err) {
        console.error('❌ Erreur seed produits :', err);
    }
}

// Liste publique des produits (catalogue)
app.get('/api/produits', async (req, res) => {
    try {
        const produits = await Produit.find({ actif: true }).sort({ id: 1 }).select('-_id id nom prix image categorie description quantiteEnStock');
        res.json({ succes: true, produits });
    } catch (error) {
        console.error('Erreur GET /api/produits :', error);
        res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Connexion admin (token JWT)
app.post('/api/admin/connexion', authLimiter, async (req, res) => {
    try {
        const { motdepasse } = req.body;
        if (!motdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Mot de passe obligatoire.' });
        }
        if (!process.env.ADMIN_PASSWORD_HASH) {
            return res.status(500).json({ succes: false, erreur: 'Configuration admin incomplète.' });
        }
        const valide = await verifierMotDePasseAdmin(motdepasse);
        if (!valide) {
            return res.status(401).json({ succes: false, erreur: 'Mot de passe incorrect.' });
        }
        const token = signAdminToken();
        res.json({ succes: true, token });
    } catch (error) {
        console.error('Erreur /api/admin/connexion :', error);
        res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// ===========================================
// AUTHENTIFICATION UTILISATEURS
// ===========================================

// Inscription
app.post('/api/auth/inscription', authLimiter, async (req, res) => {
    try {
        const nom = String(req.body.nom || '').trim();
        const telephone = String(req.body.telephone || '').trim();
        const email = String(req.body.email || '').trim();
        const motdepasse = String(req.body.motdepasse || '');

        if (!nom || !telephone || !email || !motdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Tous les champs sont obligatoires.' });
        }

        const emailNormalise = email.toLowerCase();
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

        const token = signUserToken(utilisateur);

        return res.status(201).json({
            succes: true,
            message: 'Compte créé avec succès.',
            token,
            utilisateur: { nom: utilisateur.nom, email: utilisateur.email, telephone: utilisateur.telephone }
        });
    } catch (error) {
        console.error('Erreur POST /api/auth/inscription :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Connexion
app.post('/api/auth/connexion', authLimiter, async (req, res) => {
    try {
        const email = String(req.body.email || '').trim();
        const motdepasse = String(req.body.motdepasse || '');

        if (!email || !motdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Email et mot de passe obligatoires.' });
        }

        const emailNormalise = email.toLowerCase();
        const utilisateur = await Utilisateur.findOne({ email: emailNormalise });

        if (!utilisateur) {
            return res.status(401).json({ succes: false, erreur: 'Email ou mot de passe incorrect.' });
        }

        const motDePasseValide = await utilisateur.comparerMotDePasse(motdepasse);
        if (!motDePasseValide) {
            return res.status(401).json({ succes: false, erreur: 'Email ou mot de passe incorrect.' });
        }

        const token = signUserToken(utilisateur);

        return res.json({
            succes: true,
            message: 'Connexion réussie.',
            token,
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

// Mot de passe oublié — envoyer lien de réinitialisation
app.post('/api/auth/mot-de-passe-oublie', async (req, res) => {
    try {
        const email = String(req.body.email || '').trim();
        if (!email) return res.status(400).json({ succes: false, erreur: 'Email obligatoire.' });

        const utilisateur = await Utilisateur.findOne({ email: email.toLowerCase() });

        // Toujours répondre OK pour ne pas révéler si l'email existe
        if (!utilisateur) {
            return res.json({ succes: true, message: 'Si cet email est enregistré, un lien vous a été envoyé.' });
        }

        const token = crypto.randomBytes(32).toString('hex');
        utilisateur.resetToken = token;
        utilisateur.resetTokenExpire = new Date(Date.now() + 60 * 60 * 1000); // 1 heure
        await utilisateur.save();

        envoyerEmailReinitialisationMotDePasse(utilisateur.email, utilisateur.nom, token).catch(err => {
            console.error('Erreur email reset mot de passe :', err);
        });

        return res.json({ succes: true, message: 'Si cet email est enregistré, un lien vous a été envoyé.' });
    } catch (error) {
        console.error('Erreur /api/auth/mot-de-passe-oublie :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Réinitialiser le mot de passe avec le token
app.post('/api/auth/reinitialiser-mot-de-passe', async (req, res) => {
    try {
        const { token, nouveauMotDePasse } = req.body;

        if (!token || !nouveauMotDePasse) {
            return res.status(400).json({ succes: false, erreur: 'Token et nouveau mot de passe obligatoires.' });
        }

        if (nouveauMotDePasse.length < 6) {
            return res.status(400).json({ succes: false, erreur: 'Le mot de passe doit contenir au moins 6 caractères.' });
        }

        const utilisateur = await Utilisateur.findOne({
            resetToken: token,
            resetTokenExpire: { $gt: new Date() }
        });

        if (!utilisateur) {
            return res.status(400).json({ succes: false, erreur: 'Lien invalide ou expiré. Veuillez refaire une demande.' });
        }

        utilisateur.motdepasse = nouveauMotDePasse;
        utilisateur.resetToken = null;
        utilisateur.resetTokenExpire = null;
        await utilisateur.save();

        return res.json({ succes: true, message: 'Mot de passe réinitialisé avec succès.' });
    } catch (error) {
        console.error('Erreur /api/auth/reinitialiser-mot-de-passe :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Supprimer un compte utilisateur (JWT requis)
app.delete('/api/auth/supprimer', verifierUtilisateur, async (req, res) => {
    try {
        const { motdepasse } = req.body;
        if (!motdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Mot de passe obligatoire.' });
        }

        const utilisateur = await Utilisateur.findById(req.user._id);
        if (!utilisateur) {
            return res.status(404).json({ succes: false, erreur: 'Compte introuvable.' });
        }

        const motDePasseValide = await utilisateur.comparerMotDePasse(motdepasse);
        if (!motDePasseValide) {
            return res.status(401).json({ succes: false, erreur: 'Mot de passe incorrect.' });
        }

        await Utilisateur.deleteOne({ _id: req.user._id });
        return res.json({ succes: true, message: 'Compte supprimé avec succès.' });
    } catch (error) {
        console.error('Erreur DELETE /api/auth/supprimer :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Consulter le profil (JWT requis)
app.get('/api/auth/profil', verifierUtilisateur, async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findById(req.user._id).select('-motdepasse -resetToken -resetTokenExpire');
        if (!utilisateur) {
            return res.status(404).json({ succes: false, erreur: 'Compte introuvable.' });
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
        console.error('Erreur GET /api/auth/profil :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Modifier le profil (nom, téléphone) — JWT requis
app.patch('/api/auth/profil', verifierUtilisateur, async (req, res) => {
    try {
        const { motdepasse, nom, telephone } = req.body;
        if (!motdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Mot de passe actuel obligatoire.' });
        }

        const utilisateur = await Utilisateur.findById(req.user._id);
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

// Changer le mot de passe — JWT requis
app.patch('/api/auth/motdepasse', verifierUtilisateur, async (req, res) => {
    try {
        const { ancienMotdepasse, nouveauMotdepasse } = req.body;

        if (!ancienMotdepasse || !nouveauMotdepasse) {
            return res.status(400).json({ succes: false, erreur: 'Tous les champs sont obligatoires.' });
        }

        if (nouveauMotdepasse.length < 6) {
            return res.status(400).json({ succes: false, erreur: 'Le nouveau mot de passe doit contenir au moins 6 caractères.' });
        }

        const utilisateur = await Utilisateur.findById(req.user._id);
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

// Vérifier un code promo (partenaire ou HYGIA)
app.post('/api/verifier-code-promo', async (req, res) => {
    try {
        const code = String(req.body.code || '').trim();
        if (!code) return res.json({ valide: false });

        const codeNormalise = code.toUpperCase();

        // Code interne HYGIA : valide 14 jours glissants
        if (codeNormalise === 'HYGIA') {
            const promoEndDate = new Date();
            promoEndDate.setDate(promoEndDate.getDate() + 14);
            const isActive = new Date() <= promoEndDate;
            return res.json({ valide: isActive, reduction: 5, type: 'hygia' });
        }

        const partenaire = await Partenaire.findOne({
            codePromo: codeNormalise,
            actif: true
        });

        if (!partenaire) {
            return res.json({ valide: false });
        }

        return res.json({ valide: true, reduction: REDUCTION_CLIENT_PARTENAIRE, type: 'partenaire' });
    } catch (error) {
        console.error('Erreur /api/verifier-code-promo :', error);
        return res.status(500).json({ valide: false, erreur: 'Erreur serveur.' });
    }
});

// Créer une commande (recalcul côté serveur, vérification stock)
app.post('/api/commandes', async (req, res) => {
    try {
        const { articles } = req.body;
        const client = {
            nom: String(req.body.client?.nom || '').trim(),
            telephone: String(req.body.client?.telephone || '').trim(),
            adresse: String(req.body.client?.adresse || '').trim(),
            commune: String(req.body.client?.commune || '').trim(),
            email: String(req.body.client?.email || '').trim().toLowerCase()
        };
        const codePromo = String(req.body.codePromo || '').trim();
        const modePaiement = String(req.body.modePaiement || '').trim();
        const zoneLivraison = String(req.body.zoneLivraison || '').trim();

        if (!client.nom || !client.telephone || !client.adresse || !client.commune) {
            return res.status(400).json({ erreur: 'Informations de livraison incomplètes.' });
        }

        if (!Array.isArray(articles) || articles.length === 0) {
            return res.status(400).json({ erreur: 'La commande doit contenir au moins un article.' });
        }

        // Vérification et décrémentation atomique du stock
        let sousTotal = 0;
        const articlesFinaux = [];
        const rollback = [];

        for (const item of articles) {
            const id = Number(item.id);
            const quantite = Number(item.quantite) || 0;

            if (!quantite || quantite < 1) {
                return res.status(400).json({ erreur: `Quantité invalide pour l'article ${id}.` });
            }

            const produit = await Produit.findOneAndUpdate(
                { id, actif: true, quantiteEnStock: { $gte: quantite } },
                { $inc: { quantiteEnStock: -quantite } },
                { new: true }
            );

            if (!produit) {
                for (const r of rollback) {
                    await Produit.findOneAndUpdate({ id: r.id }, { $inc: { quantiteEnStock: r.quantite } });
                }
                return res.status(400).json({
                    erreur: `Stock insuffisant ou produit ${id} introuvable/inactif.`
                });
            }

            const prixUnitaire = produit.prix;
            const ligneSousTotal = prixUnitaire * quantite;
            sousTotal += ligneSousTotal;

            articlesFinaux.push({
                id,
                nom: produit.nom,
                prix: prixUnitaire,
                quantite,
                sousTotal: ligneSousTotal
            });

            rollback.push({ id, quantite });
        }

        // Validation et calcul du code promo
        let reduction = 0;
        let codePromoValide = '';
        let livraisonGratuite = false;

        if (codePromo) {
            const codeNormalise = codePromo.toUpperCase();

            if (codeNormalise === 'HYGIA') {
                const promoEndDate = new Date();
                promoEndDate.setDate(promoEndDate.getDate() + 14);
                if (new Date() <= promoEndDate) {
                    reduction = Math.floor(sousTotal * 5 / 100);
                    codePromoValide = 'HYGIA';
                    livraisonGratuite = true;
                }
            } else {
                const partenaire = await Partenaire.findOne({
                    codePromo: codeNormalise,
                    actif: true
                });
                if (partenaire) {
                    reduction = Math.floor(sousTotal * REDUCTION_CLIENT_PARTENAIRE / 100);
                    codePromoValide = partenaire.codePromo;
                    livraisonGratuite = true;
                }
            }
        }

        // Calcul des frais de livraison
        let fraisLivraison = 0;
        if (!livraisonGratuite) {
            fraisLivraison = zoneLivraison ? 1000 : 0;
        }

        const totalFinal = Math.max(0, sousTotal - reduction + fraisLivraison);

        // Décrémentation atomique du stock
        for (const upd of stockUpdates) {
            const result = await Produit.updateOne(
                { id: upd.id, quantiteEnStock: { $gte: upd.quantite } },
                { $inc: { quantiteEnStock: -upd.quantite } }
            );
            if (result.modifiedCount !== 1) {
                return res.status(409).json({
                    erreur: `Le stock du produit ${upd.id} a changé entre temps. Veuillez rafraîchir votre panier.`
                });
            }
        }

        // Déterminer le statut selon le mode de paiement
        const modeNormalise = modePaiement.toLowerCase();
        const estPaiementLivraison = modeNormalise.includes('livraison');
        const statut = estPaiementLivraison ? 'En attente' : 'En attente paiement';

        const commande = new Commande({
            client,
            articles: articlesFinaux,
            total: totalFinal,
            fraisLivraison,
            modePaiement,
            statut,
            codePromoPartenaire: codePromoValide,
            reductionPartenaire: reduction
        });

        await commande.save();

        envoyerEmailRecapCommande(commande).catch(err => {
            console.error('Erreur email confirmation commande :', err);
        });

        return res.status(201).json({
            succes: true,
            numero: commande.numero,
            total: commande.total,
            statut: commande.statut,
            message: `Commande ${commande.numero} enregistrée.`
        });
    } catch (error) {
        console.error('Erreur POST /api/commandes :', error);
        return res.status(500).json({ erreur: 'Erreur serveur.' });
    }
});

// Commandes d'un client (JWT requis)
app.get('/api/mes-commandes', verifierUtilisateur, async (req, res) => {
    try {
        const commandes = await Commande.find({ 'client.email': req.user.email.toLowerCase().trim() })
            .sort({ date: -1 })
            .select('numero date articles total modePaiement statut client');

        return res.json({ succes: true, commandes });
    } catch (error) {
        console.error('Erreur GET /api/mes-commandes :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// ===========================================
// ADMIN — GESTION DES PARTENAIRES
// ===========================================

// Créer un partenaire
app.post('/api/admin/partenaires', verifierAdmin, async (req, res) => {
    try {
        const nom = String(req.body.nom || '').trim();
        const email = String(req.body.email || '').trim().toLowerCase();
        const telephone = String(req.body.telephone || '').trim();
        const codePromo = String(req.body.codePromo || '').trim();

        if (!nom || !codePromo) {
            return res.status(400).json({ succes: false, erreur: 'Nom et code promo obligatoires.' });
        }

        const codeNormalise = codePromo.toUpperCase();
        const existe = await Partenaire.findOne({ codePromo: codeNormalise });
        if (existe) {
            return res.status(400).json({ succes: false, erreur: 'Ce code promo est déjà utilisé.' });
        }

        const partenaire = new Partenaire({
            nom,
            email,
            telephone,
            codePromo: codeNormalise
        });

        await partenaire.save();
        return res.status(201).json({ succes: true, partenaire });
    } catch (error) {
        console.error('Erreur POST /api/admin/partenaires :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Lister tous les partenaires avec leurs statistiques
app.get('/api/admin/partenaires', verifierAdmin, async (req, res) => {
    try {
        const partenaires = await Partenaire.find().sort({ dateCreation: -1 });

        const resultats = await Promise.all(partenaires.map(async (p) => {
            const commandes = await Commande.find({
                codePromoPartenaire: p.codePromo,
                statut: { $ne: 'Annulée' }
            });

            const nbCommandes = commandes.length;
            const totalFCFA = commandes.reduce((sum, c) => sum + c.total, 0);
            const commission = calculerCommission(totalFCFA);

            return {
                _id: p._id,
                nom: p.nom,
                email: p.email,
                telephone: p.telephone,
                codePromo: p.codePromo,
                actif: p.actif,
                dateCreation: p.dateCreation,
                nbCommandes,
                totalFCFA,
                commission
            };
        }));

        return res.json(resultats);
    } catch (error) {
        console.error('Erreur GET /api/admin/partenaires :', error);
        return res.status(500).json({ erreur: 'Erreur serveur.' });
    }
});

// Détail d'un partenaire avec évolution mensuelle (pour graphique)
app.get('/api/admin/partenaires/:id', verifierAdmin, async (req, res) => {
    try {
        const partenaire = await Partenaire.findById(req.params.id);
        if (!partenaire) {
            return res.status(404).json({ succes: false, erreur: 'Partenaire introuvable.' });
        }

        const commandes = await Commande.find({
            codePromoPartenaire: partenaire.codePromo,
            statut: { $ne: 'Annulée' }
        }).sort({ date: 1 });

        const nbCommandes = commandes.length;
        const totalFCFA = commandes.reduce((sum, c) => sum + c.total, 0);
        const commission = calculerCommission(totalFCFA);

        // Évolution mensuelle (12 derniers mois)
        const moisLabels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
        const evolutionMap = {};

        commandes.forEach(c => {
            const d = new Date(c.date);
            const cle = `${d.getFullYear()}-${d.getMonth()}`;
            if (!evolutionMap[cle]) {
                evolutionMap[cle] = { mois: `${moisLabels[d.getMonth()]} ${d.getFullYear()}`, total: 0, nb: 0, ordre: d.getFullYear() * 12 + d.getMonth() };
            }
            evolutionMap[cle].total += c.total;
            evolutionMap[cle].nb += 1;
        });

        const evolutionMensuelle = Object.values(evolutionMap)
            .sort((a, b) => a.ordre - b.ordre)
            .slice(-12)
            .map(e => ({ mois: e.mois, total: e.total, nb: e.nb }));

        return res.json({
            succes: true,
            partenaire: {
                _id: partenaire._id,
                nom: partenaire.nom,
                email: partenaire.email,
                telephone: partenaire.telephone,
                codePromo: partenaire.codePromo,
                actif: partenaire.actif,
                dateCreation: partenaire.dateCreation,
                nbCommandes,
                totalFCFA,
                commission,
                evolutionMensuelle
            }
        });
    } catch (error) {
        console.error('Erreur GET /api/admin/partenaires/:id :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Modifier un partenaire (infos ou statut actif/inactif)
app.patch('/api/admin/partenaires/:id', verifierAdmin, async (req, res) => {
    try {
        const nom = String(req.body.nom || '').trim();
        const email = String(req.body.email || '').trim().toLowerCase();
        const telephone = String(req.body.telephone || '').trim();
        const actif = req.body.actif === true || req.body.actif === 'true';
        const partenaire = await Partenaire.findById(req.params.id);

        if (!partenaire) {
            return res.status(404).json({ succes: false, erreur: 'Partenaire introuvable.' });
        }

        if (nom) partenaire.nom = nom;
        if (email) partenaire.email = email;
        if (telephone) partenaire.telephone = telephone;
        partenaire.actif = actif;

        await partenaire.save();
        return res.json({ succes: true, partenaire });
    } catch (error) {
        console.error('Erreur PATCH /api/admin/partenaires/:id :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// Supprimer un partenaire
app.delete('/api/admin/partenaires/:id', verifierAdmin, async (req, res) => {
    try {
        const partenaire = await Partenaire.findByIdAndDelete(req.params.id);
        if (!partenaire) {
            return res.status(404).json({ succes: false, erreur: 'Partenaire introuvable.' });
        }
        return res.json({ succes: true, message: 'Partenaire supprimé.' });
    } catch (error) {
        console.error('Erreur DELETE /api/admin/partenaires/:id :', error);
        return res.status(500).json({ succes: false, erreur: 'Erreur serveur.' });
    }
});

// ===========================================
// PAIEMENT (DESACTIVE TEMPORAIREMENT)
// ===========================================

app.post('/api/paiement/initier', (req, res) => {
    return res.status(501).json({
        succes: false,
        erreur: 'Paiement desactive temporairement (integration en cours).'
    });
});

app.post('/api/paiement/notification', (req, res) => {
    return res.status(200).json({ status: 'ok' });
});

/*
// ===========================================
// PAIEMENT PAYTECH
// ===========================================

const PAYTECH_API_URL = 'https://paytech.sn/api/payment/request-payment';
const PAYTECH_API_KEY = process.env.PAYTECH_API_KEY;
const PAYTECH_SECRET_KEY = process.env.PAYTECH_SECRET_KEY;
const PAYTECH_ENV = process.env.PAYTECH_ENV || 'test';

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

        const payload = {
            item_name: `Commande Hygia ${commande_id}`,
            item_price: Math.round(montant),
            currency: 'XOF',
            ref_command: commande_id,
            command_name: `Matériel médical Hygia — ${commande_id}`,
            env: PAYTECH_ENV,
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
*/

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
    .then(async () => {
        console.log('✅ Connecté à MongoDB');
        await seedProduits();
        app.listen(PORT, () => {
            console.log(`🚀 Serveur démarré sur le port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('❌ Erreur MongoDB', error);
    });
