<?php
/**
 * Template principal du thème Hygia Checkout
 *
 * @package Hygia_Checkout
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Protection contre l'accès direct
}
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php
// Si c'est la page checkout, afficher le contenu WooCommerce
if ( is_checkout() ) {
    woocommerce_content();
} else {
    // Sinon, afficher le contenu standard
    while ( have_posts() ) {
        the_post();
        the_content();
    }
}
?>

<?php wp_footer(); ?>
</body>
</html>
