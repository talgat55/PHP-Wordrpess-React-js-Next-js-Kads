<?php
/*
* Require Image resize
*/
load_theme_textdomain('light', get_template_directory() . '/languages');

/*
* Register nav menu
*/
if (function_exists('register_nav_menus')) {

    $menu_arr = array(
        'top_menu' => 'Топ Меню',
        'footer_one_menu' => 'Футер  Меню 1',
        'footer_two_menu' => 'Футер Меню 2'
    );


    register_nav_menus($menu_arr);


}


/*
* Add Feature Imagee
**/
add_theme_support('post-thumbnails');
add_image_size( 'product', 260, 200, false );
add_image_size( 'event-img', 260, 110, false);
add_image_size( 'news-img', 400, 250, false);
add_image_size( 'news-img-recent', 278, 80, true);
add_image_size( 'partners-img', 216, 97, false);
add_image_size( 'history-img', 266, 165, true);
add_image_size( 'administration-img', 330, 310, true);




/*
*  Register Post Type Scientific work
*/

add_action('init', 'post_type_smionas');

function post_type_smionas()
{
    $labels = array(
        'name' => 'СМИ о нас',
        'singular_name' => 'СМИ о нас',
        'all_items' => 'СМИ о нас',
        'menu_name' => 'СМИ о нас' // ссылка в меню в админке
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'menu_position' => 5,
        'has_archive' => true,
        'query_var' => "smionas",
        'supports' => array(
            'title',
            'editor',
            'thumbnail'
        )
    );
    register_post_type('smionas', $args);
}

/*
*  Register Post Type Settings
*/
if (function_exists('acf_add_options_page')) {

    // Let's add our Options Page
    acf_add_options_page(array(
        'page_title' => 'Настройки Темы',
        'menu_title' => 'Настройки Темы',
        'menu_slug' => 'theme-options',
        'capability' => 'edit_posts'
    ));


}

