<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>


    <div id="primary" class="content-area  page-collection  page-main">

        <div class="container">
            <div class="row flex">
                <div class="col-sm-4 col-xs-12   ">
                    <div class="background lazy   right"
                         data-src="<?php echo get_theme_file_uri('/assets/images/bg-collection.jpg') ?>"></div>
                    <h1 class="sub-title  left">
                        <?php printf( __( 'Результаты поиска: %s', 'light' ), '<span>' . get_search_query() . '</span>' ); ?>
                    </h1>


                </div>
                <div class="col-sm-8 col-xs-12   ">
                    <div class="content">
                        <ul class="list-search-result">
                            <?php
                            if ( have_posts() ) :
                                /* Start the Loop */
                                while ( have_posts() ) : the_post();


                                    echo '
                                    <li>  
                                    <a href="'.get_the_permalink().'">
                                        '.get_the_title().'
                                    </a>
                                    </li>
			                            ';

                                endwhile; // End of the loop.



                            else :
                                echo '<p>По данномму запросу ничего не найдено</p>';
                            endif;
                            ?>
                        </ul>
                    </div>

                </div>


            </div>

        </div>
        <?php get_template_part('inc/form'); ?>
    </div>
<?php get_footer();
