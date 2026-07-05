# Backend Hygia

API Node.js + Express + MongoDB pour la gestion des commandes du site Hygia.

## Variables d'environnement (Render)

Dans les settings de ton Web Service Render, ajoute :

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hygia?retryWrites=true&w=majority
ADMIN_PASSWORD=ton_mot_de_passe_admin
PORT=3000
```

## Commandes Render

- **Build command** : `npm install`
- **Start command** : `node server.js`

## Routes API

- `POST /api/commandes` — Créer une commande (appelé depuis le site)
- `GET /api/admin/commandes` — Lister les commandes (admin)
- `GET /api/admin/commandes/:numero` — Détails d'une commande (admin)
- `PATCH /api/admin/commandes/:numero/statut` — Modifier statut (admin)
- `GET /api/admin/stats` — Statistiques (admin)

Toutes les routes admin nécessitent le header `x-admin-password`.

## Déploiement

1. Pousser ce dossier `backend/` sur un repo GitHub privé (sans le `.env`)
2. Créer un Web Service sur Render
3. Remplacer l'URL dans `yames.js`, `admin.html` et `admin-commandes.html`
