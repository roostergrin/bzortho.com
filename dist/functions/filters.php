<?php

remove_filter('the_content', 'wpautop');
remove_filter( 'the_excerpt', 'wpautop' );

//Remove WPAUTOP from ACF TinyMCE Editor
function acf_wysiwyg_remove_wpautop() {
  remove_filter('acf_the_content', 'wpautop' );
}
add_action('acf/init', 'acf_wysiwyg_remove_wpautop');

// suppress update emails
add_filter( 'allow_dev_auto_core_updates', '__return_false' );
add_filter( 'allow_minor_auto_core_updates', '__return_true' );
add_filter( 'allow_major_auto_core_updates', '__return_true' );
add_filter( 'auto_core_update_send_email', '__return_false' );

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');
