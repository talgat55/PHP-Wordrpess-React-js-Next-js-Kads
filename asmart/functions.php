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
add_image_size( 'news_block_img', 249, 260, true);
add_image_size( 'cert_img', 250, 347, true);
add_image_size( 'team_img', 269, 308, true);




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
        'capability' => 'edit_posts',
        'post_id'    => 'theme-options'
    ));


}


add_filter('rest_endpoints', function ($routes) {
    foreach (array('teams') as $type) {
        if (!($route =& $routes['/wp/v2/' . $type])) {
            continue;
        }

        // Allow ordering by meta values
        $route[0]['args']['orderby']['enum'][] = 'custom_sort';

        // Allow only specific meta keys
        $route[0]['args']['meta_key'] = array(
            'description'       => 'The meta key to query.',
            'type'              => 'string',
            'enum'              => ['custom_sort'],
            'validate_callback' => 'rest_validate_request_arg',
        );
    }
    return $routes;
}, 10, 1);

// Manipulate query
add_filter('rest_teams_query', function ($args, $request) {
    $order_key = $request->get_param('orderby');
    if (!empty($order_key) && $order_key === 'custom_sort') {
        $args['meta_key'] = $order_key;
    }

    return $args;
}, 10, 2);



add_action( 'rest_api_init', function () {
    register_rest_route( 'custom/v1', '/post-count', array(
        'methods' => 'GET',
        'callback' => 'countPost',
    ) );
} );


function countPost() {
    return wp_count_posts();
}



add_action( 'admin_enqueue_scripts', 'load_admin_styles' );
function load_admin_styles() {
    echo '
        <style>
            #preview-action{
                display: none!important;
            }
        </style> 
    ';
}

//
//function wp_admin_bar_site_menu( $wp_admin_bar ) {
//    // Don't show for logged out users.
//    if ( ! is_user_logged_in() ) {
//        return;
//    }
//
//    // Show only when the user is a member of this site, or they're a super admin.
//    if ( ! is_user_member_of_blog() && ! current_user_can( 'manage_network' ) ) {
//        return;
//    }
//
//    $blogname = get_bloginfo( 'name' );
//
//    if ( ! $blogname ) {
//        $blogname = preg_replace( '#^(https?://)?(www.)?#', '', get_home_url() );
//    }
//
//    if ( is_network_admin() ) {
//        /* translators: %s: Site title. */
//        $blogname = sprintf( __( 'Network Admin: %s' ), esc_html( get_network()->site_name ) );
//    } elseif ( is_user_admin() ) {
//        /* translators: %s: Site title. */
//        $blogname = sprintf( __( 'User Dashboard: %s' ), esc_html( get_network()->site_name ) );
//    }
//
//    $title = wp_html_excerpt( $blogname, 40, '&hellip;' );
//
//
//    // Create submenu items.
//
//    if ( is_admin() ) {
//        // Add an option to visit the site.
//        $wp_admin_bar->add_node(
//            array(
//                'parent' => 'site-name',
//                'id'     => 'view-site',
//                'title'  => __( 'Visit Site' ),
//                'href'   => 'http://zemkad55.ru/',
//            )
//        );
//
//
//    }
//}