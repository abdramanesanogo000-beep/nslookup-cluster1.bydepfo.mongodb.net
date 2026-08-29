<?php
/**
 * Configuration de base de WordPress pour Hygia Checkout
 *
 * Ce fichier contient les configurations suivantes :
 *
 * * Paramètres MySQL
 * * Clés secrètes
 * * Préfixe de table
 * * ABSPATH
 *
 * @package WordPress
 */

// ** Paramètres MySQL - Ces informations seront à compléter après installation ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'hygia_checkout' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'if0_42759273' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'IPnLDoIEKdqtKN' );

/** Adresse de l'hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données. */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d'authentification et salage.
 *
 * Remplacez les valeurs par défaut par des clés uniques.
 * Vous pouvez générer des clés via {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'A*}OzVYXS+nxd+d6%-fK29y71XH|(1--or=4b29}*phj8Bywb*N+N7gWEpr>l)h;');
define('SECURE_AUTH_KEY',  '`f`U+9RPRX)Q8MM/P<8g`GK#Nt2|%|_-ThTigJrWZ9Dr}Uv>o A`Q3wo<-jd``@>');
define('LOGGED_IN_KEY',    'BSihglQR+SP*S)cBaYzk2m0pYH[1qv#zOMTO@Y$7T)`rVa+=U|Gjnd(}<2.V.I4A');
define('NONCE_KEY',        'm?UeiU!XWJ|q-{IA-ErnN|EDbEt&/AC&Q3T%suORGg7Kf*Y:JNR+,udpFzP5of>j');
define('AUTH_SALT',        '}E`@+9|!&-T2~/q>h6$2NwH}uh. ,rwH%Z&98Ou$BLm7TsI2uy=3<1aVFW3O$+Tn');
define('SECURE_AUTH_SALT', 'a}NyMg<pqq6Lu&R=xfGr-k|cp!wsS~)+jzLW%1>=]%&;lRYDJ=b:L*p_o$>L[+Bu');
define('LOGGED_IN_SALT',   '_X5cS&-<,HJnOBB;x5EwYsz~3`4kW7]cvVy)+bl+uqm9*IU3Z+-O2M:6Y_Mwf x5');
define('NONCE_SALT',       'q1fX`+0*[}cSFjy7H>*9&9AK*7+_[9?wU}7h2$}JNChRVT*K3Kp+!U1&4iFbPfqd');
/**#@-*/

/**
 * Préfixe de table pour les tables de WordPress.
 *
 * Vous pouvez avoir plusieurs installations dans une seule base de données
 * si vous donnez à chacune un préfixe unique.
 * N'utilisez que des chiffres, des lettres et des tirets !
 */
$table_prefix = 'hygia_';

/**
 * Pour les développeurs : WordPress en mode débogage.
 *
 * Passez cette valeur à « true » pour activer l'affichage des avertissements
 * pendant le développement.
 *
 * Il est fortement recommandé aux développeurs de sites et de plugins
 * d'utiliser WP_DEBUG dans leur environnement de développement.
 *
 * Pour plus d'informations sur les autres constantes qui peuvent être utilisées
 * pour le débogage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* C'est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Réglage des variables WordPress et de ses fichiers inclus. */
require_once ABSPATH . 'wp-settings.php';