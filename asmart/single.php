<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>
    <div id="primary" class="content-area  ">
        <div class="bredscrumb">
            <h1 class="page-title-main">
                <?php echo get_the_title(); ?>
            </h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                    <div class="news-block-detail">
                        <?php
                        while (have_posts()) : the_post();
                            echo '<img class="single-news-image"  src="' . wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'full')[0] . '"
                                                 alt="' . get_the_title($post_id) . '"/>';
                            the_content();

                        endwhile;
                        ?>

                    </div>
                </div>
            </div>
        </div>

    </div>


<?php get_footer();
