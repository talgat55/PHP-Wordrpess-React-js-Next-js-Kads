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
*  Register Post Type Sliders
*/

add_action('init', 'post_type_sliders');

function post_type_sliders()
{
    $labels = array(
        'name' => 'Слайдер',
        'singular_name' => 'Слайдер',
        'all_items' => 'Слайдер',
        'menu_name' => 'Слайдер' // ссылка в меню в админке
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'menu_position' => 5,
        'has_archive' => true,
        'show_in_rest' => true,
        'query_var' => "slider",
        'supports' => array(
            'title',
            'editor',
            'thumbnail'
        )
    );
    register_post_type('slider', $args);
}



/*
*  Register Post Type Services
*/

add_action('init', 'post_type_services');

function post_type_services()
{
    $labels = array(
        'name' => 'Услуги',
        'singular_name' => 'Услуги',
        'all_items' => 'Услуги',
        'menu_name' => 'Услуги' // ссылка в меню в админке
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'menu_position' => 5,
        'has_archive' => true,
        'show_in_rest' => true,
        'query_var' => "services",
        'supports' => array(
            'title',
            'editor',
            'thumbnail'
        )
    );
    register_post_type('services', $args);
}

/*
*  Register Post Type Team
*/

add_action('init', 'post_type_team');

function post_type_team()
{
    $labels = array(
        'name' => 'Наша команда',
        'singular_name' => 'Наша команда',
        'all_items' => 'Наша команда',
        'menu_name' => 'Наша команда' // ссылка в меню в админке
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'menu_position' => 5,
        'has_archive' => true,
        'show_in_rest' => true,
        'query_var' => "teams",
        'supports' => array(
            'title',
            'editor',
            'thumbnail'
        )
    );
    register_post_type('teams', $args);
}


/*
*  Register Post Type Services
*/

add_action('init', 'post_type_promo');

function post_type_promo()
{
    $labels = array(
        'name' => 'Акции',
        'singular_name' => 'Акции',
        'all_items' => 'Акции',
        'menu_name' => 'Акции' // ссылка в меню в админке
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'menu_position' => 5,
        'has_archive' => true,
        'show_in_rest' => true,
        'query_var' => "promo",
        'supports' => array(
            'title',
            'editor',
            'thumbnail'
        )
    );
    register_post_type('promo', $args);
}


/*
*  Register Post Type Certs
*/

add_action('init', 'post_type_certs');

function post_type_certs()
{
    $labels = array(
        'name' => 'Сертификаты',
        'singular_name' => 'Сертификаты',
        'all_items' => 'Сертификаты',
        'menu_name' => 'Сертификаты' // ссылка в меню в админке
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'menu_position' => 5,
        'has_archive' => true,
        'show_in_rest' => true,
        'query_var' => "certs",
        'supports' => array(
            'title',
            'editor',
            'thumbnail'
        )
    );
    register_post_type('certs', $args);
}

/*
*  Register Post Type Reviews
*/

add_action('init', 'post_type_reviews');

function post_type_reviews()
{
    $labels = array(
        'name' => 'Отзывы',
        'singular_name' => 'Отзывы',
        'all_items' => 'Отзывы',
        'menu_name' => 'Отзывы' // ссылка в меню в админке
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'menu_position' => 5,
        'has_archive' => true,
        'show_in_rest' => true,
        'query_var' => "reviews",
        'supports' => array(
            'title',
            'editor',
            'thumbnail'
        )
    );
    register_post_type('reviews', $args);
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
