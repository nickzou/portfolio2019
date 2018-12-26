<?php
 
add_filter('acf/settings/save_json', 'portfolio2019_acf_local_json_save');
 
function portfolio2019_acf_local_json_save( $path ) {
    
    // update path
    $path = get_stylesheet_directory() . '/acf-json';
    
    
    // return
    return $path;
    
}