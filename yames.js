/* i18n Hygia — vanilla JS, aucune librairie externe */
const i18n = {
  fr: {
    "nav.accueil"        : "Accueil",
    "nav.catalogue"      : "Catalogue",
    "nav.apropos"        : "À propos",
    "nav.professionnels" : "Professionnels",
    "nav.contact"        : "Contact",
    "nav.connexion"      : "Connexion",
    "nav.moncompte"      : "Mon compte",
    "nav.panier"         : "Panier",
    "nav.recherche"      : "Rechercher sur le site...",

    "hero.titre"         : "Matériel médical de qualité au Mali",
    "hero.slogan"        : "Mieux équiper — Plus sauver",
    "hero.cta"           : "Voir le catalogue",

    "categories.titre"   : "Nos catégories",
    "categories.sous"    : "Découvrez notre gamme complète de produits médicaux certifiés",
    "cat.equipement"     : "Équipement médical",
    "cat.equipement.desc": "Microscopes, centrifugeuses, tensiomètres, oxymètres et plus encore.",
    "cat.consommable"    : "Consommables médicaux",
    "cat.consommable.desc": "Tests rapides, coton, bandelettes, abaisse-langues, lames de bistouri.",
    "cat.explorer"       : "Explorer →",

    "popular.titre"      : "Produits populaires",
    "btn.add.cart"       : "Ajouter au panier",
    "btn.added"          : "✓ Ajouté !",

    "apropos.label"      : "À PROPOS DE NOUS",
    "apropos.titre"      : "Qui sommes-nous ?",
    "apropos.texte1"     : "Hygia est une entreprise malienne spécialisée dans la distribution de matériel médical certifié. Grâce à des partenariats directs avec des fabricants internationaux, nous rendons l'équipement médical de qualité accessible à tous au Mali.",
    "apropos.texte2"     : "Notre engagement : mieux équiper pour plus sauver.",
    "apropos.cta"        : "En savoir plus",

    "why.label"          : "POURQUOI NOUS CHOISIR",
    "why.titre"          : "Ce qui nous différencie",
    "why.sous"           : "Des avantages concrets pour vos achats de matériel médical",
    "why.1.titre"        : "Produits certifiés",
    "why.1.desc"         : "Tout notre matériel est importé de fabricants certifiés et respecte les normes médicales internationales.",
    "why.2.titre"        : "Livraison rapide",
    "why.2.desc"         : "Livraison rapide partout à Bamako. Parce que dans le domaine médical, chaque heure compte.",
    "why.3.titre"        : "Paiement flexible",
    "why.3.desc"         : "Orange Money, Wave, carte bancaire — vous choisissez.",
    "why.4.titre"        : "Support WhatsApp",
    "why.4.desc"         : "Notre équipe vous répond rapidement sur WhatsApp pour toute question ou devis.",
    "why.5.titre"        : "Expertise médicale",
    "why.5.desc"         : "Une vraie connaissance du marché malien et des besoins des professionnels de santé.",
    "why.6.titre"        : "Tarifs compétitifs",
    "why.6.desc"         : "Import direct = moins d'intermédiaires = prix bas. Remises pour commandes en volume.",

    "catalogue.titre"    : "Notre catalogue",
    "filter.titre"       : "Filtres",
    "filter.categorie"   : "Catégorie",
    "filter.produit"     : "Produit",
    "filter.prix"        : "Prix (FCFA)",
    "filter.trier"       : "Trier par",
    "filter.defaut"      : "Par défaut",
    "filter.prix.asc"    : "Prix croissant",
    "filter.prix.desc"   : "Prix décroissant",
    "filter.nom.asc"     : "Nom (A-Z)",
    "filter.tous"        : "Tous les produits",
    "filter.promo"       : "En promo",
    "filter.stock"       : "En stock",
    "filter.reset"       : "Réinitialiser",
    "filter.search"      : "Nom du produit...",
    "filter.min"         : "Min :",
    "filter.max"         : "Max :",
    "no.result"          : "Aucun produit ne correspond à votre recherche.",

    "panier.titre"       : "Mon panier",
    "panier.vide"        : "Votre panier est vide pour le moment.",
    "panier.total"       : "Total :",
    "panier.continuer"   : "Continuer mes achats",
    "panier.paiement"    : "Passer au paiement",
    "livraison.titre"    : "Informations de livraison",
    "livraison.nom"      : "Nom complet",
    "livraison.tel"      : "Téléphone",
    "livraison.adresse"  : "Adresse",
    "livraison.email"    : "Email",
    "coupon.label"       : "Code promo",
    "coupon.placeholder" : "Saisissez votre code",
    "coupon.btn"         : "Appliquer",
    "unit.price"         : "/ unité",

    "paiement.titre"     : "Choisissez votre mode de paiement",
    "paiement.orange"    : "Orange Money",
    "paiement.wave"      : "Wave",
    "paiement.carte"     : "Carte bancaire",
    "paiement.secure"    : "🔒 Paiements sécurisés par XPay — vos données bancaires ne transitent jamais par nos serveurs.",
    "paiement.redirect"  : "Vous allez être redirigé vers la page de paiement sécurisée.",
    "paiement.confirmer" : "Procéder au paiement →",

    "confirm.titre"      : "Commande confirmée !",
    "confirm.sous"       : "Merci pour votre confiance.",
    "confirm.message"    : "Nous vous contacterons pour organiser la livraison sous 24 à 48h à Bamako.",
    "confirm.voir"       : "Voir mes commandes",
    "confirm.continuer"  : "Continuer mes achats",
    "confirm.echec"      : "Paiement non complété",
    "confirm.echec.msg"  : "Votre paiement n'a pas abouti. Vous n'avez pas été débité.",
    "confirm.reessayer"  : "Réessayer",

    "compte.titre"       : "Mon compte",
    "compte.historique"  : "Historique de mes commandes",
    "compte.deconnexion" : "Se déconnecter",
    "compte.vide"        : "Vous n'avez pas encore de commande.",
    "compte.statut.attente"   : "En attente",
    "compte.statut.confirmee" : "Confirmée",
    "compte.statut.livraison" : "En livraison",
    "compte.statut.livree"    : "Livrée",
    "compte.statut.annulee"   : "Annulée",

    "connexion.titre"    : "Connexion",
    "connexion.email"    : "Email",
    "connexion.mdp"      : "Mot de passe",
    "connexion.btn"      : "Se connecter",
    "connexion.switch"   : "Pas encore de compte ?",
    "connexion.creer"    : "Créer un compte",
    "inscription.titre"  : "Créer un compte",
    "inscription.nom"    : "Nom complet",
    "inscription.tel"    : "Téléphone",
    "inscription.btn"    : "Créer mon compte",
    "inscription.switch" : "Vous avez déjà un compte ?",

    "contact.titre"      : "Notre équipe est à votre disposition",
    "contact.sous"       : "Une question sur un produit, un besoin de devis ou une commande spéciale ?",
    "contact.adresse"    : "Adresse",
    "contact.horaires"   : "Horaires",
    "contact.horaires.val": "Lun–Ven 8h–18h / Sam 9h–16h",
    "contact.form.titre" : "Envoyez-nous un message",
    "contact.form.nom"   : "Nom complet",
    "contact.form.tel"   : "Téléphone",
    "contact.form.email" : "Email",
    "contact.form.sujet" : "Sujet",
    "contact.form.msg"   : "Message",
    "contact.form.btn"   : "Envoyer le message →",
    "contact.form.succes": "✅ Message envoyé ! Nous vous répondrons dans les plus brefs délais.",

    "footer.droits"      : "© 2026 Hygia. Tous droits réservés.",
    "footer.confidentialite": "Politique de confidentialité",
    "footer.mentions"    : "Mentions légales",
    "footer.cgv"         : "CGV",
    "footer.cookies"     : "Cookies",
  },

  en: {
    "nav.accueil"        : "Home",
    "nav.catalogue"      : "Catalogue",
    "nav.apropos"        : "About",
    "nav.professionnels" : "Professionals",
    "nav.contact"        : "Contact",
    "nav.connexion"      : "Login",
    "nav.moncompte"      : "My account",
    "nav.panier"         : "Cart",
    "nav.recherche"      : "Search products...",

    "hero.titre"         : "Quality medical equipment in Mali",
    "hero.slogan"        : "Better equipped — More lives saved",
    "hero.cta"           : "View catalogue",

    "categories.titre"   : "Our categories",
    "categories.sous"    : "Discover our full range of certified medical products",
    "cat.equipement"     : "Medical equipment",
    "cat.equipement.desc": "Microscopes, centrifuges, blood pressure monitors, pulse oximeters and more.",
    "cat.consommable"    : "Medical consumables",
    "cat.consommable.desc": "Rapid tests, cotton, test strips, tongue depressors, scalpel blades.",
    "cat.explorer"       : "Explore →",

    "popular.titre"      : "Popular products",
    "btn.add.cart"       : "Add to cart",
    "btn.added"          : "✓ Added!",

    "apropos.label"      : "ABOUT US",
    "apropos.titre"      : "Who are we?",
    "apropos.qui.p1"     : "Hygia is a Malian company specializing in the distribution of certified medical equipment, founded with a clear vision: to make quality medical equipment accessible to everyone in Mali, whether for individuals, pharmacies or clinics.",
    "apropos.qui.p2"     : "Thanks to direct partnerships with recognized international manufacturers, we offer a complete range from everyday consumables (thermometers, cotton, rapid tests) to specialized equipment for healthcare professionals (microscopes, centrifuges, hemoglobin analyzers).",
    "apropos.qui.p3"     : "Our commitment: Better equipped — More lives saved. Every product we sell contributes to improving healthcare in Mali and West Africa.",
    "apropos.cta"        : "Learn more",

    "why.label"          : "WHY CHOOSE US",
    "why.titre"          : "What sets us apart",
    "why.sous"           : "Concrete advantages for your medical equipment purchases",
    "why.1.titre"        : "Certified products",
    "why.1.desc"         : "All our equipment is imported from certified manufacturers and meets international medical standards.",
    "why.2.titre"        : "Fast delivery",
    "why.2.desc"         : "Fast delivery throughout Bamako. Because in the medical field, every hour counts.",
    "why.3.titre"        : "Flexible payment",
    "why.3.desc"         : "Orange Money, Wave, bank card — you choose.",
    "why.4.titre"        : "WhatsApp support",
    "why.4.desc"         : "Our team responds quickly on WhatsApp for any questions or quotes.",
    "why.5.titre"        : "Medical expertise",
    "why.5.desc"         : "Real knowledge of the Malian market and the needs of healthcare professionals.",
    "why.6.titre"        : "Competitive prices",
    "why.6.desc"         : "Direct import = fewer middlemen = lower prices. Discounts for bulk orders.",

    "catalogue.titre"    : "Our catalogue",
    "filter.titre"       : "Filters",
    "filter.categorie"   : "Category",
    "filter.produit"     : "Product",
    "filter.prix"        : "Price (FCFA)",
    "filter.trier"       : "Sort by",
    "filter.defaut"      : "Default",
    "filter.prix.asc"    : "Price: low to high",
    "filter.prix.desc"   : "Price: high to low",
    "filter.nom.asc"     : "Name (A-Z)",
    "filter.tous"        : "All products",
    "filter.promo"       : "On sale",
    "filter.stock"       : "In stock",
    "filter.reset"       : "Reset",
    "filter.search"      : "Product name...",
    "filter.min"         : "Min:",
    "filter.max"         : "Max:",
    "no.result"          : "No products match your search.",

    "panier.titre"       : "My cart",
    "panier.vide"        : "Your cart is currently empty.",
    "panier.total"       : "Total:",
    "panier.continuer"   : "Continue shopping",
    "panier.paiement"    : "Proceed to payment",
    "livraison.titre"    : "Delivery information",
    "livraison.nom"      : "Full name",
    "livraison.tel"      : "Phone number",
    "livraison.adresse"  : "Address",
    "livraison.email"    : "Email",
    "coupon.label"       : "Promo code",
    "coupon.placeholder" : "Enter your code",
    "coupon.btn"         : "Apply",
    "unit.price"         : "/ unit",

    "paiement.titre"     : "Choose your payment method",
    "paiement.orange"    : "Orange Money",
    "paiement.wave"      : "Wave",
    "paiement.carte"     : "Bank card",
    "paiement.secure"    : "🔒 Secure payments by XPay — your banking data never passes through our servers.",
    "paiement.redirect"  : "You will be redirected to the secure payment page.",
    "paiement.confirmer" : "Proceed to payment →",

    "confirm.titre"      : "Order confirmed!",
    "confirm.sous"       : "Thank you for your trust.",
    "confirm.message"    : "We will contact you to arrange delivery within 24 to 48 hours in Bamako.",
    "confirm.voir"       : "View my orders",
    "confirm.continuer"  : "Continue shopping",
    "confirm.echec"      : "Payment not completed",
    "confirm.echec.msg"  : "Your payment could not be processed. You have not been charged.",
    "confirm.reessayer"  : "Try again",

    "compte.titre"       : "My account",
    "compte.historique"  : "Order history",
    "compte.deconnexion" : "Log out",
    "compte.vide"        : "You have no orders yet.",
    "compte.statut.attente"   : "Pending",
    "compte.statut.confirmee" : "Confirmed",
    "compte.statut.livraison" : "Out for delivery",
    "compte.statut.livree"    : "Delivered",
    "compte.statut.annulee"   : "Cancelled",

    "connexion.titre"    : "Login",
    "connexion.email"    : "Email",
    "connexion.mdp"      : "Password",
    "connexion.btn"      : "Log in",
    "connexion.switch"   : "Don't have an account?",
    "connexion.creer"    : "Create an account",
    "inscription.titre"  : "Create an account",
    "inscription.nom"    : "Full name",
    "inscription.tel"    : "Phone number",
    "inscription.btn"    : "Create my account",
    "inscription.switch" : "Already have an account?",

    "contact.titre"      : "Our team is at your service",
    "contact.sous"       : "A question about a product, need a quote or a special order?",
    "contact.adresse"    : "Address",
    "contact.horaires"   : "Opening hours",
    "contact.horaires.val": "Mon–Fri 8am–6pm / Sat 9am–4pm",
    "contact.form.titre" : "Send us a message",
    "contact.form.nom"   : "Full name",
    "contact.form.tel"   : "Phone",
    "contact.form.email" : "Email",
    "contact.form.sujet" : "Subject",
    "contact.form.msg"   : "Message",
    "contact.form.btn"   : "Send message →",
    "contact.form.succes": "✅ Message sent! We will get back to you as soon as possible.",

    "footer.droits"      : "© 2026 Hygia. All rights reserved.",
    "footer.confidentialite": "Privacy policy",
    "footer.mentions"    : "Legal notice",
    "footer.cgv"         : "Terms of sale",
    "footer.cookies"     : "Cookies",
  }
};

Object.assign(i18n.fr, {
  nav_home: i18n.fr["nav.accueil"], nav_catalog: i18n.fr["nav.catalogue"], nav_about: i18n.fr["nav.apropos"], nav_prof: i18n.fr["nav.professionnels"], nav_contact: i18n.fr["nav.contact"],
  hero_title: i18n.fr["hero.titre"], hero_subtitle: i18n.fr["hero.slogan"], hero_cta: i18n.fr["hero.cta"], categories_label: i18n.fr["categories.titre"], categories_title: i18n.fr["categories.titre"], categories_subtitle: i18n.fr["categories.sous"],
  featured_title: i18n.fr["popular.titre"], about_label: i18n.fr["apropos.label"], about_title: i18n.fr["apropos.titre"], about_link: i18n.fr["apropos.cta"], why_label: i18n.fr["why.label"], why_title: i18n.fr["why.titre"], why_subtitle: i18n.fr["why.sous"], footer_rights: i18n.fr["footer.droits"]
});
Object.assign(i18n.en, {
  nav_home: i18n.en["nav.accueil"], nav_catalog: i18n.en["nav.catalogue"], nav_about: i18n.en["nav.apropos"], nav_prof: i18n.en["nav.professionnels"], nav_contact: i18n.en["nav.contact"],
  hero_title: i18n.en["hero.titre"], hero_subtitle: i18n.en["hero.slogan"], hero_cta: i18n.en["hero.cta"], categories_label: i18n.en["categories.titre"], categories_title: i18n.en["categories.titre"], categories_subtitle: i18n.en["categories.sous"],
  featured_title: i18n.en["popular.titre"], about_label: i18n.en["apropos.label"], about_title: i18n.en["apropos.titre"], about_link: i18n.en["apropos.cta"], why_label: i18n.en["why.label"], why_title: i18n.en["why.titre"], why_subtitle: i18n.en["why.sous"], footer_rights: i18n.en["footer.droits"]
});

