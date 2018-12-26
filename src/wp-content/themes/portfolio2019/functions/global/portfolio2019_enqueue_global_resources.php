<?php

function portfolio2019_enqueue_global_resources() {
  wp_enqueue_style('admin-styles');
  wp_enqueue_script('admin');
}

add_action('wp_enqueue_scripts', 'portfolio2019_enqueue_global_resources');
