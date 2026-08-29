<?php
/**
 * API pour recevoir les données du panier depuis le site principal
 *
 * Cette API permet de créer une commande WooCommerce à partir des données
 * envoyées par le panier JavaScript du site principal.
 *
 * @package Hygia_Checkout
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Protection contre l'accès direct
}

/**
 * Enregistrer l'endpoint API pour le panier
 */
function hygia_checkout_register_cart_api() {
    register_rest_route( 'hygia-checkout/v1', '/cart', array(
        'methods' => 'POST',
        'callback' => 'hygia_checkout_handle_cart_data',
        'permission_callback' => '__return_true',
    ) );
}
add_action( 'rest_api_init', 'hygia_checkout_register_cart_api' );

/**
 * Traiter les données du panier
 */
function hygia_checkout_handle_cart_data( $request ) {
    $params = $request->get_json_params();
    
    // Validation des données
    if ( empty( $params['products'] ) || ! is_array( $params['products'] ) ) {
        return new WP_Error( 'invalid_data', 'Les données du panier sont invalides', array( 'status' => 400 ) );
    }
    
    $products = $params['products'];
    $customer_info = isset( $params['customer'] ) ? $params['customer'] : array();
    
    // Vider le panier WooCommerce actuel
    WC()->cart->empty_cart();
    
    // Ajouter les produits au panier WooCommerce
    foreach ( $products as $product_data ) {
        $product_id = isset( $product_data['id'] ) ? intval( $product_data['id'] ) : 0;
        $quantity = isset( $product_data['quantity'] ) ? intval( $product_data['quantity'] ) : 1;
        
        if ( $product_id > 0 ) {
            // Vérifier si le produit existe
            $product = wc_get_product( $product_id );
            if ( $product ) {
                WC()->cart->add_to_cart( $product_id, $quantity );
            }
        }
    }
    
    // Pré-remplir les informations du client si disponibles
    if ( ! empty( $customer_info ) ) {
        foreach ( $customer_info as $key => $value ) {
            // Mapper les champs du formulaire
            $woo_key = '';
            if ( $key === 'nom' ) $woo_key = 'billing_first_name';
            elseif ( $key === 'prenom' ) $woo_key = 'billing_last_name';
            elseif ( $key === 'email' ) $woo_key = 'billing_email';
            elseif ( $key === 'telephone' ) $woo_key = 'billing_phone';
            elseif ( $key === 'adresse' ) $woo_key = 'billing_address_1';
            elseif ( $key === 'ville' ) $woo_key = 'billing_city';
            elseif ( $key === 'pays' ) $woo_key = 'billing_country';
            
            if ( $woo_key ) {
                WC()->session->set( $woo_key, $value );
            }
        }
    }
    
    // Retourner l'URL du checkout
    $checkout_url = wc_get_checkout_url();
    
    return rest_ensure_response( array(
        'success' => true,
        'checkout_url' => $checkout_url,
        'cart_count' => WC()->cart->get_cart_contents_count(),
        'cart_total' => WC()->cart->get_total(),
    ) );
}

/**
 * Endpoint pour créer un produit dynamique (pour les tests)
 */
function hygia_checkout_register_product_api() {
    register_rest_route( 'hygia-checkout/v1', '/product', array(
        'methods' => 'POST',
        'callback' => 'hygia_checkout_create_product',
        'permission_callback' => '__return_true',
    ) );
}
add_action( 'rest_api_init', 'hygia_checkout_register_product_api' );

/**
 * Créer un produit WooCommerce
 */
function hygia_checkout_create_product( $request ) {
    $params = $request->get_json_params();
    
    $name = isset( $params['name'] ) ? sanitize_text_field( $params['name'] ) : 'Produit test';
    $price = isset( $params['price'] ) ? floatval( $params['price'] ) : 0;
    $description = isset( $params['description'] ) ? sanitize_textarea_field( $params['description'] ) : '';
    
    $product = new WC_Product_Simple();
    $product->set_name( $name );
    $product->set_regular_price( $price );
    $product->set_description( $description );
    $product->set_status( 'publish' );
    $product->set_catalog_visibility( 'hidden' ); // Cacher du catalogue
    $product->save();
    
    return rest_ensure_response( array(
        'success' => true,
        'product_id' => $product->get_id(),
    ) );
}