function getLang() {
  return localStorage.getItem("hygia-lang") || "fr";
}

function t(key) {
  const lang = getLang();
  return i18n[lang]?.[key] || i18n["fr"]?.[key] || key;
}

const originalTextNodes = new WeakMap();
const originalPlaceholders = new WeakMap();
const staticTextEn = {
  "Rechercher": "Search",
  "Consommables": "Consumables",
  "Sous-total": "Subtotal",
  "Réduction": "Discount",
  "Livraison": "Delivery",
  "À calculer": "To be calculated",
  "Payer": "Pay",
  "Payer à la livraison": "Pay on delivery",
  "Commune / Zone (Bamako uniquement)": "District / Area (Bamako only)",
  "Sélectionnez votre zone à Bamako": "Select your area in Bamako",
  "Votre nom complet": "Your full name",
  "Votre adresse email": "Your email address",
  "Quartier, commune, point de repère...": "Neighbourhood, district, landmark...",
  "Retirer": "Remove",
  "Précédent": "Previous",
  "Suivant": "Next",
  "Les avantages de Hygia": "Why choose Hygia",
  "Garantie fiable": "Reliable warranty",
  "Produit introuvable.": "Product not found.",
  "Contacter sur WhatsApp": "Contact us on WhatsApp",
  "J'ai compris": "I understand",
  "Espace professionnel": "Professional services",
  "Une offre dédiée aux professionnels de santé, en cours de préparation.": "A dedicated offer for healthcare professionals is coming soon.",
  "Pharmacies, cliniques, cabinets médicaux, centres de santé communautaire — Hygia prépare pour vous un espace d'achat pensé pour les volumes professionnels : tarifs dégressifs, devis sur mesure, livraison prioritaire à Bamako et périphérie.": "Pharmacies, clinics, medical practices and community health centres — Hygia is preparing a purchasing space designed for professional volumes, with tiered pricing, tailored quotes and priority delivery in Bamako and surrounding areas.",
  "En attendant l'ouverture de cet espace, contactez-nous directement pour tout besoin professionnel.": "Until this service opens, contact us directly for any professional requirement.",
  "Nous contacter": "Contact us",
  "CONTACTEZ-NOUS": "CONTACT US",
  "NOS INFORMATIONS": "OUR INFORMATION",
  "Nous contacter directement": "Contact us directly",
  "Lundi–Vendredi : 8h–18h": "Monday–Friday: 8am–6pm",
  "Samedi : 9h–16h": "Saturday: 9am–4pm",
  "Téléphone": "Phone",
  "📍 Nous trouver": "📍 Find us",
  "Choisissez un sujet...": "Choose a subject...",
  "Demande de commande": "Order request",
  "Demande de devis (clinique / pharmacie)": "Quote request (clinic / pharmacy)",
  "Information sur un produit": "Product information",
  "Problème avec une commande": "Order issue",
  "Proposition de partenariat": "Partnership proposal",
  "Autre": "Other",
  "Votre nom": "Your name",
  "Décrivez votre demande en détail...": "Describe your request in detail...",
  "Connectez-vous pour suivre vos commandes et accéder à votre historique.": "Log in to track your orders and access your order history.",
  "Votre email": "Your email",
  "Votre mot de passe": "Your password",
  "Mot de passe oublié ?": "Forgot your password?",
  "Ce site utilise le stockage local de votre navigateur pour gérer votre panier et votre compte. Aucun cookie publicitaire.": "This site uses your browser's local storage to manage your cart and account. No advertising cookies are used.",

  "Mon espace personnel": "My personal space",
  "Connectez-vous pour accéder à votre compte, suivre vos commandes et gérer vos informations.": "Log in to access your account, track your orders and manage your information.",
  "Créez votre compte Hygia pour suivre vos commandes et gagner du temps lors de vos prochains achats.": "Create your Hygia account to track your orders and save time on future purchases.",
  "Choisissez un mot de passe": "Choose a password",
  "Bonjour": "Hello",
  "Client Hygia": "Hygia customer",
  "Se déconnecter": "Log out",
  "Commande(s)": "Order(s)",
  "Dernière commande": "Last order",
  "Points fidélité": "Loyalty points",
  "👤 Mes infos": "👤 My info",
  "&#128230; Mes commandes": "&#128230; My orders",
  "🔒 Sécurité": "🔒 Security",
  "Mes informations": "My information",
  "Modifier": "Edit",
  "Adresse e-mail": "Email address",
  "Modifier mes informations": "Edit my information",
  "Mot de passe actuel (obligatoire)": "Current password (required)",
  "Entrez votre mot de passe pour confirmer": "Enter your password to confirm",

  // À propos
  "À PROPOS DE NOUS": "ABOUT US",
  "Votre partenaire de confiance pour le matériel médical de qualité au Mali. Nous mettons la santé au cœur de notre mission.": "Your trusted partner for quality medical equipment in Mali. We put health at the heart of our mission.",
  "QUI SOMMES-NOUS": "WHO WE ARE",
  "Une entreprise malienne au service de la santé": "A Malian company serving health",
  "Hygia est une entreprise malienne spécialisée dans la distribution de matériel médical certifié, fondée avec une vision claire : rendre l'équipement médical de qualité accessible à tous au Mali, qu'il s'agisse de particuliers, de pharmacies ou de cliniques.": "Hygia is a Malian company specializing in the distribution of certified medical equipment, founded with a clear vision: to make quality medical equipment accessible to everyone in Mali, whether for individuals, pharmacies or clinics.",
  "Grâce à des partenariats directs avec des fabricants internationaux reconnus, nous proposons une gamme complète allant des consommables du quotidien (thermomètres, coton, tests rapides) aux équipements spécialisés pour professionnels de santé (microscopes, centrifugeuses, analyseurs d'hémoglobine).": "Thanks to direct partnerships with recognized international manufacturers, we offer a complete range from everyday consumables (thermometers, cotton, rapid tests) to specialized equipment for healthcare professionals (microscopes, centrifuges, hemoglobin analyzers).",
  "Notre engagement : Mieux équiper pour — Plus sauver": "Our commitment: Better equipped — More lives saved",
  "Chaque produit que nous vendons contribue à améliorer les soins de santé au Mali et en Afrique de l'Ouest.": "Every product we sell contributes to improving healthcare in Mali and West Africa.",
  "Voir notre catalogue": "View our catalogue",
  "Produits disponibles": "Products available",
  "Matériel certifié": "Certified equipment",
  "Basé à Bamako": "Based in Bamako",
  "NOS VALEURS": "OUR VALUES",
  "Ce qui nous guide au quotidien": "What guides us every day",
  "Des principes clairs pour un service médical de confiance": "Clear principles for trusted medical service",
  "Qualité": "Quality",
  "Chaque produit est sélectionné selon des critères stricts de qualité et de conformité aux normes internationales.": "Each product is selected according to strict quality criteria and compliance with international standards.",
  "Confiance": "Trust",
  "Nous construisons des relations durables avec nos clients basées sur la transparence et le sérieux.": "We build lasting relationships with our customers based on transparency and seriousness.",
  "Accessibilité": "Accessibility",
  "Des prix justes et une livraison rapide à Bamako pour que le matériel médical soit accessible à tous.": "Fair prices and fast delivery in Bamako so that medical equipment is accessible to everyone.",
  "Engagement": "Commitment",
  "Nous sommes passionnés par la santé et convaincus que de bons équipements sauvent des vies.": "We are passionate about health and convinced that good equipment saves lives.",
  "POURQUOI NOUS CHOISIR": "WHY CHOOSE US",
  "Ce qui nous différencie": "What sets us apart",
  "Des avantages concrets pour vos achats de matériel médical": "Concrete benefits for your medical equipment purchases",
  "Produits certifiés et contrôlés": "Certified and controlled products",
  "Tout notre matériel est importé directement de fabricants certifiés et respecte les normes de qualité médicale internationale. Zéro compromis sur la fiabilité.": "All our equipment is imported directly from certified manufacturers and meets international medical quality standards. Zero compromise on reliability.",
  "Livraison rapide à Bamako": "Fast delivery in Bamako",
  "Livraison rapide partout à Bamako. Nous respectons les délais parce que dans le domaine médical, chaque heure compte.": "Fast delivery throughout Bamako. We respect deadlines because in the medical field, every hour counts.",
  "Paiement flexible": "Flexible payment",
  "Orange Money, Wave, carte bancaire  — vous choisissez ce qui vous convient le mieux.": "Orange Money, Wave, credit card — you choose what suits you best.",
  "Service client sur WhatsApp": "Customer service on WhatsApp",
  "Une question sur un produit ? Besoin d'un devis pour une clinique ? Notre équipe vous répond rapidement sur WhatsApp au +223 72 08 09 37.": "A question about a product? Need a quote for a clinic? Our team responds quickly on WhatsApp at +223 72 08 09 37.",
  "Expertise du domaine médical": "Medical field expertise",
  "Nous connaissons le marché malien et les besoins réels des professionnels de santé. Nos conseils sont basés sur une vraie expérience du terrain.": "We know the Malian market and the real needs of healthcare professionals. Our advice is based on real field experience.",
  "Tarifs compétitifs": "Competitive rates",
  "Import direct depuis les fabricants = moins d'intermédiaires = des prix plus bas pour vous. Des remises spéciales pour les commandes en volume.": "Direct import from manufacturers = fewer intermediaries = lower prices for you. Special discounts for volume orders.",
  "NOTRE MISSION": "OUR MISSION",
  "Mieux équiper pour — Plus sauver": "Better equipped — More lives saved",
  "Notre mission est simple : être le partenaire de confiance de chaque professionnel de santé, chaque clinique, chaque pharmacie et chaque famille au Mali qui a besoin de matériel médical de qualité, au juste prix, livré rapidement.": "Our mission is simple: to be the trusted partner of every healthcare professional, every clinic, every pharmacy and every family in Mali who needs quality medical equipment, at a fair price, delivered quickly.",
  "Découvrir nos produits": "Discover our products",
  "Enregistrer les modifications": "Save changes",
  "Annuler": "Cancel",
  "Changez votre mot de passe régulièrement pour plus de sécurité.": "Change your password regularly for more security.",
  "Changer": "Change",
  "Changer mon mot de passe": "Change my password",
  "Nouveau mot de passe": "New password",
  "Confirmer le nouveau mot de passe": "Confirm new password",
  "Supprimer mon compte": "Delete my account",
  "Cette action est irréversible. Toutes vos données seront supprimées définitivement.": "This action is irreversible. All your data will be permanently deleted.",
  "Vérification en cours...": "Verification in progress...",
  "Votre paiement est en cours de vérification. Cette page se rafraîchira automatiquement.": "Your payment is being verified. This page will refresh automatically.",
  "Commande confirmée !": "Order confirmed!",
  "Payé": "Paid",
  "Client": "Customer",
  "Mode de paiement": "Payment method",
  "Statut du paiement": "Payment status",
  "Montant total": "Total amount",
  "Votre commande a été enregistrée. Nous vous contacterons pour organiser la livraison sous 24 à 48h à Bamako.": "Your order has been recorded. We will contact you to arrange delivery within 24 to 48 hours in Bamako.",
  "Votre paiement n'a pas pu être traité. Vous n'avez pas été débité.": "Your payment could not be processed. You have not been charged.",
  "Veuillez réessayer votre paiement depuis votre panier. Si le problème persiste, contactez-nous et nous vous aiderons à finaliser votre commande.": "Please retry your payment from your cart. If the issue persists, contact us and we will help you finalize your order.",
  "Réessayer": "Try again",
  "Retour au panier": "Back to cart",
  "Paiement annulé": "Payment cancelled",
  "Vous avez annulé le paiement. Votre panier est toujours disponible.": "You cancelled the payment. Your cart is still available.",
  "Vous pouvez réessayer quand vous le souhaitez ou continuer vos achats.": "You can try again whenever you want or continue your purchases.",
  "Mot de passe oublié": "Forgot your password",
  "Entrez votre email, nous vous enverrons un lien pour réinitialiser votre mot de passe.": "Enter your email, we will send you a link to reset your password.",
  "Envoyer le lien": "Send the link",
  "Envoi en cours...": "Sending...",
  "Lien envoyé si l'email est enregistré.": "Link sent if the email is registered.",
  "Impossible de joindre le serveur. Réessayez.": "Unable to reach the server. Please try again.",
  "← Retour à la connexion": "← Back to login",
  "En savoir plus": "Learn more",
  "Vous n'avez pas encore passé de commande.": "You haven't placed an order yet.",
  "Découvrir le catalogue": "Discover the catalogue"
};

function annoterStructureCommune() {
  const navKeys = {
    "index.html": "nav.accueil", "catalogue.html": "nav.catalogue", "apropos.html": "nav.apropos",
    "professionnels.html": "nav.professionnels", "contact.html": "nav.contact", "connexion.html": "nav.connexion"
  };
  document.querySelectorAll(".nav-center a, .nav-right a").forEach(link => {
    const file = (link.getAttribute("href") || "").split("?")[0];
    if (navKeys[file] && !link.dataset.i18n) link.dataset.i18n = navKeys[file];
  });
  document.querySelectorAll(".footer-legal a").forEach(link => {
    const map = { "politique-confidentialite.html": "footer.confidentialite", "mentions-legales.html": "footer.mentions", "cgv.html": "footer.cgv", "cookies.html": "footer.cookies" };
    const key = map[link.getAttribute("href")];
    if (key) link.dataset.i18n = key;
  });
  document.querySelectorAll("footer > p").forEach(el => el.dataset.i18n = "footer.droits");
  document.querySelectorAll("input[type='search']").forEach(el => el.dataset.i18nPlaceholder = "nav.recherche");
}

function appliquerTraductions() {
  const lang = getLang();
  document.documentElement.setAttribute("lang", lang);

  annoterStructureCommune();

  // Éléments avec data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const traduction = i18n[lang]?.[key] || i18n["fr"]?.[key];
    if (!traduction) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = traduction;
    } else {
      el.textContent = traduction;
    }
  });

  // Placeholders annotés
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const traduction = i18n[lang]?.[key] || i18n["fr"]?.[key];
    if (traduction) el.placeholder = traduction;
  });

  const phraseTranslations = { ...staticTextEn };
  Object.keys(i18n.fr).forEach(key => {
    if (i18n.en[key]) phraseTranslations[i18n.fr[key].replace(/\s+/g, " ").trim()] = i18n.en[key];
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, [data-i18n]")) continue;
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    const normalized = original.replace(/\s+/g, " ").trim();
    const translated = phraseTranslations[normalized];
    node.nodeValue = lang === "en" && translated ? original.replace(original.trim(), translated) : original;
  }

  document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(el => {
    if (el.dataset.i18nPlaceholder) return;
    if (!originalPlaceholders.has(el)) originalPlaceholders.set(el, el.placeholder);
    const original = originalPlaceholders.get(el);
    el.placeholder = lang === "en" && phraseTranslations[original] ? phraseTranslations[original] : original;
  });

  // Sélecteur de langue
  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.value = lang;
  }
}

