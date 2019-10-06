<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

    <div id="primary" class="content-area  page-collection ">

        <div class="container">
            <div class="row flex">
                <div class="col-sm-4 col-xs-12   ">
                    <div class="background lazy   right"
                         data-src="<?php echo get_theme_file_uri('/assets/images/bg-collection.jpg') ?>"></div>
                    <h1 class="sub-title  left">
                        404
                    </h1>


                </div>
                <div class="col-sm-8 col-xs-12   ">
                    <div class="content">
                        <p class="error-page-text">
                        <?php _e('  Добро пожаловать на страницу 404! Вы находитесь здесь, потому что ввели адрес страницы, которая уже не существует или была перемещена по другому адресу ', 'light') ?>
                        </p>
                    </div>

                </div>


            </div>

        </div>
        <?php get_template_part('inc/form'); ?>
    </div>
<?php get_footer();
