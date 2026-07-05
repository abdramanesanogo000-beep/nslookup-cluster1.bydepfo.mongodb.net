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