async function setLang(lang) {
  localStorage.setItem("hygia-lang", lang);
  appliquerTraductions();

  const productContainer = document.getElementById("product-container");
  if (productContainer) {
    const isHome = Boolean(productContainer.closest(".featured-products"));
    afficherProduits(produits, isHome ? 4 : null, isHome ? 1 : pageActuelleCatalogue);
  }
  await afficherPageCompte();
  afficherPanier();
  afficherPageProduit();
  mettreAJourNavCompte();
  appliquerTraductions();
}

function initLang() {
  if (document.getElementById("lang-select")) return;

  const select = document.createElement("select");
  select.id = "lang-select";
  select.setAttribute("aria-label", "Choisir la langue");
  select.innerHTML = `<option value="fr">🇫🇷 FR</option><option value="en">🇬🇧 EN</option>`;
  select.value = getLang();
  select.style.cssText = "position:fixed;bottom:88px;right:20px;z-index:10001;padding:8px 32px 8px 12px;border:none;border-radius:50px;background:#185FA5;color:#fff;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.3);outline:none;appearance:none;-webkit-appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right 12px center;background-size:12px;";
  select.addEventListener("change", (e) => setLang(e.target.value));
  document.documentElement.insertBefore(select, document.body);
  appliquerTraductions();
}

// ===========================================
// 1. DONNÉES PRODUITS (source unique pour tout le site)
// ===========================================
const BACKEND_URL = "https://nslookup-cluster1-bydepfo-mongodb-net-1.onrender.com";

const PRODUITS_HARDCODES = [
    { id: 1,  nom: "Tensiomètre manuel avec stéthoscope",              prix: 15000,  image: "img/tension metre manuel.jpg",                                              categorie: "tensiometre", promo: false, stock: true, description: "Tensiomètre à brassard manuel livré avec stéthoscope monopavillon. Mesure fiable de la pression artérielle sans pile. Idéal pour les cabinets médicaux et pharmacies." },
    { id: 2,  nom: "Tensiomètre électronique automatique",             prix: 25000,  image: "img/tension metre electrique.webp",                                         categorie: "tensiometre", promo: false, stock: true, description: "Tensiomètre numérique automatique pour bras, brassard 22-36 cm. Un appui suffit pour obtenir tension et pouls. Écran large, facile à utiliser à domicile ou en clinique." },
    { id: 3,  nom: "Oxymètre de pouls",                                prix: 10000,  image: "img/oxymetre de puls.webp",                                               categorie: "clinique",    promo: false, stock: true, description: "Pince oxymètre à poser sur le doigt. Mesure la saturation en oxygène (SpO2) et le pouls en quelques secondes. Compact, sans douleur, indispensable pour le suivi respiratoire." },
    { id: 4,  nom: "Chaise médicale pivotante",                        prix: 30000,  image: "img/chaise medicale.avif",                                                  categorie: "clinique",    promo: false, stock: true, description: "Chaise médicale pivotante, hauteur réglable de 44 à 56 cm, assise diamètre 33 cm. Confortable pour un usage prolongé en cabinet médical ou laboratoire." },
    { id: 5,  nom: "Plateau inox carré (instrumentation)",             prix: 10000,  image: "img/plateau care.jpg",                                                      categorie: "clinique",    promo: false, stock: true, description: "Plateau carré en acier inoxydable 304, dimensions 31x24x3,1 cm. Utilisé pour la présentation et la stérilisation des instruments médicaux en cabinet ou clinique." },
    { id: 6,  nom: "Microscope de laboratoire (40x à 1600x)",          prix: 350000, image: "img/microscope biologique.avif",                                            categorie: "clinique",    promo: false, stock: true, description: "Microscope optique professionnel, grossissement de 40x à 1600x (objectifs 4X, 10X, 40XS, 100XS). Livré en coffret. Pour laboratoires, cliniques et formations médicales." },
    { id: 7,  nom: "Centrifugeuse avec minuterie (6 tubes)",           prix: 65000,  image: "img/centrifugeuse.jpg",                                                     categorie: "clinique",    promo: false, stock: true, description: "Centrifugeuse de laboratoire avec minuterie, capacité 6 tubes de 20 ml. Pour la séparation rapide des échantillons sanguins et biologiques." },
    { id: 8,  nom: "Centrifugeuse électrique haute vitesse (12 tubes)",prix: 112000, image: "img/centrifugeuse electrique.png",                                          categorie: "clinique",    promo: false, stock: true, description: "Centrifugeuse électrique 12 tubes de 20 ml, vitesse jusqu'à 4000 tr/min avec affichage digital. Pour laboratoires à fort volume d'analyses. Compatible 110V/220V." },
    { id: 9,  nom: "Agitateur orbital de laboratoire",                 prix: 120000, image: "img/agitateur de laboratoire.png",                                         categorie: "clinique",    promo: false, stock: true, description: "Agitateur orbital vitesse réglable de 0 à 210 tr/min, minuterie 0-15 min ou mode continu. Pour le mélange homogène d'échantillons biologiques en laboratoire." },
    { id: 10, nom: "Lecteur d'hémoglobine portable Mission HB",      prix: 150000, image: "img/lecteur d'hemoglobine mission hb.jpg",                                  categorie: "clinique",    promo: false, stock: true, description: "Appareil portable de mesure du taux d'hémoglobine. Résultat en 15 secondes à partir de 10 µl de sang, sans réactif liquide. Idéal pour le dépistage rapide de l'anémie." },
    { id: 11, nom: "Bandelettes Mission HB (boîte de 50)",             prix: 35000,  image: "img/compteur d'hemoglobine mission hb.webp",                                categorie: "consommable", promo: false, stock: true, description: "Boîte de 50 bandelettes pour analyseur d'hémoglobine Mission HB. Pour un dépistage rapide et fiable du taux d'hémoglobine en clinique ou laboratoire." },
    { id: 12, nom: "Lecteur d'hémoglobine URIT H12",                 prix: 55000,  image: "img/lecteur d'hemoglobine urit12.png",                                      categorie: "clinique",    promo: false, stock: true, description: "Appareil de mesure du taux d'hémoglobine URIT H12, précis et fiable. Conçu pour un usage régulier en clinique ou laboratoire d'analyses médicales." },
    { id: 13, nom: "Bandelettes URIT H12 (boîte de 50)",               prix: 25000,  image: "img/compteur d'hemoglobine urit12.png",                                     categorie: "consommable", promo: false, stock: true, description: "Boîte de 1O0 bandelettes compatibles avec l'analyseur URIT H12. Pour mesurer rapidement le taux d'hémoglobine en laboratoire ou en clinique." },
    { id: 14, nom: "Bandelettes urinaires 10 paramètres (URS-10A)",    prix: 10000,  image: "img/bandelette de test d'urine.jpg",                                        categorie: "consommable", promo: false, stock: true, description: "Bandelettes réactives pour analyse d'urine, 10 paramètres (glucose, protéines, pH, sang, leucocytes...). Résultat rapide pour le dépistage en clinique ou pharmacie." },
    { id: 15, nom: "Bandelettes urinaires 3 paramètres (URS-3T)",      prix: 6000,   image: "img/bandelette de test d'urine.jpg",                                        categorie: "consommable", promo: false, stock: true, description: "Bandelettes réactives pour analyse d'urine, 3 paramètres essentiels. Solution économique pour un dépistage rapide en cabinet médical ou pharmacie." },
    { id: 16, nom: "Pèse-personne mécanique médical",                  prix: 35000,  image: "img/pese-personne balance.jpg",                                             categorie: "clinique",    promo: false, stock: true, description: "Balance mécanique pour cabinet médical (28,5x42,5x8,5 cm). Robuste, précise, sans pile nécessaire. Vendue par lot de 3 unités." },
    { id: 17, nom: "Pèse-bébé avec toise intégrée",                    prix: 115000, image: "img/tapis de mesure pour bebe.jpg",                                         categorie: "clinique",    promo: false, stock: true, description: "Balance pour nourrisson avec toise intégrée, capacité 20 kg, précision 10 g. Indispensable pour le suivi de croissance en pédiatrie, maternité ou centre de santé." },
    { id: 18, nom: "Toise souple bébé (PVC)",                          prix: 25000,  image: "img/regle pour bebe.png",                                                   categorie: "clinique", promo: false, stock: true, description: "Mètre ruban souple en PVC pour mesurer la taille des nourrissons, de 20 à 99 cm. Léger, facile à désinfecter, idéal pour le suivi pédiatrique." },
    { id: 19, nom: "Attelle de nuit (S/M/L)",                          prix: 20000,  image: "img/Orthèse de la cheville et du pied.jpg",                                 categorie: "clinique",    promo: false, stock: true, description: "Attelle orthopédique de nuit disponible en tailles S, M et L. Maintien et immobilisation du pied pendant le repos pour une rééducation confortable." },
    { id: 20, nom: "Abaisse-langue en bois (boîte de 50)",             prix: 3500,   image: "img/tongue depressore.png",                                                 categorie: "consommable", promo: false, stock: true, description: "Boîte de 50 abaisse-langues en bois (150x18x1,6 mm). Consommable à usage unique pour consultations en cabinet, clinique ou pharmacie." },
    { id: 21, nom: "Kit de pinces chirurgicales (10 pièces)",          prix: 40000,  image: "img/kit de ciseaux de churirgie.png",                                       categorie: "clinique",    promo: false, stock: true, description: "Set de 10 pinces chirurgicales pour soins et interventions en clinique. Outils essentiels pour tout bloc de soins ou salle d'opération." },
    { id: 22, nom: "Lames de bistouri n°23 (boîte de 100)",            prix: 8000,   image: "img/surirgicale blade.webp",                                                categorie: "consommable", promo: false, stock: true, description: "Boîte de 100 lames de bistouri en acier carbone, taille n°23. Stériles, à usage unique, pour interventions chirurgicales et soins en clinique." },
    { id: 23, nom: "Ballon de réanimation pédiatrique",                prix: 20000,  image: "img/respirateur manuel.webp",                                               categorie: "clinique",    promo: false, stock: true, description: "Ballon auto-gonflable (BAVU) en PVC, taille pédiatrique, livré en coffret. Matériel d'urgence pour la ventilation manuelle des enfants en détresse respiratoire." },
    { id: 24, nom: "Ballon de réanimation adulte",                     prix: 20000,  image: "img/respirateur manuel.webp",                                               categorie: "clinique",    promo: false, stock: true, description: "Ballon auto-gonflable (BAVU) en PVC, taille adulte, livré en coffret. Indispensable pour la ventilation manuelle en réanimation et premiers secours." },
    { id: 25, nom: "Tambour de stérilisation 170mm",                   prix: 15000,  image: "img/tambours de sterilisation.avif",                                        categorie: "clinique",    promo: false, stock: true, description: "Tambour métallique de stérilisation, diamètre 170 mm. Pour le stockage stérile de compresses et consommables médicaux en clinique ou bloc opératoire." },
    { id: 26, nom: "Tambour de stérilisation 200mm",                   prix: 18500,  image: "img/tambours de sterilisation.avif",                                        categorie: "clinique",    promo: false, stock: true, description: "Tambour métallique de stérilisation, diamètre 200 mm. Format plus grand pour un stockage stérile en volume en clinique ou bloc opératoire." },
    { id: 27, nom: "Portoir à tubes à essai (50 puits)",               prix: 6000,   image: "img/support a tube a essaie.webp",                                          categorie: "clinique",    promo: false, stock: true, description: "Râtelier pour tubes à essai de 12-13 mm, 50 emplacements. Pour une organisation rapide et sécurisée des échantillons en laboratoire d'analyses." },
    { id: 28, nom: "Coton hydrophile (rouleau 100g)",                  prix: 2500,   image: "img/cotton en rouleau.webp",                                               categorie: "consommable", promo: false, stock: true, description: "Rouleau de coton hydrophile 100g (format 6x15). Consommable essentiel pour soins, pansements et désinfection en clinique, pharmacie ou à domicile." },
    { id: 29, nom: "Test rapide Toxoplasmose",                         prix: 1500,   image: "img/test rapide accurate.png",                                              categorie: "consommable", promo: false, stock: true, description: "Test de dépistage rapide de la toxoplasmose sur sang total, sérum ou plasma. Résultat en quelques minutes, sans équipement spécial. Pour cliniques et laboratoires." },
    { id: 30, nom: "Test rapide Rubéole IgG/IgM",                      prix: 1500,   image: "img/test rapide accurate.png",                                              categorie: "consommable", promo: false, stock: true, description: "Test de dépistage rapide de la rubéole (IgG et IgM) sur sérum ou plasma. Outil de diagnostic essentiel pour le suivi prénatal et les cliniques." },
    { id: 31, nom: "Test rapide Paludisme PF/PV",                      prix: 1500,   image: "img/test rapide accurate.png",                                              categorie: "consommable", promo: false, stock: true, description: "Test de dépistage rapide du paludisme (Plasmodium falciparum et vivax) sur sang total. Résultat fiable en minutes, adapté au contexte malien." },
    { id: 32, nom: "Mannequin pédagogique d'accouchement",             prix: 550000, image: "img/manequin d'accouchement.jpg",                                           categorie: "clinique",    promo: false, stock: true, description: "Modèle anatomique de simulation pour la formation aux techniques d'accouchement. Destiné aux écoles de santé, centres de formation de sages-femmes et structures médicales." },
    { id: 33, nom: "Modèle anatomique du système urogénital masculin", prix: 40000,  image: "img/Modèle de système urogénital masculin.jpg",                             categorie: "clinique",    promo: false, stock: true, description: "Modèle anatomique détaillé du système urogénital masculin, en coupe. Support pédagogique idéal pour l'enseignement médical, les écoles de santé et les cabinets d'urologie." },
    { id: 34, nom: "Modèle anatomique larynx, cœur et poumons",        prix: 200000, image: "img/humain anatomique médical larynx cardiaque et pulmonaire modèle larynx l'exercice modèle.avif", categorie: "clinique", promo: false, stock: true, description: "Modèle anatomique du larynx, du cœur et des poumons, conçu pour l'exercice et la formation médicale. Idéal pour l'enseignement en écoles de santé et cliniques pédagogiques." },
    { id: 35, nom: "Trousse portable d'injection intramusculaire",     prix: 25000,  image: "img/Trousse de pratique d'injection intramusculaire portable.webp",         categorie: "clinique",    promo: false, stock: true, description: "Trousse portable pour la pratique de l'injection intramusculaire. Outil de formation pratique destiné aux étudiants en santé et au personnel infirmier en apprentissage." },

];
let produits = PRODUITS_HARDCODES;
let produitsById = new Map(produits.map(p => [p.id, p]));

