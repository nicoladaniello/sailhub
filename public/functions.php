<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// require __DIR__ . '/vendor/autoload.php';


/**
 * Pieter Goosen writes awesome code
 */
add_filter( 'register_post_type_args', 'make_wptravel_itineraries_show_in_rest' , 10, 2 );
add_filter( 'register_taxonomy_args', 'make_wptravel_destinations_show_in_rest' , 10, 2 );

function make_wptravel_itineraries_show_in_rest( $args, $post_type ){
 if ( 'itineraries' === $post_type ) {

    $args['show_in_rest'] = true;
    $args['rest_base'] = 'itineraries';

 }
  return $args;
}


function make_wptravel_destinations_show_in_rest( $args, $taxonomy_name ){
    if ( 'travel_locations' === $taxonomy_name ) {
   
       $args['show_in_rest'] = true;
       $args['rest_base'] = 'destinations';
   
    }
     return $args;
   }







function ws_register_images_field() {
    register_rest_field( 
        'travel_locations',
        'images',
        array(
            'get_callback'    => 'ws_get_images_urls',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}

add_action( 'rest_api_init', 'ws_register_images_field' );

function ws_get_images_urls( $object, $field_name, $request ) {
    $medium = wp_get_attachment_image_src( get_post_thumbnail_id( $object->id ), 'medium' );
    $medium_url = $medium['0'];

    $large = wp_get_attachment_image_src( get_post_thumbnail_id( $object->id ), 'large' );
    $large_url = $large['0'];

    return array(
        'medium' => $medium_url,
        'large'  => $large_url,
    );
}