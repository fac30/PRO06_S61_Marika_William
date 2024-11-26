<?php
function twentytwentyfive_child_enqueue_styles()
{
    // Enqueue the parent theme's style
    wp_enqueue_style('twentytwentyfive-style', get_template_directory_uri() . '/style.css');

    // Enqueue the child theme's style
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('twentytwentyfive-style'), '1.0');
}
add_action('wp_enqueue_scripts', 'twentytwentyfive_child_enqueue_styles');