const productDescriptionsEn = {
    1: "Manual cuff blood pressure monitor supplied with a single-head stethoscope. Reliable blood pressure measurement without batteries. Ideal for medical practices and pharmacies.",
    2: "Automatic digital upper-arm blood pressure monitor with a 22–36 cm cuff. One press measures blood pressure and pulse. Large display for easy use at home or in clinics.",
    3: "Fingertip pulse oximeter measuring oxygen saturation (SpO2) and pulse within seconds. Compact, painless and essential for respiratory monitoring.",
    4: "Swivel medical stool with adjustable height from 44 to 56 cm and a 33 cm seat. Comfortable for extended use in medical practices and laboratories.",
    5: "Square 304 stainless-steel tray, 31 × 24 × 3.1 cm. Designed for presenting and sterilising medical instruments in practices and clinics.",
    6: "Professional optical microscope with 40× to 1600× magnification (4×, 10×, 40×S and 100×S objectives). Supplied in a case for laboratories, clinics and medical training.",
    7: "Laboratory centrifuge with timer and capacity for six 20 ml tubes. Provides fast separation of blood and biological samples.",
    8: "High-speed electric centrifuge for twelve 20 ml tubes, up to 4000 rpm with digital display. Suitable for high-volume laboratories and compatible with 110V/220V.",
    9: "Orbital laboratory shaker with adjustable speed from 0 to 210 rpm and a 0–15 minute timer or continuous mode. Ensures homogeneous mixing of biological samples.",
    10: "Portable haemoglobin meter delivering results in 15 seconds from only 10 µl of blood, with no liquid reagent. Ideal for rapid anaemia screening.",
    11: "Box of 50 test strips for the Mission HB haemoglobin analyser. Designed for fast and reliable haemoglobin screening in clinics and laboratories.",
    12: "Accurate and reliable URIT H12 haemoglobin meter designed for regular use in clinics and medical analysis laboratories.",
    13: "Box of 100 test strips compatible with the URIT H12 analyser for rapid haemoglobin measurement in clinics and laboratories.",
    14: "Urinalysis reagent strips covering 10 parameters including glucose, protein, pH, blood and leukocytes. Fast screening results for clinics and pharmacies.",
    15: "Urinalysis reagent strips covering three essential parameters. An economical solution for rapid screening in medical practices and pharmacies.",
    16: "Robust and accurate mechanical medical scale measuring 28.5 × 42.5 × 8.5 cm, requiring no batteries. Sold in packs of three.",
    17: "Infant scale with integrated height gauge, 20 kg capacity and 10 g accuracy. Essential for growth monitoring in paediatrics, maternity wards and health centres.",
    18: "Flexible PVC measuring mat for infants from 20 to 99 cm. Lightweight, easy to disinfect and ideal for paediatric monitoring.",
    19: "Night orthosis available in S, M and L sizes. Supports and immobilises the foot during rest for comfortable rehabilitation.",
    20: "Box of 50 disposable wooden tongue depressors measuring 150 × 18 × 1.6 mm, for consultations in practices, clinics and pharmacies.",
    21: "Set of 10 surgical forceps for care and procedures in clinics. Essential instruments for treatment rooms and operating theatres.",
    22: "Box of 100 sterile, single-use no. 23 carbon-steel scalpel blades for surgical procedures and clinical care.",
    23: "Self-inflating paediatric PVC resuscitation bag supplied in a case. Emergency equipment for manual ventilation of children in respiratory distress.",
    24: "Self-inflating adult PVC resuscitation bag supplied in a case. Essential for manual ventilation during resuscitation and first aid.",
    25: "170 mm metal sterilisation drum for the sterile storage of dressings and medical consumables in clinics and operating theatres.",
    26: "200 mm metal sterilisation drum offering larger-volume sterile storage for clinics and operating theatres.",
    27: "Test-tube rack with 50 slots for 12–13 mm tubes, enabling fast and safe organisation of samples in analysis laboratories.",
    28: "100 g roll of absorbent cotton. An essential consumable for care, dressings and disinfection in clinics, pharmacies and at home.",
    29: "Rapid toxoplasmosis screening test for whole blood, serum or plasma. Delivers results within minutes without special equipment.",
    30: "Rapid rubella IgG/IgM screening test for serum or plasma. An essential diagnostic tool for prenatal monitoring and clinics.",
    31: "Rapid malaria test for Plasmodium falciparum and vivax using whole blood. Reliable results within minutes and well suited to Mali.",
    32: "Anatomical childbirth simulation model for practical delivery training, designed for health schools, midwifery training centres and medical facilities.",
    33: "Detailed sectional model of the male urogenital system. Ideal teaching aid for medical education, health schools and urology practices.",
    34: "Anatomical model of the larynx, heart and lungs for medical practice and training in health schools and teaching clinics.",
    35: "Portable intramuscular injection practice kit for hands-on training of healthcare students and nursing staff.",
};

function tr(fr, en) {
    return getLang() === "en" ? en : fr;
}

function getProductDescription(produit) {
    return getLang() === "en" ? (productDescriptionsEn[produit.id] || produit.description) : produit.description;
}

// Index id -> produit pour des recherches en O(1) (évite les .find() en boucle)
function getProduitById(id) {
    return produitsById.get(id);
}

function normaliserImage(image) {
    if (!image) return 'img/placeholder.jpg';
    if (image.startsWith('http') || image.startsWith('//') || image.startsWith('/')) return image;
    if (image.startsWith('img/')) return image;
    return 'img/' + image;
}

async function chargerProduits() {
    try {
        const res = await fetch(`${BACKEND_URL}/api/produits`);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        if (data.succes && Array.isArray(data.produits)) {
            produits = data.produits.map(p => ({
                id: p.id,
                nom: p.nom,
                prix: p.prix,
                image: normaliserImage(p.image),
                categorie: p.categorie ? p.categorie.toLowerCase() : '',
                description: p.description || '',
                stock: p.quantiteEnStock > 0,
                quantiteEnStock: p.quantiteEnStock || 0,
                actif: p.actif !== false,
                reference: p.reference || '',
                marque: p.marque || '',
                notice: p.notice || '',
                promo: p.promo || false
            }));
            produitsById = new Map(produits.map(p => [p.id, p]));
        }
    } catch (err) {
        console.error('chargerProduits:', err);
    }
}

// Échappe les caractères HTML sensibles avant insertion via innerHTML
// (protège contre l'injection si une donnée venait à contenir du HTML/JS)
function escapeHtml(valeur) {
    return String(valeur)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Libellés affichés pour chaque mode de paiement (source unique, évite la duplication)
const MODES_PAIEMENT_LABELS = {
    orange: "Orange Money",
    wave: "Wave",
    carte: "Carte bancaire",
    livraison: "À la livraison"
};

// Notification non bloquante (remplace les alert() bloquants)
function afficherToast(message, type = "info") {
    let toast = document.getElementById("site-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "site-toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = `site-toast ${type}`;
    void toast.offsetWidth;
    toast.classList.add("show");
    clearTimeout(toast._timeoutId);
    toast._timeoutId = setTimeout(() => toast.classList.remove("show"), 3200);
}

// ===========================================
// 2. AFFICHAGE DES PRODUITS (accueil / catalogue)
// ===========================================
const PRODUITS_PAR_PAGE = 12;
const PROMO_CODE = "HYGIA";
const PROMO_PERCENT = 5;
const PROMO_VALID_DAYS = 14;
const BAMAKO_SHIPPING = 1000;
const PROMO_APPLIED_KEY = "couponApplique";
const PROMO_USAGE_KEY = "couponUsage";
const PROMO_POPUP_KEY = "promoPopupSeen";
let activeAppliedCoupon = "";
let activePartnerCoupon = null;
let lastCouponFeedback = { message: "", type: "" };

const promoEndDate = new Date();
promoEndDate.setDate(promoEndDate.getDate() + PROMO_VALID_DAYS);

function isPromoActive() {
    return new Date() <= promoEndDate;
}

function getPromoMessage() {
    return `Livraison gratuite + ${PROMO_PERCENT}% de réduction avec le code ${PROMO_CODE}`;
}

function getClientCouponKey() {
    const utilisateur = getUtilisateurConnecte();
    if (utilisateur && utilisateur.email) {
        return utilisateur.email;
    }

    let deviceKey = localStorage.getItem("couponDeviceKey");
    if (!deviceKey) {
        deviceKey = `guest-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
        localStorage.setItem("couponDeviceKey", deviceKey);
    }
    return deviceKey;
}

function getCouponUsageMap() {
    const raw = localStorage.getItem(PROMO_USAGE_KEY);
    return raw ? JSON.parse(raw) : {};
}

function setCouponUsageMap(data) {
    localStorage.setItem(PROMO_USAGE_KEY, JSON.stringify(data));
}

function isCouponAlreadyUsed() {
    const usage = getCouponUsageMap();
    return !!usage[getClientCouponKey()];
}

function markCouponAsUsed() {
    const usage = getCouponUsageMap();
    usage[getClientCouponKey()] = true;
    setCouponUsageMap(usage);
}

function getAppliedCoupon() {
    return activeAppliedCoupon;
}

function setAppliedCoupon(code) {
    activeAppliedCoupon = code.toUpperCase();
    localStorage.removeItem(PROMO_APPLIED_KEY);
}

function clearAppliedCoupon() {
    activeAppliedCoupon = "";
    localStorage.removeItem(PROMO_APPLIED_KEY);
}

const PARTNER_COUPON_KEY = "partenaireCoupon";

function getPartnerCoupon() {
    return activePartnerCoupon;
}

// Animation de chargement Sypha (overlay global)
function showSyphaLoader(text = "Chargement...") {
    let overlay = document.getElementById("sypha-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "sypha-overlay";
        overlay.className = "sypha-overlay";
        overlay.innerHTML = `
            <div class="sypha-loader"></div>
            <div class="sypha-text">${text}</div>
        `;
        document.body.appendChild(overlay);
    } else {
        overlay.querySelector(".sypha-text").textContent = text;
        overlay.classList.remove("hidden");
    }
}

function hideSyphaLoader() {
    const overlay = document.getElementById("sypha-overlay");
    if (overlay) overlay.classList.add("hidden");
}

function setPartnerCoupon(code, reduction) {
    activePartnerCoupon = { code: code.toUpperCase(), reduction };
    localStorage.removeItem(PARTNER_COUPON_KEY);
}

function clearPartnerCoupon() {
    activePartnerCoupon = null;
    localStorage.removeItem(PARTNER_COUPON_KEY);
}

function resetCouponUI() {
    clearPartnerCoupon();
    clearAppliedCoupon();
    lastCouponFeedback = { message: "", type: "" };
    const couponInput = document.getElementById("coupon-input");
    if (couponInput) couponInput.value = "";
}

async function validerCodePartenaire(code) {
    try {
        const res = await fetch(`${BACKEND_URL}/api/verifier-code-promo`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code })
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Erreur validation code partenaire :", err);
        return { valide: false };
    }
}

function setCouponFeedback(message, type = "info") {
    lastCouponFeedback = { message, type };
}

function applyCoupon(code) {
    const normalizedCode = code.trim().toUpperCase();

    if (!normalizedCode) {
        setCouponFeedback("Veuillez saisir un code promo.", "error");
        clearAppliedCoupon();
        return { success: false, message: "Veuillez saisir un code promo." };
    }

    if (!isPromoActive()) {
        setCouponFeedback("La promotion est terminée.", "error");
        clearAppliedCoupon();
        return { success: false, message: "La promotion est terminée." };
    }

    if (normalizedCode !== PROMO_CODE) {
        setCouponFeedback("Ce code promo n'existe pas.", "error");
        clearAppliedCoupon();
        return { success: false, message: "Ce code promo n'existe pas." };
    }

    if (isCouponAlreadyUsed()) {
        setCouponFeedback("Ce code a déjà été utilisé pour votre compte ou appareil.", "error");
        clearAppliedCoupon();
        return { success: false, message: "Ce code a déjà été utilisé pour votre compte ou appareil." };
    }

    setAppliedCoupon(normalizedCode);
    setCouponFeedback(`Code ${normalizedCode} appliqué avec succès ! Réduction de ${PROMO_PERCENT}%.`, "success");

    return {
        success: true,
        message: `Code ${normalizedCode} appliqué avec succès ! Réduction de ${PROMO_PERCENT}%.`
    };
}

function getPanierSubtotal() {
    const panier = getPanier();
    let subtotal = 0;

    panier.forEach(item => {
        const produit = getProduitById(item.id);
        if (produit) {
            subtotal += produit.prix * item.quantite;
        }
    });

    return subtotal;
}

function getCartTotals() {
    const subtotal = getPanierSubtotal();
    const zoneSelected = Boolean(document.getElementById("livraison-zone")?.value?.trim());

    const partnerCoupon = getPartnerCoupon();
    if (partnerCoupon) {
        const discount = Math.floor(subtotal * partnerCoupon.reduction / 100);
        const shipping = 0;
        const total = Math.max(0, subtotal - discount);
        return {
            subtotal,
            discount,
            shipping,
            shippingPending: false,
            total,
            couponApplied: true,
            partnerCoupon
        };
    }

    const couponApplied = getAppliedCoupon() === PROMO_CODE && isPromoActive();
    const discount = couponApplied ? Math.floor(subtotal * PROMO_PERCENT / 100) : 0;
    const shipping = zoneSelected && !couponApplied ? BAMAKO_SHIPPING : 0;
    const total = Math.max(0, subtotal - discount + shipping);

    return {
        subtotal,
        discount,
        shipping,
        shippingPending: !zoneSelected && !couponApplied,
        total,
        couponApplied,
        partnerCoupon: null
    };
}

function createPromoBanner() {
    if (document.getElementById("promo-banner")) return;

    const banner = document.createElement("div");
    banner.id = "promo-banner";
    banner.innerHTML = `
        <span>🎉 ${getPromoMessage()} · Offre valable 2 semaines</span>
        <button id="promo-banner-close" aria-label="Fermer la promotion">✕</button>
    `;
    document.body.prepend(banner);

    const closeButton = document.getElementById("promo-banner-close");
    if (closeButton) {
        closeButton.addEventListener("click", () => banner.remove());
    }
}

function createPromoPopup() {
    if (document.getElementById("promo-popup-overlay") || localStorage.getItem(PROMO_POPUP_KEY) === "true") return;

    const overlay = document.createElement("div");
    overlay.id = "promo-popup-overlay";
    overlay.className = "promo-popup-overlay";

    overlay.innerHTML = `
        <div class="promo-popup">
            <button class="promo-popup-close" aria-label="Fermer la promotion">✕</button>
            <p class="promo-popup-label">Promotion spéciale</p>
            <h3>${getPromoMessage()}</h3>
            <p>Utilisez le code <strong>${PROMO_CODE}</strong> pour obtenir 5% de réduction et une livraison gratuite. Cette offre est valable pour les 2 prochaines semaines.</p>
            <button class="promo-popup-btn">J’ai compris</button>
        </div>
    `;

    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector(".promo-popup-close");
    const confirmBtn = overlay.querySelector(".promo-popup-btn");

    const closePopup = () => {
        overlay.remove();
        localStorage.setItem(PROMO_POPUP_KEY, "true");
    };

    closeBtn.addEventListener("click", closePopup);
    confirmBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closePopup();
    });
}

function initPromoSystem() {
    createPromoBanner();
    createPromoPopup();
}

function afficherProduits(listeProduits, limite = null, page = 1) {
    const container = document.getElementById("product-container");
    if (!container) return;

    container.innerHTML = "";

    let liste = listeProduits;
    let totalPages = 1;

    if (limite) {
        // accueil : on coupe juste à "limite" produits, pas de pagination
        liste = listeProduits.slice(0, limite);
    } else {
        // catalogue : pagination
        totalPages = Math.ceil(listeProduits.length / PRODUITS_PAR_PAGE);
        const debut = (page - 1) * PRODUITS_PAR_PAGE;
        liste = listeProduits.slice(debut, debut + PRODUITS_PAR_PAGE);
    }

    if (liste.length === 0) {
        container.innerHTML = `<p class="no-result">${t("no.result")}</p>`;
    } else {
        liste.forEach(produit => {
            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
          <a href="produit.html?id=${produit.id}" class="product-link">
            <img src='${escapeHtml(encodeURI(normaliserImage(produit.image)))}' alt='${escapeHtml(produit.nom)}' loading='lazy' decoding='async' onerror='this.style.display="none";this.onerror=null;'>
            <h3>${escapeHtml(produit.nom)}</h3>
          </a>
          <p class="price">${produit.prix.toLocaleString()} FCFA</p>
          <button class="btn-add-cart" data-id="${produit.id}">${t("btn.add.cart")}</button>
        `;

            container.appendChild(card);
        });
    }

    appliquerTraductions();

    // affiche les boutons de pagination uniquement si pas de limite (catalogue)
    if (!limite) {
        afficherPagination(listeProduits.length, page, totalPages);
    }
}

