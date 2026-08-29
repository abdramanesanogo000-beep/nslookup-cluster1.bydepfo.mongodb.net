# Hygia Checkout - Installation WordPress + WooCommerce

Ce guide explique comment installer et configurer WordPress + WooCommerce pour gérer le checkout du site Hygia avec le plugin Till PayTech / Cash2Cash Momo Ultimate.

## 📋 Prérequis

- Un hébergement web avec PHP 7.4 ou supérieur
- Une base de données MySQL
- Accès FTP ou gestionnaire de fichiers
- Nom de domaine (optionnel : sous-domaine pour WordPress)

## 🚀 Installation

### 1. Télécharger WordPress

1. Téléchargez la dernière version de WordPress depuis [wordpress.org](https://wordpress.org/download/)
2. Extrayez le contenu dans le dossier `wordpress-checkout/`
3. Uploadez tout le contenu sur votre hébergement

### 2. Configurer la base de données

1. Créez une base de données MySQL sur votre hébergement
2. Modifiez le fichier `wp-config.php` avec vos informations :

```php
define( 'DB_NAME', 'hygia_checkout' );
define( 'DB_USER', 'votre_utilisateur_mysql' );
define( 'DB_PASSWORD', 'votre_mot_de_passe_mysql' );
define( 'DB_HOST', 'localhost' );
```

3. Générez des clés uniques sur [https://api.wordpress.org/secret-key/1.1/salt/](https://api.wordpress.org/secret-key/1.1/salt/)
4. Remplacez les clés par défaut dans `wp-config.php`

### 3. Installer WordPress

1. Accédez à votre URL WordPress (ex: `https://hygia.com/wordpress-checkout/`)
2. Suivez les instructions d'installation
3. Choisissez un titre de site (ex: "Hygia Checkout")
4. Créez un compte administrateur

### 4. Installer le thème Hygia Checkout

1. Uploadez le dossier `wp-content/themes/hygia-checkout/` sur votre serveur
2. Connectez-vous à l'administration WordPress
3. Allez dans **Apparence > Thèmes**
4. Activez le thème **Hygia Checkout**

### 5. Installer WooCommerce

1. Allez dans **Extensions > Ajouter**
2. Recherchez "WooCommerce"
3. Cliquez sur **Installer** puis **Activer**
4. Suivez l'assistant de configuration WooCommerce

### 6. Configurer WooCommerce

#### Paramètres généraux

1. Allez dans **WooCommerce > Paramètres**
2. **Général** :
   - Devise : FCFA (XOF)
   - Position de la devise : Droite avec espace
   - Séparateur des milliers : Espace
   - Séparateur décimal : Virgule

3. **Produits** :
   - Poids : kg
   - Dimensions : cm

4. **Livraison** :
   - Désactivez les zones de livraison si paiement en ligne uniquement

5. **Paiement** :
   - Activez "Paiement à la livraison" (optionnel)
   - Laissez les autres méthodes pour le moment

#### Créer un produit de test

1. Allez dans **Produits > Ajouter**
2. Nom : "Produit test Hygia"
3. Prix : 1000 FCFA
4. Visibilité du catalogue : Caché
5. Cliquez sur **Publier**

Notez l'ID du produit (visible dans l'URL après publication)

### 7. Configurer l'URL WordPress dans le frontend

1. Modifiez le fichier `yames.js` du site principal
2. Changez la constante `WORDPRESS_API_URL` :

```javascript
const WORDPRESS_API_URL = 'https://votre-domaine.com/wordpress-checkout/wp-json/hygia-checkout/v1';
```

3. Remplacez `votre-domaine.com` par votre vrai domaine

## 🔌 Installation du plugin Till PayTech

### 1. Télécharger le plugin

1. Obtenez le plugin Till PayTech / Cash2Cash Momo Ultimate
2. Uploadez-le dans `wp-content/plugins/`

### 2. Activer le plugin

1. Allez dans **Extensions**
2. Activez "Till PayTech / Cash2Cash Momo Ultimate"

### 3. Configurer le plugin

1. Allez dans **WooCommerce > Paramètres > Paiement**
2. Configurez Till PayTech avec vos clés API
3. Activez la méthode de paiement

## 🧪 Tester le flux

### Test avec un produit unique

1. Sur le site principal, ajoutez un produit au panier
2. Cliquez sur "Payer"
3. Vous devriez être redirigé vers le checkout WordPress
4. Vérifiez que :
   - Le produit est dans le panier WooCommerce
   - Le design correspond au site Hygia
   - Les champs du formulaire sont pré-remplis
5. Complétez le checkout et testez le paiement

### Test avec plusieurs produits

Une fois le flux fonctionnel avec un produit :

1. Créez tous les produits dans WooCommerce
2. Assurez-vous que les IDs correspondent aux produits du site principal
3. Testez avec plusieurs produits dans le panier

## 🔧 Personnalisation

### Modifier le design

Le design du checkout est personnalisé dans `wp-content/themes/hygia-checkout/style.css`.

Pour modifier les couleurs :
```css
:root {
    --hygia-primary: #185FA5;
    --hygia-secondary: #0D3B66;
    --hygia-accent: #E74C3C;
}
```

### Ajouter le logo

1. Allez dans **Apparence > Personnaliser**
2. **Identité du site**
3. Uploadez votre logo

## 📊 Gestion des commandes

Les commandes créées via WooCommerce seront visibles dans :
- **WooCommerce > Commandes**

Vous pouvez y voir :
- Les détails de la commande
- Le statut du paiement
- Les informations du client

## 🔒 Sécurité

- Ne jamais exposer les clés API dans le JavaScript frontend
- Utilisez HTTPS pour votre installation WordPress
- Gardez WordPress et les plugins à jour
- Utilisez des mots de passe forts

## 🐛 Dépannage

### Erreur 404 sur l'API

Vérifiez que :
- Les permaliens WordPress sont configurés (Réglages > Permaliens)
- Le thème Hygia Checkout est bien activé
- L'URL API dans `yames.js` est correcte

### Panier vide après redirection

Vérifiez que :
- Les IDs des produits dans WooCommerce correspondent à ceux du site principal
- Les produits sont bien publiés (pas en brouillon)
- L'API retourne bien un succès

### Design différent du site principal

Vérifiez que :
- Le fichier `style.css` du thème est bien chargé
- Les styles WooCommerce par défaut sont désactivés (fait automatiquement par le thème)

## 📞 Support

Pour toute question ou problème :
- Documentation WordPress : [https://wordpress.org/support/](https://wordpress.org/support/)
- Documentation WooCommerce : [https://woocommerce.com/documentation/](https://woocommerce.com/documentation/)
