# Backend Hygia

API Node.js + Express + MongoDB pour la gestion des commandes du site Hygia.

## Variables d'environnement (Render)

Dans les settings de ton Web Service Render, ajoute :

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hygia?retryWrites=true&w=majority
ADMIN_PASSWORD=ton_mot_de_passe_admin
PORT=3000

# PayTech (paiement Orange Money / Wave / Carte bancaire)
PAYTECH_API_KEY=ta_cle_api_paytech
PAYTECH_SECRET_KEY=ta_cle_secrete_paytech
PAYTECH_ENV=prod

# SendGrid (emails de bienvenue et récapitulatifs de commande)
SENDGRID_API_KEY=ta_cle_api_sendgrid
EMAIL_FROM=contact@hygia-mali.com

FRONTEND_URL=https://abdramanesanogo000-beep.github.io/sitehygia.github.io
BACKEND_URL=https://ton-url-render.onrender.com
```

⚠️ Ne jamais committer les clés PayTech et SendGrid dans le code. Elles doivent uniquement
exister dans les variables d'environnement de Render (ou dans un fichier `.env`
local non versionné).

## Commandes Render

- **Build command** : `npm install`
- **Start command** : `node server.js`

## Routes API

- `POST /api/auth/inscription` — Créer un compte client (envoie un email de bienvenue)
- `POST /api/auth/connexion` — Connecter un client
- `POST /api/auth/profil` — Consulter le profil (email + mot de passe requis)
- `PATCH /api/auth/profil` — Modifier le profil (nom, téléphone)
- `PATCH /api/auth/motdepasse` — Changer le mot de passe
- `DELETE /api/auth/supprimer` — Supprimer un compte client (email + mot de passe requis)
- `POST /api/commandes` — Créer une commande (appelé depuis le site)
- `POST /api/paiement/initier` — Initier un paiement PayTech (Orange Money, Wave, Carte)
- `POST /api/paiement/notification` — Webhook PayTech (confirmation automatique du paiement)
- `GET /api/paiement/verifier?transaction=XXX` — Vérifier le statut d'un paiement
- `GET /api/admin/commandes` — Lister les commandes (admin)
- `GET /api/admin/commandes/:numero` — Détails d'une commande (admin)
- `PATCH /api/admin/commandes/:numero/statut` — Modifier statut (admin)
- `GET /api/admin/stats` — Statistiques (admin)

Toutes les routes admin nécessitent le header `x-admin-password`.

Sur PayTech, l'URL de notification (webhook) à configurer est :
`BACKEND_URL/api/paiement/notification`

## Déploiement

1. Pousser ce dossier `backend/` sur un repo GitHub privé (sans le `.env`)
2. Créer un Web Service sur Render
3. Remplacer l'URL dans `yames.js`, `admin.html` et `admin-commandes.html`