// Génère les boutons de pagination (Précédent, numéros, Suivant)
function afficherPagination(_totalProduits, pageActuelle, totalPages) {
    let paginationContainer = document.getElementById("pagination-container");

    // crée le conteneur s'il n'existe pas encore
    if (!paginationContainer) {
        paginationContainer = document.createElement("div");
        paginationContainer.id = "pagination-container";
        paginationContainer.className = "pagination";
        const productContainer = document.getElementById("product-container");
        productContainer.insertAdjacentElement("afterend", paginationContainer);
    }

    paginationContainer.innerHTML = "";

    // pas besoin de pagination s'il y a une seule page
    if (totalPages <= 1) return;

    // bouton "Précédent"
    const btnPrev = document.createElement("button");
    btnPrev.textContent = tr("← Précédent", "← Previous");
    btnPrev.className = "pagination-btn";
    btnPrev.disabled = pageActuelle === 1;
    btnPrev.addEventListener("click", () => changerPage(pageActuelle - 1));
    paginationContainer.appendChild(btnPrev);

    // boutons numérotés
    for (let i = 1; i <= totalPages; i++) {
        const btnPage = document.createElement("button");
        btnPage.textContent = i;
        btnPage.className = "pagination-btn" + (i === pageActuelle ? " active" : "");
        btnPage.addEventListener("click", () => changerPage(i));
        paginationContainer.appendChild(btnPage);
    }

    // bouton "Suivant"
    const btnNext = document.createElement("button");
    btnNext.textContent = tr("Suivant →", "Next →");
    btnNext.className = "pagination-btn";
    btnNext.disabled = pageActuelle === totalPages;
    btnNext.addEventListener("click", () => changerPage(pageActuelle + 1));
    paginationContainer.appendChild(btnNext);
}

// Variable globale pour mémoriser la page actuelle
let pageActuelleCatalogue = 1;

