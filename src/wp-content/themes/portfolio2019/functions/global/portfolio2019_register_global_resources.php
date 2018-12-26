<?php

function portfolio2019_register_global_resources() {
  wp_register_script('admin', get_template_directory_uri() . '/js/admin.js', array() , 1, true);
  wp_register_style('admin-styles', get_template_directory_uri() . '/css/admin.css', array(), '1.0.0', 'all');
}

add_action('init', 'portfolio2019_register_global_resources');