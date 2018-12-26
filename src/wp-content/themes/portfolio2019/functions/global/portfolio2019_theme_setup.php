<?php
    function portfolio2019_theme_setup() {
        register_nav_menus(
            array(
                'header' => __('Header Menu')
            )
        );

        add_theme_support('post-thumbnails');
        add_image_size('hero-background-size-4k', 3840, 2916, true);
        add_image_size('hero-background-size-hd', 1920, 1458, true);
        add_image_size('hero-background-size-large', 1440, 1458, true);
        add_image_size('hero-background-size-tablet', 768, 1382, true);
        add_image_size('hero-background-size-phablet', 414, 994, true);
        add_image_size('section-background-size-4k', 2560, 2916, true);
        add_image_size('section-background-size-hd', 1280, 1458, true);
        add_image_size('section-background-size-large', 960, 1458, true);
        add_image_size('section-background-size-tablet', 768, 1024, true);
        add_image_size('section-background-size-phablet', 414, 736, true);

    }

    add_action('after_setup_theme', 'portfolio2019_theme_setup');