// Change de page et réaffiche les produits avec les filtres actuels
function changerPage(nouvellePage) {
    pageActuelleCatalogue = nouvellePage;
    appliquerFiltres(false);

    // remonte en haut de la grille pour le confort de lecture
    document.getElementById("product-container").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ===========================================
// 3. FILTRES & TRI (catalogue uniquement)
// ===========================================
function normaliserTexte(texte) {
    return texte
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function appliquerFiltres(reinitialiserPage = false) {
    if (reinitialiserPage) {
        pageActuelleCatalogue = 1;
    }

    let resultat = [...produits];

    const rechercheInput = document.getElementById("recherche-nom") || document.getElementById("search-input");
    const texteRecherche = rechercheInput ? normaliserTexte(rechercheInput.value) : "";

    if (texteRecherche !== "") {
        resultat = resultat
            .map(p => ({ produit: p, score: scorePertinence(texteRecherche, p.nom) }))
            .filter(r => r.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(r => r.produit);
    }

    const categoriesCochees = Array.from(
        document.querySelectorAll(".filter-categorie:checked")
    ).map(checkbox => checkbox.value);

    if (categoriesCochees.length > 0) {
        resultat = resultat.filter(produit => categoriesCochees.includes(produit.categorie));
    }

    const filtreProduitActif = document.querySelector(".filter-box-btn.active")?.dataset.produitFilter || "tous";

    if (filtreProduitActif === "promo") {
        resultat = resultat.filter(produit => produit.promo);
    }

    if (filtreProduitActif === "stock") {
        resultat = resultat.filter(produit => produit.stock !== false);
    }

    const prixMinInput = document.getElementById("prix-min");
    const prixMaxInput = document.getElementById("prix-max");

    const prixMin = prixMinInput && prixMinInput.value !== "" ? Number(prixMinInput.value) : null;
    const prixMax = prixMaxInput && prixMaxInput.value !== "" ? Number(prixMaxInput.value) : null;

    const prixMinAutorise = Math.min(...resultat.map(p => p.prix));
    const prixMaxAutorise = Math.max(...resultat.map(p => p.prix));

    if (prixMin !== null) {
        const minValide = Math.max(prixMinAutorise, prixMin);
        if (minValide !== prixMin) {
            if (prixMinInput) prixMinInput.value = String(minValide);
        }
        resultat = resultat.filter(produit => produit.prix >= minValide);
    }

    if (prixMax !== null) {
        const maxValide = Math.min(prixMaxAutorise, prixMax);
        if (maxValide !== prixMax) {
            if (prixMaxInput) prixMaxInput.value = String(maxValide);
        }
        resultat = resultat.filter(produit => produit.prix <= maxValide);
    }

    const triSelect = document.getElementById("tri-select");
    const tri = triSelect ? triSelect.value : "defaut";

    if (tri === "prix-asc") {
        resultat.sort((a, b) => a.prix - b.prix);
    } else if (tri === "prix-desc") {
        resultat.sort((a, b) => b.prix - a.prix);
    } else if (tri === "nom-asc") {
        resultat.sort((a, b) => a.nom.localeCompare(b.nom));
    }

    afficherProduits(resultat, null, pageActuelleCatalogue);
}

function reinitialiserFiltres() {
    pageActuelleCatalogue = 1;
    const rechercheInput = document.getElementById("recherche-nom") || document.getElementById("search-input");
    if (rechercheInput) rechercheInput.value = "";

    document.querySelectorAll(".filter-categorie").forEach(checkbox => checkbox.checked = false);

    const prixMinInput = document.getElementById("prix-min");
    const prixMaxInput = document.getElementById("prix-max");
    if (prixMinInput) prixMinInput.value = "";
    if (prixMaxInput) prixMaxInput.value = "";

    const triSelect = document.getElementById("tri-select");
    if (triSelect) triSelect.value = "defaut";

    document.querySelectorAll(".filter-box-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    const btnTous = document.querySelector('.filter-box-btn[data-produit-filter="tous"]');
    if (btnTous) btnTous.classList.add("active");

    afficherProduits(produits);
}

// ===========================================
// 4. SYSTÈME DE PANIER (avec localStorage)
// ===========================================

function getPanier() {
    const panier = localStorage.getItem("panier");
    return panier ? JSON.parse(panier) : [];
}

function savePanier(panier) {
    localStorage.setItem("panier", JSON.stringify(panier));
}

function ajouterAuPanier(idProduit) {
    const panier = getPanier();
    const produit = getProduitById(idProduit);
    if (!produit) return;

    const itemExistant = panier.find(item => item.id === idProduit);

    if (itemExistant) {
        itemExistant.quantite += 1;
    } else {
        panier.push({ id: produit.id, quantite: 1 });
    }

    savePanier(panier);
    mettreAJourCompteurPanier(true);
    
    // Afficher l'overlay de récapitulatif
    afficherOverlayAjoutPanier(produit);
}

function afficherOverlayAjoutPanier(produit) {
    // Créer l'overlay s'il n'existe pas
    let overlay = document.getElementById("cart-overlay");
    let backdrop = document.getElementById("cart-overlay-backdrop");
    
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "cart-overlay";
        overlay.className = "cart-overlay";
        
        backdrop = document.createElement("div");
        backdrop.id = "cart-overlay-backdrop";
        backdrop.className = "cart-overlay-backdrop";
        
        document.body.appendChild(backdrop);
        document.body.appendChild(overlay);
        
        // Gestionnaire de fermeture
        backdrop.addEventListener("click", fermerOverlayAjoutPanier);
    }
    
    // Calculer le total du panier
    const panier = getPanier();
    const totals = getCartTotals();
    
    // Mettre à jour le contenu
    overlay.innerHTML = `
        <div class="cart-overlay-header">
            <h3>Produit ajouté au panier</h3>
            <button class="cart-overlay-close" id="cart-overlay-close-btn">×</button>
        </div>
        <div class="cart-overlay-content">
            <div class="cart-overlay-product">
                <img src='${escapeHtml(encodeURI(normaliserImage(produit.image)))}' alt='${escapeHtml(produit.nom)}' loading='lazy' decoding='async' onerror='this.style.display="none";this.onerror=null;'>
                <div class="cart-overlay-product-info">
                    <h4>${escapeHtml(produit.nom)}</h4>
                    <p>${produit.prix.toLocaleString()} FCFA</p>
                </div>
            </div>
            <p style="text-align: center; color: #666; font-size: 14px;">
                ${panier.length} article${panier.length > 1 ? 's' : ''} dans votre panier
            </p>
            <p style="text-align: center; font-weight: bold; color: #185FA5; font-size: 16px; margin-top: 8px;">
                Total: ${totals.total.toLocaleString()} FCFA
            </p>
        </div>
        <div class="cart-overlay-footer">
            <div class="cart-overlay-actions">
                <button class="cart-overlay-btn-primary" id="cart-overlay-go-to-cart">
                    Aller au panier
                </button>
                <button class="cart-overlay-btn-secondary" id="cart-overlay-continue-shopping">
                    Continuer mes achats
                </button>
            </div>
        </div>
    `;
    
    // Ajouter les gestionnaires d'événements
    document.getElementById("cart-overlay-close-btn").addEventListener("click", fermerOverlayAjoutPanier);
    document.getElementById("cart-overlay-go-to-cart").addEventListener("click", () => {
        window.location.href = "panier.html";
    });
    document.getElementById("cart-overlay-continue-shopping").addEventListener("click", fermerOverlayAjoutPanier);
    
    // Ouvrir l'overlay
    setTimeout(() => {
        overlay.classList.add("open");
        backdrop.classList.add("open");
    }, 10);
}

function fermerOverlayAjoutPanier() {
    const overlay = document.getElementById("cart-overlay");
    const backdrop = document.getElementById("cart-overlay-backdrop");
    
    if (overlay) overlay.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
}

function mettreAJourCompteurPanier(animer = false) {
    const compteurs = document.querySelectorAll("#cart-count");
    if (compteurs.length === 0) return;

    const panier = getPanier();
    const totalArticles = panier.reduce((total, item) => total + item.quantite, 0);

    compteurs.forEach(compteur => {
        compteur.textContent = totalArticles;

        if (totalArticles === 0) {
            compteur.style.display = "none";
        } else {
            compteur.style.display = "inline-block";
        }

        if (animer) {
            compteur.classList.remove("bump");
            void compteur.offsetWidth;
            compteur.classList.add("bump");
        }
    });
}

function changerQuantite(idProduit, delta) {
    let panier = getPanier();
    const item = panier.find(item => item.id === idProduit);
    if (!item) return;

    item.quantite += delta;

    if (item.quantite <= 0) {
        panier = panier.filter(item => item.id !== idProduit);
    }

    savePanier(panier);
    afficherPanier();
    mettreAJourCompteurPanier();
}

function retirerDuPanier(idProduit) {
    let panier = getPanier();
    panier = panier.filter(item => item.id !== idProduit);
    savePanier(panier);
    afficherPanier();
    mettreAJourCompteurPanier();
}

function mettreAJourResumePanier() {
    const couponMessage = document.getElementById("coupon-message");
    const totalAmount = document.getElementById("total-amount");
    const subtotalAmount = document.getElementById("subtotal-amount");
    const discountAmount = document.getElementById("discount-amount");
    const shippingAmount = document.getElementById("shipping-amount");

    const totals = getCartTotals();

    if (subtotalAmount) subtotalAmount.textContent = totals.subtotal.toLocaleString() + " FCFA";
    if (discountAmount) {
        discountAmount.textContent = totals.discount > 0 ? `-${totals.discount.toLocaleString()} FCFA` : "0 FCFA";
    }
    if (shippingAmount) {
        shippingAmount.textContent = totals.shippingPending
            ? "À calculer"
            : totals.shipping === 0
                ? "Gratuite"
                : `${totals.shipping.toLocaleString()} FCFA`;
    }
    if (totalAmount) totalAmount.textContent = totals.total.toLocaleString() + " FCFA";

    if (couponMessage) {
        if (lastCouponFeedback.message) {
            couponMessage.textContent = lastCouponFeedback.message;
            couponMessage.className = "coupon-message " + (lastCouponFeedback.type === "success" ? "success" : "error");
        } else if (totals.partnerCoupon) {
            couponMessage.textContent = `Code partenaire ${totals.partnerCoupon.code} appliqué : ${totals.partnerCoupon.reduction}% de réduction + livraison gratuite.`;
            couponMessage.className = "coupon-message success";
        } else if (totals.couponApplied) {
            couponMessage.textContent = `Code ${PROMO_CODE} appliqué : ${PROMO_PERCENT}% de réduction + livraison gratuite.`;
            couponMessage.className = "coupon-message success";
        } else if (!isPromoActive()) {
            couponMessage.textContent = "La promotion est terminée.";
            couponMessage.className = "coupon-message error";
        } else {
            couponMessage.textContent = `${getPromoMessage()} · Le code est valable 2 semaines.`;
            couponMessage.className = "coupon-message";
        }
    }
}

function afficherPanier() {
    const container = document.getElementById("panier-container");
    if (!container) return;

    const panier = getPanier();

    container.innerHTML = "";

    if (panier.length === 0) {
        container.innerHTML = `<p class="panier-vide">${t("panier.vide")}</p>`;
        mettreAJourResumePanier();
        return;
    }

    let total = 0;

    panier.forEach(item => {
        const produit = getProduitById(item.id);
        if (!produit) return;

        const sousTotal = produit.prix * item.quantite;
        total += sousTotal;

        const div = document.createElement("div");
        div.className = "panier-item";

        div.innerHTML = `
            <img src='${escapeHtml(encodeURI(normaliserImage(produit.image)))}' alt='${escapeHtml(produit.nom)}' loading='lazy' decoding='async' onerror='this.style.display="none";this.onerror=null;'>
            <div class="panier-item-info">
                <h3>${escapeHtml(produit.nom)}</h3>
                <p class="price-unit">${produit.prix.toLocaleString()} FCFA ${t("unit.price")}</p>
            </div>
            <div class="panier-qty">
                <button class="btn-moins" data-id="${produit.id}">-</button>
                <span>${item.quantite}</span>
                <button class="btn-plus" data-id="${produit.id}">+</button>
            </div>
            <div class="panier-item-total">${sousTotal.toLocaleString()} FCFA</div>
            <button class="btn-remove" data-id="${produit.id}" title="Retirer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
            </button>
        `;

        container.appendChild(div);
    });

    mettreAJourResumePanier();

    // Pré-remplir le formulaire livraison si l'utilisateur est connecté
    const utilisateur = getUtilisateurConnecte();
    if (utilisateur) {
        const nomInput = document.getElementById("livraison-nom");
        const emailInput = document.getElementById("livraison-email");
        const telInput = document.getElementById("livraison-tel");

        if (nomInput && !nomInput.value) nomInput.value = utilisateur.nom || "";
        if (emailInput && !emailInput.value) emailInput.value = utilisateur.email || "";

        if (telInput && !telInput.value && utilisateur.telephone) {
            telInput.value = utilisateur.telephone;
        }
    }
}

// ===========================================
// GESTION DE LA MODALE DE PAIEMENT
// ===========================================

function getDetailsPaiement(methode, total) {
    const libelles = {
        orange: "Orange Money",
        wave: "Wave",
        carte: tr("Carte bancaire Visa / Mastercard", "Visa / Mastercard bank card"),
        livraison: tr("À la livraison", "Cash on delivery")
    };
    const logos = {
        orange: "img/logo Orange.png",
        wave: "img/logo wave.png",
        carte: "img/logo visa-mastercard.png",
        livraison: "img/delivery-truck.png"
    };

    if (methode === "livraison") {
        return `
            <div style="text-align:center; padding: 10px 0;">
                <div style="font-size:42px; margin-bottom:10px;">🚚</div>
                <p style="font-size:14px; color:#555; margin-bottom:12px;">
                    ${tr("Vous avez choisi de payer", "You chose to pay")} <strong>${total.toLocaleString()} FCFA</strong>
                    ${tr("à la livraison de votre commande.", "when your order is delivered.")}
                </p>
                <p style="font-size:12px; color:#888;">
                    ${tr("Préparez le montant exact. Notre livreur vous contactera avant l'envoi.", "Please prepare the exact amount. Our courier will contact you before delivery.")}
                </p>
                <button class="btn-confirmer" style="margin-top:14px;">
                    ${tr("Confirmer ma commande", "Confirm my order")}
                </button>
            </div>
        `;
    }

    const logo = logos[methode] ? `<img src="${logos[methode]}" alt="${libelles[methode]}" style="height:36px;object-fit:contain;margin-bottom:10px;">` : "";
    return `
        <div style="text-align:center; padding: 10px 0;">
            ${logo}
            <p style="font-size:14px; color:#555; margin-bottom:12px;">
                ${t("paiement.redirect")}
                XPay — <strong>${total.toLocaleString()} FCFA</strong>
                ${tr("par", "via")} <strong>${libelles[methode] || methode}</strong>.
            </p>
            <p style="font-size:12px; color:#888;">
                ${t("paiement.secure")}
            </p>
            <button class="btn-confirmer" style="margin-top:14px;">
                ${t("paiement.confirmer")}
            </button>
        </div>
    `;
}

function getTotalPanier() {
    return getCartTotals().total;
}

function validerFormulaireLivraison() {
    let valide = true;

    const nom = document.getElementById("livraison-nom");
    const tel = document.getElementById("livraison-tel");
    const adresse = document.getElementById("livraison-adresse");
    const email = document.getElementById("livraison-email");
    const zone = document.getElementById("livraison-zone");

    function setError(input, errorId, message) {
        input.classList.add("input-error");
        input.classList.remove("input-ok");
        const err = document.getElementById(errorId);
        if (err) err.textContent = message;
        valide = false;
    }

    function setOk(input, errorId) {
        input.classList.remove("input-error");
        input.classList.add("input-ok");
        const err = document.getElementById(errorId);
        if (err) err.textContent = "";
    }

    if (!nom || nom.value.trim().length < 2) {
        setError(nom, "error-nom", "Veuillez entrer votre nom complet.");
    } else {
        setOk(nom, "error-nom");
    }

    const telRegex = /^(\+223|00223)?[6-9]\d{7}$/;
    if (!tel || !telRegex.test(tel.value.trim().replace(/\s/g, ""))) {
        setError(tel, "error-tel", "Numéro invalide. Format Mali attendu : +223 7X XXX XXX ou 8 chiffres.");
    } else {
        setOk(tel, "error-tel");
    }

    if (!adresse || adresse.value.trim().length < 5) {
        setError(adresse, "error-adresse", "Veuillez entrer votre adresse de livraison.");
    } else {
        setOk(adresse, "error-adresse");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.value.trim())) {
        setError(email, "error-email", "Veuillez entrer une adresse email valide.");
    } else {
        setOk(email, "error-email");
    }

    if (!zone || !zone.value.trim()) {
        setError(zone, "error-zone", "Veuillez sélectionner votre commune / zone à Bamako.");
    } else {
        setOk(zone, "error-zone");
    }

    return valide;
}

async function confirmerCommande(methode) {
    console.log("DEBUG: confirmerCommande appelée avec methode =", methode);
    const panier = getPanier();
    if (panier.length === 0) return;

    const nomClient = document.getElementById("livraison-nom")
        ?.value?.trim() || "";
    const telClient = document.getElementById("livraison-tel")
        ?.value?.trim() || "";
    const adresseClient = document.getElementById("livraison-adresse")
        ?.value?.trim() || "";
    const emailClient = document.getElementById("livraison-email")
        ?.value?.trim() || "";
    const zoneClient = document.getElementById("livraison-zone")
        ?.value?.trim() || "";

    const articles = panier.map(item => ({
        id: item.id,
        quantite: item.quantite
    }));
    const totals = getCartTotals();
    const partnerCoupon = getPartnerCoupon();
    const codePromo = activeAppliedCoupon || (partnerCoupon ? partnerCoupon.code : "");
    const isLivraison = methode === "livraison";

    console.log("DEBUG: methode =", methode, "isLivraison =", isLivraison);

    // Feedback visuel sur le bouton + loader Sypha
    const btnConfirmer = document.querySelector(".btn-confirmer");
    if (btnConfirmer) {
        btnConfirmer.textContent = isLivraison
            ? "⏳ Validation de votre commande..."
            : "⏳ Redirection vers le paiement...";
        btnConfirmer.disabled = true;
    }
    showSyphaLoader(isLivraison ? "Validation de votre commande..." : "Redirection vers le paiement...");

    // ÉTAPE 1 : Créer la commande dans MongoDB
    let numeroCommande = "";
    let data = {};
    try {
        const payload = {
            client: {
                nom: nomClient,
                telephone: telClient,
                adresse: adresseClient,
                commune: zoneClient,
                email: emailClient || getUtilisateurConnecte()?.email || ""
            },
            articles,
            codePromo,
            zoneLivraison: zoneClient,
            modePaiement: MODES_PAIEMENT_LABELS[methode] || methode
        };

        const res = await fetch(`${BACKEND_URL}/api/commandes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        data = await res.json();
        numeroCommande = data.numero || "";

        if (!numeroCommande) {
            throw new Error("Numéro de commande non reçu");
        }

        // Le code promo/créateur a été utilisé pour cette commande : on le vide
        if (totals.couponApplied) {
            markCouponAsUsed();
        }
        resetCouponUI();
    } catch (err) {
        console.warn("Impossible de créer la commande:", err);
        hideSyphaLoader();
        alert("Impossible d'enregistrer la commande. Veuillez réessayer.");
        if (btnConfirmer) {
            btnConfirmer.textContent = tr("Confirmer ma commande", "Confirm my order");
            btnConfirmer.disabled = false;
        }
        return;
    }

    const totalCommande = data.total || totals.total;

    // Paiement à la livraison : pas d'appel PayTech, on confirme directement
    if (isLivraison) {
        console.log("DEBUG: Paiement à la livraison, redirection vers confirmation");
        enregistrerCommande(panier, methode, totalCommande);
        savePanier([]);
        mettreAJourCompteurPanier();
        window.location.href = `commande-confirmee.html?numero=${numeroCommande}`;
        return;
    }

    console.log("DEBUG: Paiement en ligne, appel Moneroo");

    // ÉTAPE 2 : Initier le paiement Moneroo
    try {
        console.log("DEBUG: Appel Moneroo avec commande_id =", numeroCommande, "montant =", totalCommande);
        const res = await fetch(`${BACKEND_URL}/api/paiement/initier`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                commande_id: numeroCommande,
                montant: totalCommande,
                client: {
                    nom: nomClient,
                    telephone: telClient,
                    email: emailClient || getUtilisateurConnecte()?.email || ""
                },
                methode: methode
            })
        });

        const paymentData = await res.json();
        console.log("DEBUG: Réponse Moneroo =", paymentData);

        if (paymentData.succes && paymentData.redirect_url) {
            // Sauvegarder dans l'historique local avant redirection
            enregistrerCommande(panier, methode, totalCommande);
            savePanier([]);
            mettreAJourCompteurPanier();

            // Rediriger vers la page de paiement Moneroo
            window.location.href = paymentData.redirect_url;
            return;

        } else {
            // Si le paiement électronique n'est pas disponible
            enregistrerCommande(panier, methode, totalCommande);
            savePanier([]);
            mettreAJourCompteurPanier();
            afficherToast(paymentData.erreur || "Erreur initialisation paiement", "error");
            window.location.href = `commande-confirmee.html?numero=${numeroCommande}`;
        }

    } catch (err) {
        hideSyphaLoader();
        console.error("Erreur Moneroo:", err);
        // Même comportement en cas d'erreur réseau
        enregistrerCommande(panier, methode, totalCommande);
        savePanier([]);
        mettreAJourCompteurPanier();
        afficherToast("Votre commande est enregistrée. Le paiement en ligne est momentanément indisponible.", "info");
        window.location.href = `commande-confirmee.html?numero=${numeroCommande}`;
    }
}

// ===========================================
// PAGE DÉTAIL PRODUIT (produit.html?id=X)
// ===========================================
function afficherPageProduit() {
    const container = document.getElementById("produit-detail");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const produit = getProduitById(id);

    if (!produit) {
        container.innerHTML = "<p class='no-result'>Produit introuvable.</p>";
        return;
    }

    document.title = produit.nom + " — Hygia";

    container.innerHTML = `
        <div class="produit-detail-image">
            <img src='${escapeHtml(encodeURI(normaliserImage(produit.image)))}' alt='${escapeHtml(produit.nom)}' loading='lazy' decoding='async' onerror='this.style.display="none";this.onerror=null;'>
        </div>
        <div class="produit-detail-info">
            <h1>${escapeHtml(produit.nom)}</h1>
            <p class="produit-detail-price">${produit.prix.toLocaleString()} FCFA</p>
            <p class="produit-detail-description">${escapeHtml(getProductDescription(produit))}</p>

            <button class="btn-add-cart" data-id="${produit.id}">${t("btn.add.cart")}</button>

            <section class="avantages-yames">
                <h3>${tr("Les avantages de Hygia", "Why choose Hygia")}</h3>
                <div class="avantages-yames-list">
                    <div class="avantage-item">
                        <span class="avantage-icon icon-truck"></span>
                        <span>${tr("Livraison rapide", "Fast delivery")}</span>
                    </div>
                    <div class="avantage-item">
                        <span class="avantage-icon icon-shield"></span>
                        <span>${tr("Garantie fiable", "Reliable warranty")}</span>
                    </div>
                    <div class="avantage-item">
                        <span class="avantage-icon icon-check"></span>
                        <span>${tr("Produits certifiés", "Certified products")}</span>
                    </div>
                </div>
            </section>
        </div>
    `;

    const similairesContainer = document.getElementById("produits-similaires");
    if (similairesContainer) {
        const similaires = produits.filter(p => p.categorie === produit.categorie && p.id !== produit.id);

        if (similaires.length === 0) {
            similairesContainer.closest("section").style.display = "none";
        } else {
            similaires.slice(0, 4).forEach(p => {
                const card = document.createElement("div");
                card.className = "product-card";
                card.innerHTML = `
                    <a href="produit.html?id=${p.id}" class="product-link">
                        <img src='${escapeHtml(encodeURI(normaliserImage(p.image)))}' alt='${escapeHtml(p.nom)}' loading='lazy' decoding='async' onerror='this.style.display="none";this.onerror=null;'>
                        <h3>${escapeHtml(p.nom)}</h3>
                    </a>
                    <p class="price">${p.prix.toLocaleString()} FCFA</p>
                    <button class="btn-add-cart" data-id="${p.id}">${t("btn.add.cart")}</button>
                `;
                similairesContainer.appendChild(card);
            });
        }
    }
}
// ===========================================
// RECHERCHE LIVE (dans la barre de recherche)
// ===========================================

// Calcule la distance de Levenshtein entre deux chaînes
// (= nombre de modifications pour passer de l'une à l'autre)
// Note : la double boucle est la programmation dynamique standard de cet algorithme
// (remplissage d'une matrice a.length x b.length), pas une recherche indexable via Map/Set.
function distanceLevenshtein(a, b) {
    const matrice = [];

    for (let i = 0; i <= a.length; i++) matrice[i] = [i];
    for (let j = 0; j <= b.length; j++) matrice[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                matrice[i][j] = matrice[i - 1][j - 1];
            } else {
                matrice[i][j] = Math.min(
                    matrice[i - 1][j - 1] + 1, // substitution
                    matrice[i][j - 1] + 1,     // insertion
                    matrice[i - 1][j] + 1      // suppression
                );
            }
        }
    }

    return matrice[a.length][b.length];
}

// Calcule un score de pertinence entre le texte tapé et le nom d'un produit
// Plus le score est élevé, plus le produit est pertinent
// Calcule un score de pertinence entre le texte tapé et le nom d'un produit
// Plus le score est élevé, plus le produit est pertinent. 0 = on élimine.
function scorePertinence(texte, nomProduit) {
    const t = normaliserTexte(texte);
    const nom = normaliserTexte(nomProduit);

    if (t === "") return 0;

    // 1. correspondance exacte du nom entier
    if (nom === t) return 100;

    // 2. le nom commence par le texte tapé
    if (nom.startsWith(t)) return 90;

    // 3. un des mots du nom commence par le texte tapé
    const mots = nom.split(/\s+/);
    if (mots.some(mot => mot.startsWith(t))) return 80;

    // 4. le texte tapé apparaît n'importe où dans le nom (mot collé, ex: "metre")
    if (nom.includes(t)) return 70;

    // 5. tolérance aux fautes de frappe — seulement si le texte tapé est assez long
    // (sinon "te" ou "th" matcherait n'importe quoi par hasard)
    if (t.length >= 3) {
        let meilleureDistance = Infinity;

        mots.forEach(mot => {
            const dist = distanceLevenshtein(t, mot);
            if (dist < meilleureDistance) meilleureDistance = dist;
        });

        // tolérance stricte : 1 erreur pour 4-6 lettres, 2 erreurs max au-delà
        const seuil = t.length <= 6 ? 1 : 2;

        if (meilleureDistance <= seuil) {
            return Math.max(20, 50 - meilleureDistance * 10);
        }
    }

    // aucune correspondance acceptable
    return 0;
}

function initRechercheLive() {
    const input = document.getElementById("search-input");
    if (!input) return;

    let resultsBox = document.querySelector(".search-results");
    if (!resultsBox) {
        resultsBox = document.createElement("div");
        resultsBox.className = "search-results";
        input.closest("form").appendChild(resultsBox);
    }

    input.addEventListener("input", () => {
        const texte = input.value.trim().toLowerCase();

        if (texte === "") {
            resultsBox.classList.remove("active");
            resultsBox.innerHTML = "";
            return;
        }

        const resultats = produits
            .map(p => ({ produit: p, score: scorePertinence(texte, p.nom) }))
            .filter(r => r.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(r => r.produit);

        resultsBox.innerHTML = "";

        if (resultats.length === 0) {
            resultsBox.innerHTML = "<div class='search-no-result'>Aucun produit trouvé</div>";
        } else {
            resultats.slice(0, 6).forEach(produit => {
                const item = document.createElement("a");
                item.className = "search-result-item";
                item.href = `produit.html?id=${produit.id}`;

                item.innerHTML = `
                    <img src='${escapeHtml(encodeURI(normaliserImage(produit.image)))}' alt='${escapeHtml(produit.nom)}' loading='lazy' decoding='async' onerror='this.style.display="none";this.onerror=null;'>
                    <div class="search-result-info">
                        <div class="nom">${escapeHtml(produit.nom)}</div>
                        <div class="prix">${produit.prix.toLocaleString()} FCFA</div>
                    </div>
                `;

                resultsBox.appendChild(item);
            });
        }

        resultsBox.classList.add("active");
    });

    document.addEventListener("click", (e) => {
        if (!input.closest("form").contains(e.target)) {
            resultsBox.classList.remove("active");
        }
    });

    input.closest("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const texte = input.value.trim();
        if (texte !== "") {
            window.location.href = "catalogue.html?q=" + encodeURIComponent(texte);
        }
    });
}

// ===========================================
// SYSTÈME DE COMPTES (API backend Hygia)
// ===========================================

const ACCESS_TOKEN_KEY = "hygiaAccessToken";

function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function setAccessToken(token) {
    if (token) localStorage.setItem(ACCESS_TOKEN_KEY, token);
    else localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function getUtilisateurConnecte() {
    try {
        const data = localStorage.getItem("utilisateurConnecte");
        if (data) return JSON.parse(data);
    } catch (e) { console.error("getUtilisateurConnecte:", e); }

    const token = getAccessToken();
    if (!token) return null;
    try {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(atob(base64));
        if (payload && payload.exp && payload.exp * 1000 < Date.now()) return null;
        return {
            nom: payload.nom || payload.name || '',
            email: payload.email || '',
            telephone: payload.telephone || ''
        };
    } catch (e) { return null; }
}

function setUtilisateurConnecte(utilisateur, token) {
    localStorage.setItem("utilisateurConnecte", JSON.stringify(utilisateur));
    setAccessToken(token);
}

function deconnecterUtilisateur() {
    localStorage.removeItem("utilisateurConnecte");
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

async function inscrireUtilisateur(nom, telephone, email, motdepasse) {
    showSyphaLoader("Création de votre compte...");
    try {
        const response = await fetch(`${BACKEND_URL}/api/auth/inscription`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nom, telephone, email, motdepasse })
        });

        const data = await response.json();

        if (data.succes && data.utilisateur && data.token) {
            setUtilisateurConnecte({
                nom: data.utilisateur.nom,
                email: data.utilisateur.email,
                telephone: data.utilisateur.telephone || telephone
            }, data.token);
            return { succes: true, message: data.message || "Compte créé avec succès !" };
        }

        return { succes: false, message: data.erreur || "Erreur lors de la création du compte." };
    } catch (error) {
        console.error("Erreur inscription :", error);
        return { succes: false, message: "Impossible de créer le compte. Vérifiez votre connexion." };
    } finally {
        hideSyphaLoader();
    }
}

async function connecterUtilisateur(email, motdepasse) {
    showSyphaLoader("Connexion en cours...");
    try {
        const response = await fetch(`${BACKEND_URL}/api/auth/connexion`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, motdepasse })
        });

        const data = await response.json();

        if (data.succes && data.utilisateur && data.token) {
            setUtilisateurConnecte({
                nom: data.utilisateur.nom,
                email: data.utilisateur.email,
                telephone: data.utilisateur.telephone || ""
            }, data.token);
            return { succes: true, message: data.message || "Connexion réussie !" };
        }

        return { succes: false, message: data.erreur || "Email ou mot de passe incorrect." };
    } catch (error) {
        console.error("Erreur connexion :", error);
        return { succes: false, message: "Impossible de se connecter. Vérifiez votre connexion." };
    } finally {
        hideSyphaLoader();
    }
}

function mettreAJourNavCompte() {
    const liens = document.querySelectorAll(".nav-compte-link");
    if (liens.length === 0) return;

    const utilisateur = getUtilisateurConnecte();

    liens.forEach(lien => {
        if (utilisateur) {
            lien.textContent = t("nav.moncompte");
            lien.href = "compte.html";
        } else {
            lien.textContent = t("nav.connexion");
            lien.href = "connexion.html";
        }
    });
}

// Affiche le résultat d'une action d'authentification (inscription/connexion)
// et redirige vers le compte en cas de succès. Factorisé pour éviter la duplication.
function afficherResultatAuth(resultat, messageEl) {
    messageEl.textContent = resultat.message;
    messageEl.className = "auth-message " + (resultat.succes ? "success" : "error");

    if (resultat.succes) {
        setTimeout(() => {
            window.location.href = "compte.html";
        }, 800);
    }
}

function initFormulairesAuth() {
    const formInscription = document.getElementById("form-inscription");
    const formConnexion = document.getElementById("form-connexion");
    const message = document.getElementById("auth-message");

    if (formInscription) {
        formInscription.addEventListener("submit", async (e) => {
            e.preventDefault();

            const nom = document.getElementById("nom").value.trim();
            const telephone = document.getElementById("telephone").value.trim();
            const email = document.getElementById("email").value.trim();
            const motdepasse = document.getElementById("password").value;

            const resultat = await inscrireUtilisateur(nom, telephone, email, motdepasse);
            afficherResultatAuth(resultat, message);
        });
    }

    if (formConnexion) {
        formConnexion.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const motdepasse = document.getElementById("password").value;

            const resultat = await connecterUtilisateur(email, motdepasse);
            afficherResultatAuth(resultat, message);
        });
    }
}

function getInitials(nom) {
    if (!nom) return "—";
    const parts = nom.trim().split(" ").filter(Boolean);
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
}

function afficherMessageCompte(elementId, message, type) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.textContent = message;
    el.className = `compte-message ${type}`;
}

function cacherMessageCompte(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.className = "compte-message";
    el.textContent = "";
}

function initFormulairesCompte(utilisateur) {
    const btnModifier = document.getElementById("btn-modifier-profil");
    const btnChangerPassword = document.getElementById("btn-changer-password");
    const formProfilCard = document.getElementById("form-profil-card");
    const formPasswordCard = document.getElementById("form-password-card");
    const formProfil = document.getElementById("form-profil");
    const formPassword = document.getElementById("form-password");
    const btnAnnulerProfil = document.getElementById("btn-annuler-profil");
    const btnAnnulerPassword = document.getElementById("btn-annuler-password");

    function fermerFormulaires() {
        if (formProfilCard) formProfilCard.classList.remove("active");
        if (formPasswordCard) formPasswordCard.classList.remove("active");
        if (btnModifier) btnModifier.style.display = "";
        if (btnChangerPassword) btnChangerPassword.style.display = "";
        cacherMessageCompte("profil-message");
        cacherMessageCompte("password-message");
    }

    if (btnModifier && formProfilCard) {
        btnModifier.addEventListener("click", () => {
            document.getElementById("profil-nom").value = utilisateur.nom || "";
            document.getElementById("profil-telephone").value = utilisateur.telephone || "";
            document.getElementById("profil-motdepasse").value = "";
            cacherMessageCompte("profil-message");
            formProfilCard.classList.add("active");
            formPasswordCard.classList.remove("active");
            if (btnChangerPassword) btnChangerPassword.style.display = "";
        });
    }

    if (btnChangerPassword && formPasswordCard) {
        btnChangerPassword.addEventListener("click", () => {
            formPassword.reset();
            cacherMessageCompte("password-message");
            formPasswordCard.classList.add("active");
            formProfilCard.classList.remove("active");
            if (btnModifier) btnModifier.style.display = "";
        });
    }

    if (btnAnnulerProfil) btnAnnulerProfil.addEventListener("click", fermerFormulaires);
    if (btnAnnulerPassword) btnAnnulerPassword.addEventListener("click", fermerFormulaires);

    if (formProfil) {
        formProfil.addEventListener("submit", async (e) => {
            e.preventDefault();
            cacherMessageCompte("profil-message");
            showSyphaLoader("Mise à jour du profil...");

            const nom = document.getElementById("profil-nom").value.trim();
            const telephone = document.getElementById("profil-telephone").value.trim();
            const motdepasse = document.getElementById("profil-motdepasse").value;

            try {
                const response = await fetch(`${BACKEND_URL}/api/auth/profil`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${getAccessToken()}`
                    },
                    body: JSON.stringify({
                        motdepasse,
                        nom,
                        telephone
                    })
                });

                const data = await response.json();

                if (data.succes) {
                    // Mettre à jour l'utilisateur en localStorage
                    const misAJour = {
                        ...utilisateur,
                        nom: data.utilisateur.nom,
                        telephone: data.utilisateur.telephone
                    };
                    setUtilisateurConnecte(misAJour);

                    // Mettre à jour l'affichage
                    document.getElementById("compte-nom").textContent = tr("Bonjour, ", "Hello, ") + misAJour.nom;
                    document.getElementById("compte-avatar").textContent = getInitials(misAJour.nom);
                    document.getElementById("info-nom").textContent = misAJour.nom || "—";
                    document.getElementById("info-telephone").textContent = misAJour.telephone || "—";

                    afficherMessageCompte("profil-message", data.message, "success");
                    setTimeout(fermerFormulaires, 1500);
                } else {
                    afficherMessageCompte("profil-message", data.erreur || "Erreur lors de la mise à jour.", "error");
                }
            } catch (error) {
                console.error("Erreur mise à jour profil :", error);
                afficherMessageCompte("profil-message", "Erreur réseau. Vérifiez votre connexion.", "error");
            } finally {
                hideSyphaLoader();
            }
        });
    }

    if (formPassword) {
        formPassword.addEventListener("submit", async (e) => {
            e.preventDefault();
            cacherMessageCompte("password-message");

            const ancien = document.getElementById("password-ancien").value;
            const nouveau = document.getElementById("password-nouveau").value;
            const confirmation = document.getElementById("password-confirmation").value;

            if (nouveau !== confirmation) {
                afficherMessageCompte("password-message", "Les nouveaux mots de passe ne correspondent pas.", "error");
                return;
            }

            if (nouveau.length < 6) {
                afficherMessageCompte("password-message", "Le mot de passe doit contenir au moins 6 caractères.", "error");
                return;
            }

            showSyphaLoader("Modification du mot de passe...");
            try {
                const response = await fetch(`${BACKEND_URL}/api/auth/motdepasse`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${getAccessToken()}`
                    },
                    body: JSON.stringify({
                        ancienMotdepasse: ancien,
                        nouveauMotdepasse: nouveau
                    })
                });

                const data = await response.json();

                if (data.succes) {
                    afficherMessageCompte("password-message", data.message, "success");
                    formPassword.reset();
                    setTimeout(fermerFormulaires, 1500);
                } else {
                    afficherMessageCompte("password-message", data.erreur || "Erreur lors du changement.", "error");
                }
            } catch (error) {
                console.error("Erreur changement mot de passe :", error);
                afficherMessageCompte("password-message", "Erreur réseau. Vérifiez votre connexion.", "error");
            } finally {
                hideSyphaLoader();
            }
        });
    }
}

function afficherOnglet(onglet, btnClique) {
    document.querySelectorAll(".compte-tab-panel").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".compte-tab-btn").forEach(b => b.classList.remove("active"));
    const panel = document.getElementById("tab-" + onglet);
    if (panel) panel.classList.add("active");
    if (btnClique) btnClique.classList.add("active");
}

async function afficherFidelite() {
    const pointsEl = document.getElementById("stat-points");
    if (!pointsEl) return;

    try {
        const response = await fetch(`${BACKEND_URL}/api/fidelite/points`, {
            headers: {
                "Authorization": `Bearer ${getAccessToken()}`
            }
        });
        const data = await response.json();

        if (data.succes) {
            pointsEl.textContent = (data.pointsFidelite || 0).toLocaleString("fr-FR");
        } else {
            pointsEl.textContent = "—";
        }
    } catch (error) {
        console.error("Erreur chargement fidélité :", error);
        pointsEl.textContent = "—";
    }
}

async function afficherPageCompte() {
    const blocConnecte = document.getElementById("compte-connecte");
    const blocNonConnecte = document.getElementById("compte-non-connecte");
    if (!blocConnecte || !blocNonConnecte) return;

    const utilisateur = getUtilisateurConnecte();

    if (!utilisateur) {
        blocNonConnecte.style.display = "block";
        blocConnecte.style.display = "none";
        return;
    }

    blocNonConnecte.style.display = "none";
    blocConnecte.style.display = "block";

    // Avatar : initiales du nom
    const avatarEl = document.getElementById("compte-avatar");
    if (avatarEl) {
        avatarEl.textContent = getInitials(utilisateur.nom);
    }

    document.getElementById("compte-nom").textContent = tr("Bonjour, ", "Hello, ") + utilisateur.nom;
    document.getElementById("compte-email").textContent = utilisateur.email;

    // Infos profil
    const infoNom = document.getElementById("info-nom");
    const infoEmail = document.getElementById("info-email");
    const infoTel = document.getElementById("info-telephone");
    if (infoNom) infoNom.textContent = utilisateur.nom || "—";
    if (infoEmail) infoEmail.textContent = utilisateur.email || "—";

    // Récupérer le téléphone depuis le profil connecté
    if (infoTel) {
        infoTel.textContent = utilisateur.telephone || "—";
    }

    await afficherFidelite();

    const btnDeco = document.getElementById("btn-deconnexion");
    if (btnDeco) {
        btnDeco.addEventListener("click", () => {
            deconnecterUtilisateur();
            window.location.href = "index.html";
        });
    }

    // Initialiser les formulaires de modification de profil et mot de passe
    initFormulairesCompte(utilisateur);

    const btnSupprimer = document.getElementById("btn-supprimer-compte");
    if (btnSupprimer) {
        btnSupprimer.addEventListener("click", async () => {
            const confirmé = window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.");
            if (!confirmé) return;

            const motdepasse = window.prompt("Veuillez entrer votre mot de passe pour confirmer la suppression :");
            if (!motdepasse) return;

            showSyphaLoader("Suppression du compte...");
            try {
                const response = await fetch(`${BACKEND_URL}/api/auth/supprimer`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${getAccessToken()}`
                    },
                    body: JSON.stringify({ motdepasse })
                });

                const data = await response.json();

                if (data.succes) {
                    deconnecterUtilisateur();
                    afficherToast("Votre compte a été supprimé.", "info");
                    setTimeout(() => { window.location.href = "index.html"; }, 1200);
                } else {
                    afficherToast(data.erreur || "Impossible de supprimer le compte.", "error");
                }
            } catch (error) {
                console.error("Erreur suppression compte :", error);
                afficherToast("Erreur réseau lors de la suppression.", "error");
            } finally {
                hideSyphaLoader();
            }
        });
    }

    const historiqueContainer = document.getElementById("historique-commandes");
    if (!historiqueContainer) return;

    historiqueContainer.innerHTML = `<div style="text-align:center;padding:30px;color:#888;font-size:14px;">Chargement de vos commandes...</div>`;

    const statutClasse = (s) => {
        if (!s) return "en-attente";
        const val = s.toLowerCase();
        if (val.includes("livr")) return "livree";
        if (val.includes("pay")) return "confirmee";
        if (val.includes("annul")) return "annulee";
        return "en-attente";
    };

    const iconeMode = (mode) => {
        if (!mode) return "💳";
        const m = mode.toLowerCase();
        if (m.includes("orange")) return "🟠";
        if (m.includes("wave")) return "🔵";
        if (m.includes("livraison")) return "�";
        return "�";
    };

    showSyphaLoader("Chargement de vos commandes...");
    try {
        const res = await fetch(`${BACKEND_URL}/api/mes-commandes`, {
            headers: {
                "Authorization": `Bearer ${getAccessToken()}`
            }
        });
        const data = await res.json();

        const commandes = (data.succes && data.commandes) ? data.commandes : [];

        // Stats
        const statCmds = document.getElementById("stat-total-cmds");
        const statDerniere = document.getElementById("stat-derniere");
        if (statCmds) statCmds.textContent = commandes.length;
        if (statDerniere && commandes.length > 0) {
            const d = new Date(commandes[0].date);
            statDerniere.textContent = d.toLocaleDateString("fr-FR");
        }

        if (commandes.length === 0) {
            historiqueContainer.innerHTML = `
                <div class="historique-vide">
                    <div class="vide-icon">📦</div>
                    <p>${tr("Vous n'avez pas encore passé de commande.", "You haven't placed an order yet.")}</p>
                    <a href="catalogue.html">${tr("Découvrir le catalogue", "Discover the catalogue")}</a>
                </div>`;
            return;
        }

        historiqueContainer.innerHTML = "";
        commandes.forEach((commande, index) => {
            const div = document.createElement("div");
            div.className = 'commande-card' + (index >= 3 ? ' commande-card-plus commande-card-cache' : '');
            const date = new Date(commande.date).toLocaleDateString("fr-FR");
            const itemsHtml = commande.articles.map(a => `
                <div class="article-ligne">
                    <span class="art-nom">${escapeHtml(a.nom)}</span>
                    <span class="art-qty">x${a.quantite}</span>
                </div>`).join("");

            div.innerHTML = `
                <div class="commande-card-header">
                    <span class="cmd-num">Commande ${escapeHtml(commande.numero)}</span>
                    <span class="cmd-date">📅 ${date}</span>
                    <span class="statut-badge ${statutClasse(commande.statut)}">${escapeHtml(commande.statut || "En attente")}</span>
                </div>
                <div class="commande-card-body">
                    <div class="commande-articles">${itemsHtml}</div>
                </div>
                <div class="commande-card-footer">
                    <span class="commande-mode-paiement">${iconeMode(commande.modePaiement)} ${escapeHtml(commande.modePaiement || "—")}</span>
                    <span class="commande-total-amount">${(commande.total || 0).toLocaleString()} FCFA</span>
                </div>`;

            historiqueContainer.appendChild(div);
        });

        if (commandes.length > 3) {
            const btn = document.createElement('button');
            btn.className = 'btn-toggle-commandes';
            btn.textContent = 'Voir les ' + (commandes.length - 3) + ' commandes precedentes';
            btn.addEventListener('click', () => {
                const plus = historiqueContainer.querySelectorAll('.commande-card-plus');
                const montrer = btn.textContent.includes('Voir');
                plus.forEach(c => c.classList.toggle('commande-card-cache', !montrer));
                btn.textContent = montrer ? 'Reduire' : 'Voir les ' + (commandes.length - 3) + ' commandes precedentes';
            });
            historiqueContainer.appendChild(btn);
        }
    } catch (err) {
        console.error("Erreur chargement commandes :", err);
        historiqueContainer.innerHTML = `<div style="text-align:center;padding:30px;color:#c0392b;font-size:14px;">Impossible de charger vos commandes.</div>`;
    } finally {
        hideSyphaLoader();
    }
}

