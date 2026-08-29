<?php
/**
 * Fonctions du thème Hygia Checkout
 *
 * @package Hygia_Checkout
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Protection contre l'accès direct
}

/**
 * Setup du thème
 */
function hygia_checkout_setup() {
    // Ajouter le support pour le logo
    add_theme_support( 'custom-logo' );
    
    // Ajouter le support pour le titre du site
    add_theme_support( 'title-tag' );
    
    // Désactiver les styles WooCommerce par défaut
    add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );
}
add_action( 'after_setup_theme', 'hygia_checkout_setup' );

/**
 * Enqueue les styles et scripts
 */
function hygia_checkout_enqueue_scripts() {
    wp_enqueue_style( 'hygia-checkout-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'hygia_checkout_enqueue_scripts' );

/**
 * Header personnalisé Hygia
 */
function hygia_checkout_header() {
    ?>
    <header class="hygia-header">
        <div class="container">
            <a href="<?php echo home_url(); ?>" class="hygia-logo">
                <?php if ( has_custom_logo() ) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    Hygia
                <?php endif; ?>
            </a>
            <nav>
                <a href="<?php echo home_url(); ?>" style="color: white; text-decoration: none;">Retour au site</a>
            </nav>
        </div>
    </header>
    <?php
}
add_action( 'woocommerce_before_checkout_form', 'hygia_checkout_header', 5 );

/**
 * Footer personnalisé Hygia
 */
function hygia_checkout_footer() {
    ?>
    <footer class="hygia-footer">
        <div class="container">
            <p>&copy; <?php echo date( 'Y' ); ?> Hygia. Tous droits réservés.</p>
        </div>
    </footer>
    <?php
}
add_action( 'woocommerce_after_checkout_form', 'hygia_checkout_footer', 20 );

/**
 * Supprimer les éléments WooCommerce non nécessaires
 */
function hygia_checkout_remove_woocommerce_elements() {
    // Supprimer le breadcrumb
    remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
    
    // Supprimer la sidebar
    remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );
}
add_action( 'init', 'hygia_checkout_remove_woocommerce_elements' );

/**
 * Personnaliser le titre de la page checkout
 */
function hygia_checkout_page_title( $title ) {
    if ( is_checkout() ) {
        $title = 'Finaliser votre commande';
    }
    return $title;
}
add_filter( 'the_title', 'hygia_checkout_page_title' );

/**
 * Ajouter les champs personnalisés pour le checkout
 */
function hygia_checkout_add_custom_fields( $fields ) {
    // Ajouter un champ pour le numéro de téléphone requis
    $fields['billing']['billing_phone']['required'] = true;
    
    return $fields;
}
add_filter( 'woocommerce_checkout_fields', 'hygia_checkout_add_custom_fields' );

/**
 * Rediriger vers la page d'accueil après commande réussie
 */
function hygia_checkout_redirect_after_order( $order_id ) {
    $order = wc_get_order( $order_id );
    
    // Rediriger vers la page de confirmation du site principal
    $redirect_url = home_url( '/../../commande-confirmee.html?order_id=' . $order_id );
    wp_redirect( $redirect_url );
    exit;
}
add_action( 'woocommerce_thankyou', 'hygia_checkout_redirect_after_order' );

/**
 * Désactiver l'inscription forcée au checkout
 */
add_filter( 'woocommerce_checkout_signup_enabled', '__return_false' );

/**
 * Forcer le checkout pour les visiteurs (pas besoin de compte)
 */
add_filter( 'woocommerce_enable_guest_checkout', '__return_true' );

/**
 * Désactiver la création de compte automatique
 */
add_filter( 'woocommerce_registration_generate_password', '__return_false' );

/**
 * Inclure le fichier API pour le panier
 */
require_once get_template_directory() . '/api-cart.php';