function enregistrerCommande(panier, methode, total) {
    const utilisateur = getUtilisateurConnecte();
    if (!utilisateur) return;

    const historique = JSON.parse(localStorage.getItem("historiqueCommandes") || "[]");

    const articles = panier.map(item => {
        const produit = getProduitById(item.id);
        return { nom: produit ? produit.nom : "Produit", quantite: item.quantite };
    });

    historique.push({
        email: utilisateur.email,
        date: new Date().toLocaleDateString("fr-FR"),
        statut: "En attente",
        articles: articles,
        modePaiement: MODES_PAIEMENT_LABELS[methode] || methode,
        total: total
    });

    localStorage.setItem("historiqueCommandes", JSON.stringify(historique));
}

// ===========================================
// 5. INITIALISATION AU CHARGEMENT DE LA PAGE
// ===========================================
function initPasswordToggles() {
    document.querySelectorAll('input[type="password"]').forEach(input => {
        if (input.parentElement?.classList.contains("password-field")) return;

        const wrapper = document.createElement("div");
        wrapper.className = "password-field";
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);

        const button = document.createElement("button");
        button.type = "button";
        button.className = "password-toggle";
        button.setAttribute("aria-label", "Afficher le mot de passe");
        button.setAttribute("aria-pressed", "false");
        button.innerHTML = '<svg class="eye-open" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg><svg class="eye-closed" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18"/><path d="M10.6 6.2A11 11 0 0 1 12 6c6.5 0 10 6 10 6a18 18 0 0 1-2.1 2.8M6.5 6.5C3.6 8.4 2 12 2 12s3.5 6 10 6c1.8 0 3.3-.5 4.6-1.2M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';
        wrapper.appendChild(button);

        button.addEventListener("click", () => {
            const visible = input.type === "text";
            input.type = visible ? "password" : "text";
            button.setAttribute("aria-label", visible ? "Afficher le mot de passe" : "Masquer le mot de passe");
            button.setAttribute("aria-pressed", String(!visible));
            wrapper.classList.toggle("password-visible", !visible);
            input.focus();
        });
    });
}

function initMobileMenu() {
    const nav = document.querySelector("nav");
    const navCenter = document.querySelector(".nav-center");
    const navLeft = document.querySelector(".nav-left");
    if (!nav || !navCenter || !navLeft) return;

    const toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-label", "Menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span class='bar'></span><span class='bar'></span><span class='bar'></span>";
    navLeft.insertBefore(toggle, navLeft.firstChild);

    const openMenu = () => {
        navCenter.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
        navCenter.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    };

    let closeTimer = null;

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        if (navCenter.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Survol du hamburger : afficher le menu
    toggle.addEventListener("mouseenter", () => {
        clearTimeout(closeTimer);
        openMenu();
    });

    toggle.addEventListener("mouseleave", () => {
        closeTimer = setTimeout(closeMenu, 200);
    });

    navCenter.addEventListener("mouseenter", () => {
        clearTimeout(closeTimer);
    });

    navCenter.addEventListener("mouseleave", () => {
        closeTimer = setTimeout(closeMenu, 200);
    });

    navCenter.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    document.addEventListener("click", (e) => {
        if (navCenter.classList.contains("open") && !nav.contains(e.target)) {
            closeMenu();
        }
    });
}

// Animations d'apparition (accueil et à propos)
function initScrollReveal() {
    if (!document.querySelector(".hero, .apropos-hero")) return;

    const selectors = [
        "main > section", "main > div",
        ".category-item", ".why-item", ".valeur-card", ".why-card", ".stat-bloc",
        ".apropos-preview-texte", ".apropos-preview-img", ".qui-texte", ".qui-image"
    ];

    const elements = [];
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (el.classList.contains("reveal")) return;
            if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return;
            el.classList.add("reveal");
            const parent = el.parentElement;
            const delay = parent ? Array.from(parent.children).indexOf(el) * 0.08 : 0;
            el.style.transitionDelay = `${delay}s`;
            elements.push(el);
        });
    });

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    elements.forEach(el => observer.observe(el));
}

function toggleTheme() {
    const html = document.documentElement;
    html.classList.add('theme-transition');
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    if (newTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
    }
    localStorage.setItem('hygia-theme', newTheme);

    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        btn.setAttribute('title', newTheme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');
    }

    window.setTimeout(() => html.classList.remove('theme-transition'), 500);
}

function initTheme() {
    const saved = localStorage.getItem('hygia-theme') || 'light';
    const html = document.documentElement;
    if (saved === 'dark') {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
    }

    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.setAttribute('aria-label', 'Basculer le mode sombre');
    btn.textContent = saved === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('title', saved === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');
    btn.addEventListener('click', toggleTheme);
    document.documentElement.insertBefore(btn, document.body);
}

function initWhatsApp() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'whatsapp-widget.css';
    document.head.appendChild(link);

    const number = document.body.dataset.whatsapp || '22300000000';
    const text = encodeURIComponent(document.body.dataset.whatsappMessage || `Bonjour Hygia, j'aimerais avoir plus d'informations.`);
    const a = document.createElement('a');
    a.id = 'whatsapp-widget';
    a.href = `https://wa.me/${number}?text=${text}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', 'Discuter sur WhatsApp');
    a.innerHTML = `<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M17.5 14.33c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.19.3-.74.97-.91 1.17-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.5.07-.77.37-.26.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.08 3.18 5.04 4.46 2.03.87 2.83.95 3.38.79.52-.14 1.12-.73 1.28-1.34.16-.61.16-1.14.11-1.25-.05-.1-.22-.16-.51-.3zM12.03 2C6.51 2 2.03 6.48 2.03 12c0 1.94.52 3.8 1.46 5.43l-.93 3.4 3.49-.92A9.95 9.95 0 0012.03 22c5.52 0 10-4.48 10-10S17.55 2 12.03 2z'/></svg>`;
    document.documentElement.insertBefore(a, document.body);
}

function initABTest() {
    const cta = document.querySelector('.hero a');
    if (!cta) return;

    const variants = [
        { variant: 'A', text: t('hero.cta') },
        { variant: 'B', text: tr('Découvrir les produits', 'Discover our products') }
    ];
    const chosen = variants[Math.floor(Math.random() * variants.length)];
    cta.textContent = chosen.text;

    fetch(`${BACKEND_URL}/api/ab/event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ experiment: 'hero-cta', variant: chosen.variant, type: 'impression' }),
        keepalive: true
    }).catch(() => {});

    cta.addEventListener('click', () => {
        fetch(`${BACKEND_URL}/api/ab/event`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ experiment: 'hero-cta', variant: chosen.variant, type: 'click' }),
            keepalive: true
        }).catch(() => {});
    });
}


document.addEventListener('DOMContentLoaded', async () => {

    initLang();
    initWhatsApp();
    initABTest();
    initPromoSystem();
    initPasswordToggles();
    initMobileMenu();
    initScrollReveal();
    await chargerProduits();

    if (document.getElementById("coupon-input")) {
        resetCouponUI();
    }

    const container = document.getElementById("product-container");

    const estAccueil = container && container.closest(".featured-products");
    const limite = estAccueil ? 4 : null;

    afficherProduits(produits, limite);
    afficherPanier();
    afficherPageProduit();
    mettreAJourCompteurPanier();
    initRechercheLive();
    mettreAJourNavCompte();
    initFormulairesAuth();
    await afficherPageCompte();

    const confNumero = document.getElementById("conf-numero");
    if (confNumero) {
        const params = new URLSearchParams(window.location.search);
        const numero = params.get("numero") || "—";
        const total = Number(params.get("total")) || 0;
        const methode = params.get("methode") || "—";
        const nom = params.get("nom") || "—";

        confNumero.textContent = numero;
        document.getElementById("conf-nom").textContent = nom;
        document.getElementById("conf-methode").textContent = methode;
        document.getElementById("conf-total").textContent = total.toLocaleString() + " FCFA";
    }

    // --- Filtres catalogue ---
    const rechercheNom = document.getElementById("recherche-nom") || document.getElementById("search-input");
    const filtresCategorie = document.querySelectorAll(".filter-categorie");
    const prixMin = document.getElementById("prix-min");
    const prixMax = document.getElementById("prix-max");
    const triSelect = document.getElementById("tri-select");
    const produitFilterButtons = document.querySelectorAll(".filter-box-btn");
    const resetBtn = document.getElementById("reset-filtres");

    // Pré-filtre depuis l'URL (?categorie= venant de l'accueil)
    const urlParams = new URLSearchParams(window.location.search);
    const categorieUrl = urlParams.get("categorie");
    if (categorieUrl && filtresCategorie.length > 0) {
        filtresCategorie.forEach(checkbox => {
            if (checkbox.value === categorieUrl) checkbox.checked = true;
        });
        appliquerFiltres(true);
    }

    if (rechercheNom) {
        const params = new URLSearchParams(window.location.search);
        const q = params.get("q");
        if (q) {
            rechercheNom.value = q;
            appliquerFiltres(true);
        }

        rechercheNom.addEventListener("input", () => appliquerFiltres(true));
    }

    filtresCategorie.forEach(checkbox => {
        checkbox.addEventListener("change", () => appliquerFiltres(true));
    });

    if (prixMin) prixMin.addEventListener("input", () => appliquerFiltres(true));
    if (prixMax) prixMax.addEventListener("input", () => appliquerFiltres(true));
    if (triSelect) triSelect.addEventListener("change", () => appliquerFiltres(false));
    produitFilterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            produitFilterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            appliquerFiltres();
        });
    });
    if (resetBtn) resetBtn.addEventListener("click", reinitialiserFiltres);

    // --- Clics globaux (ajout panier, +/-, suppression) ---
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-add-cart")) {
            const id = Number(e.target.dataset.id);
            ajouterAuPanier(id);

            const btn = e.target;
            btn.textContent = t("btn.added");
            btn.classList.add("added");
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = t("btn.add.cart");
                btn.classList.remove("added");
                btn.disabled = false;
            }, 2000);
        }

        if (e.target.classList.contains("btn-plus")) {
            const id = Number(e.target.dataset.id);
            changerQuantite(id, 1);
        }

        if (e.target.classList.contains("btn-moins")) {
            const id = Number(e.target.dataset.id);
            changerQuantite(id, -1);
        }

        if (e.target.classList.contains("btn-remove")) {
            const id = Number(e.target.dataset.id);
            retirerDuPanier(id);
        }
    });

    // --- Modal de paiement ---
    const btnPaiement = document.getElementById("btn-paiement");
    const modal = document.getElementById("modal-paiement");
    const closeModal = document.getElementById("close-modal");
    const paymentDetails = document.getElementById("payment-details");
    const zoneLivraison = document.getElementById("livraison-zone");

    if (zoneLivraison) {
        zoneLivraison.addEventListener("change", mettreAJourResumePanier);
    }

    if (btnPaiement) {
        const livraisonForm = document.getElementById("livraison-form");

        btnPaiement.addEventListener("click", () => {
            const panier = getPanier();
            if (panier.length === 0) {
                afficherToast("Votre panier est vide.", "error");
                return;
            }

            // Étape 1 : afficher le formulaire et changer le bouton en "Payer"
            if (livraisonForm && livraisonForm.style.display === "none") {
                livraisonForm.style.display = "block";
                livraisonForm.scrollIntoView({ behavior: "smooth" });
                btnPaiement.textContent = tr("Payer", "Pay");
                btnPaiement.dataset.etape = "payer";
                return;
            }

            // Étape 2 : valider le formulaire et ouvrir le modal
            if (!validerFormulaireLivraison()) {
                livraisonForm.scrollIntoView({ behavior: "smooth" });
                return;
            }

            modal.classList.add("active");
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.classList.remove("active");
            paymentDetails.classList.remove("active");
            paymentDetails.innerHTML = "";
            document.querySelectorAll(".payment-option").forEach(btn => btn.classList.remove("selected"));
        });
    }

    document.querySelectorAll(".payment-option").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".payment-option").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");

            const methode = btn.dataset.method;
            if (!["orange", "wave", "carte", "livraison"].includes(methode)) return;

            const total = getTotalPanier();

            paymentDetails.innerHTML = getDetailsPaiement(methode, total);
            paymentDetails.classList.add("active");

            const btnConfirmer = paymentDetails.querySelector(".btn-confirmer");
            if (btnConfirmer) {
                btnConfirmer.addEventListener("click", () => {
                    console.log("DEBUG: Bouton confirmer cliqué avec methode =", methode);
                    confirmerCommande(methode);
                });
            }
        });
    });

    const couponInput = document.getElementById("coupon-input");
    const couponButton = document.getElementById("coupon-button");
    const couponMessage = document.getElementById("coupon-message");

    if (couponButton && couponInput) {
        couponButton.addEventListener("click", async () => {
            const code = couponInput.value.trim();
            const normalise = code.toUpperCase();

            // Animation du bouton
            couponButton.classList.remove("coupon-button-anim");
            void couponButton.offsetWidth;
            couponButton.classList.add("coupon-button-anim");

            // On efface d'abord tout ancien code partenaire
            clearPartnerCoupon();
            clearAppliedCoupon();

            // Vérifier si c'est un code partenaire actif
            const validationPartenaire = await validerCodePartenaire(code);
            if (validationPartenaire.valide) {
                setPartnerCoupon(code, validationPartenaire.reduction);
                lastCouponFeedback = {
                    message: `Code partenaire ${normalise} appliqué : ${validationPartenaire.reduction}% de réduction + livraison gratuite.`,
                    type: "success"
                };
                afficherPanier();
                animerCouponApplique(true, true);
                return;
            }

            // Sinon fallback sur le code promo interne HYGIA
            const resultat = applyCoupon(code);
            lastCouponFeedback = {
                message: resultat.message,
                type: resultat.success ? "success" : "error"
            };
            if (!resultat.success) {
                clearAppliedCoupon();
            }
            afficherPanier();
            animerCouponApplique(resultat.success, resultat.success);
        });
    }

    function animerCouponApplique(success, animateDiscount) {
        const couponMessage = document.getElementById("coupon-message");
        const discountAmount = document.getElementById("discount-amount");

        if (couponMessage) {
            couponMessage.classList.remove("coupon-message-anim");
            void couponMessage.offsetWidth;
            couponMessage.classList.add("coupon-message-anim");
            setTimeout(() => couponMessage.classList.remove("coupon-message-anim"), 420);
        }

        if (animateDiscount && discountAmount) {
            discountAmount.classList.remove("discount-anim");
            void discountAmount.offsetWidth;
            discountAmount.classList.add("discount-anim");
            setTimeout(() => discountAmount.classList.remove("discount-anim"), 520);
        }
    }

    appliquerTraductions();

    if (couponInput) {
        couponInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                couponButton?.click();
            }
        });

        window.addEventListener("pagehide", resetCouponUI);
        window.addEventListener("pageshow", (event) => {
            if (event.persisted) {
                resetCouponUI();
                afficherPanier();
            }
        });
    }

});

const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        showSyphaLoader("Envoi de votre message...");
        const data = new FormData(form);
        try {
            const res = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: { "Accept": "application/json" }
            });
            if (res.ok) {
                form.reset();
                document.getElementById("form-success").style.display = "block";
            } else {
                afficherToast("Erreur lors de l'envoi. Contactez-nous sur WhatsApp.", "error");
            }
        } catch {
            afficherToast("Erreur réseau. Contactez-nous sur WhatsApp au +223 72 08 09 37.", "error");
        } finally {
            hideSyphaLoader();
        }
    });
}