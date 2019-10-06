<?php


get_header(); ?>
    <h1 class="hide-title"><?php _e('Главная страница', 'light'); ?></h1>
    <div class="main">
        <section class="about">

            <div class="clearfix">
                <div class="content-block">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4 col-xs-12">
                                <div class="background lazy   right"
                                     data-src="<?php echo get_theme_file_uri('/assets/images/bg2.jpg') ?>"></div>
                                <div class="content">
                                    <h2 class="sub-title  left">

                                        <?php _e('наш музей', 'light'); ?>
                                    </h2>
                                    <div class="about">

                                        <?php if (get_locale() == 'en_US') {  ?>
                                            <?= get_field('text_about_home_en', 'option'); ?>
                                        <?php }else{  ?>
                                            <?= get_field('text_about_home', 'option'); ?>
                                        <?php } ?>
                                    </div>


                                    <a href="<?=changeUrls('about');?>" class="link-about" title="Перейти на страницу Нашего музея">
                                        <img src="<?php echo get_theme_file_uri('/assets/images/about-img.jpg') ?>"
                                             alt="картинка"/>

                                    </a>
                                </div>

                            </div>
                            <div class="col-sm-8 col-xs-12 relative">
                                <div class="content">
                                    <div class="images clearfix">
                                        <?php
                                        foreach (get_field('images_about_home', 'option') as $value) {
                                            echo '<img class="lazy"  src="' . get_theme_file_uri("/assets/images/sprite.jpg") . '"  data-src="' . $value["url"] . '" alt="изображение" />';

                                        }
                                        ?>
                                    </div>
                                    <div class="description">
                                        <?php if (get_locale() == 'en_US') {  ?>
                                            <?= get_field('text2_about_home_en', 'option'); ?>
                                        <?php }else{  ?>
                                            <?= get_field('text2_about_home', 'option'); ?>
                                        <?php } ?>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>

        <section class="events">

            <div class="clearfix">
                <div class="content-block">

                    <div class="container">
                        <div class="row flex">
                            <div class="mobile-block  col-xs-12">
                                <div class="background lazy"
                                     data-src="<?php echo get_theme_file_uri('/assets/images/bg3.jpg') ?>"></div>
                                <div class="content text-right">
                                    <h2 class="sub-title  right">
                                        <?php _e('события', 'light'); ?>
                                    </h2>
                                    <div class="clear"></div>
                                    <a href="<?=changeUrls('events');?>" class="link-events" title="Перейти на страницу Событий">

                                        <?php _e(' Читать больше', 'light'); ?>
                                    </a>
                                </div>

                            </div>
                            <div class="col-sm-9 col-xs-12 relative">
                                <div class="content">
                                    <ul class="list-events clearfix relative">
                                        <?php

                                        $arg = array(
                                            'posts_per_page' => 2,
                                            'post_type' => 'events',
                                            'status' => 'publish'
                                        );

                                        $the_query = new WP_Query($arg);
                                        $i = 0;
                                        while ($the_query->have_posts()) :
                                            $the_query->the_post();
                                            set_query_var('count', $i);
                                            get_template_part('inc/item', 'event');

                                            $i++;
                                        endwhile;
                                        wp_reset_query();
                                        ?>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-12 hidden-mobile">
                                <div class="background lazy"
                                     data-src="<?php echo get_theme_file_uri('/assets/images/bg3.jpg') ?>"></div>
                                <div class="content text-right">
                                    <h2 class="sub-title  right">
                                        <?php _e('события', 'light'); ?>
                                    </h2>
                                    <div class="clear"></div>
                                    <a href="<?=changeUrls('events');?>" class="link-events" title="Перейти на страницу Событий">

                                        <?php _e(' Читать больше', 'light'); ?>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
        <section class="exposure">

            <div class="clearfix">
                <div class="content-block">
                    <div class="container">
                        <div class="row flex">
                            <div class="col-sm-4 col-xs-12">
                                <div class="background lazy   right"
                                     data-src="<?php echo get_theme_file_uri('/assets/images/bg4.jpg') ?>"></div>
                                <div class="content vertical-align left text-left">
                                    <h2 class="sub-title  left">

                                        <?php _e('Экспозиции', 'light'); ?>
                                    </h2>


                                </div>

                            </div>
                            <div class="col-sm-8 col-xs-12 relative">
                                <div class="content">
                                    <ul class="list-exposures clearfix relative">
                                        <?php

                                        $arg = array(
                                            'posts_per_page' => 3,
                                            'post_type' => 'exposure',
                                            'status' => 'publish'
                                        );

                                        $the_query = new WP_Query($arg);
                                        $i = 0;
                                        while ($the_query->have_posts()) :
                                            $the_query->the_post();
                                            $post_id        = $the_query->post->ID;
                                            $imagesArray    = get_field('gallery_explosure', $post_id);
                                            $typeArray      = get_field('type_explosure', $post_id);
                                            switch ($typeArray):
                                                case 'barracks':
                                                    $redyTopblock = __('Казарма Омского острога', 'light');
                                                    break;
                                                case 'dostsib':
                                                    $redyTopblock = __('Достоевский и Сибирь', 'light');
                                                    break;
                                                case 'writeomsk':
                                                    $redyTopblock = __('Писатели - Омичи', 'light');
                                                    break;
                                                default:
                                                    $redyTopblock = '';
                                                    break;
                                            endswitch;

                                                            $redyArrLightGallery ='';
                                                            foreach ($imagesArray as  $key => $lightValue){

                                                                $separator =  ($key  != '0') ?  ','  : '';
                                                                $redyArrLightGallery .= $separator . $lightValue['url'];
                                                            }

                                            ?>


                                            <li class="item  col-sm-4 col-xs-12" data-images="<?= $redyArrLightGallery; ?>">
                                                <div class="top-block">

                                                    <img src="<?php echo get_theme_file_uri('/assets/images/exposure-icon.png') ?>"
                                                         alt="Иконка"/>
                                                    <h4 class="title">
                                                        <?= $redyTopblock; ?>
                                                    </h4>
                                                </div>

                                                <div class="carousel-exposure">
                                                    <?php
                                                    foreach ($imagesArray as $item) {
                                                        echo '<div class="item-carousel lazy" data-src="' . $item["url"] . '"> 
                                                                        <div  class="link-zoom-expouse-block" >
                                                                        <a href="#" class="link-zoom-expouse"    >
                                                                        <img  src="'.get_theme_file_uri("/assets/images/search.png").'"    />
                                                                                <p>
                                        
                                                                                    '.__("Увеличить", "light").'
                                                                                </p></a>
                                                                        </div>
                                                                        
                                                                </div>';
                                                    }
                                                    ?>
                                                </div>
                                            <?php  if(count($imagesArray) > 1 ){ ?>
                                                <div class="custom-pagination">
                                                    <div class="arrow">
                                                        <a href="#" class="prev  disable">
                                                            <img class="icon"
                                                                 src="<?php echo get_theme_file_uri('/assets/images/exposure-arrow.png') ?>"
                                                                 alt="Иконка"/>
                                                        </a>
                                                    </div>
                                                    <div class="paginaiton">
                                                        <span>1</span>/<?= count($imagesArray); ?>
                                                    </div>
                                                    <div class="arrow">
                                                        <a href="#" class="next">
                                                            <img class="icon"
                                                                 src="<?php echo get_theme_file_uri('/assets/images/exposure-arrow.png') ?>"
                                                                 alt="Иконка"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            <?php  } ?>

                                            </li>

                                            <?php
                                            $i++;
                                        endwhile;
                                        wp_reset_query();
                                        ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
        <section class="exhibitions">

            <div class="clearfix">
                <div class="content-block">
                    <div class="container">
                        <div class="row flex">
                            <div class="col-sm-4 col-xs-12 mobile-block">
                                <div class="background lazy   left"
                                     data-src="<?php echo get_theme_file_uri('/assets/images/bg5.jpg') ?>"></div>
                                <div class="content vertical-align right">
                                    <h2 class="sub-title text-right  right">

                                        <?php _e('Действующие<br>выставки', 'light'); ?>
                                    </h2>

                                    <a href="<?=changeUrls('exhibitions');?>" class="link-events" title="Перейти на страницу выставок">

                                        <?php _e('Показать еще', 'light'); ?>

                                    </a>


                                </div>
                            </div>
                            <div class="col-sm-8 col-xs-12 relative">
                                <div class="content">
                                    <ul class="list-exposures clearfix relative">
                                        <?php

                                        $arg = array(
                                            'posts_per_page' => 4,
                                            'post_type' => 'exhibitions',
                                            'status' => 'publish'
                                        );

                                        $the_query = new WP_Query($arg);
                                        $i = 0;
                                        while ($the_query->have_posts()) :
                                            $the_query->the_post();
                                            $post_id = $the_query->post->ID;
                                            $imagesArray = get_field('gallery_exhibitions', $post_id);


                                            ?>
                                            <li class="item  col-sm-6 col-xs-12">


                                                <div class="carousel-exposure">
                                                    <?php

                                                    foreach ($imagesArray as $item) {

                                                        echo '<div class="item-carousel  "   > 
                                                                <img src="' . $item["url"] . '"/>
                                                                <div class="overlay-link">
                                                                <a href="' . get_the_permalink($post_id) . '" class="link" >
                                                                    '.__('подробнее' , 'light').'
                                                                </a>
                                                                </div>
                                                                
                                                                </div>';
                                                    }

                                                    ?>
                                                </div>
                                            <?php  if(count($imagesArray) > 1 ){ ?>
                                                <div class="custom-pagination">
                                                    <div class="arrow">
                                                        <a href="#" class="prev  disable">
                                                            <img class="icon"
                                                                 src="<?php echo get_theme_file_uri('/assets/images/exposure-arrow.png') ?>"
                                                                 alt="Иконка"/>
                                                        </a>
                                                    </div>
                                                    <div class="paginaiton">
                                                        <span>1</span>/<?= count($imagesArray); ?>
                                                    </div>
                                                    <div class="arrow">
                                                        <a href="#" class="next">
                                                            <img class="icon"
                                                                 src="<?php echo get_theme_file_uri('/assets/images/exposure-arrow.png') ?>"
                                                                 alt="Иконка"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            <?php } ?>

                                            </li>

                                            <?php
                                            $i++;
                                        endwhile;
                                        wp_reset_query();
                                        ?>
                                    </ul>
                                    <div class="row-arrow-next" style="display: none"  >
                                        <a href="#" class="next">
                                            <img src="<?php echo get_theme_file_uri('/assets/images/arr-partners.png') ?>"
                                                 alt="иконка"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-12 hidden-mobile">
                                <div class="background lazy   left"
                                     data-src="<?php echo get_theme_file_uri('/assets/images/bg5.jpg') ?>"></div>
                                <div class="content vertical-align right">
                                    <h2 class="sub-title text-right  right">

                                        <?php _e('Действующие<br>выставки', 'light'); ?>
                                    </h2>

                                    <a href="<?=changeUrls('exhibitions');?>" class="link-events" title="Перейти на страницу выставок">

                                        <?php _e('Показать еще', 'light'); ?>

                                    </a>


                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>

        <section class="edu-events">

            <div class="clearfix">
                <div class="content-block">
                    <div class="container">
                        <div class="row flex">
                            <div class="col-sm-4 col-xs-12">
                                <div class="background lazy    right"
                                     data-src="<?php echo get_theme_file_uri('/assets/images/bg6.jpg') ?>"></div>
                                <div class="content vertical-align left">
                                    <h2 class="sub-title  left">

                                        <?php _e('Культурно —
                                        образовательные
                                        мероприятия', 'light'); ?>
                                    </h2>
                                    <p>
                                        <?php _e(' Для школьников и студентов', 'light'); ?>
                                    </p>

                                    <a href="<?=changeUrls('edu_events');?>" class="link-events" title="Перейти на страницу Событий">
                                        <?php _e('Показать еще', 'light'); ?>
                                    </a>

                                </div>

                            </div>
                            <div class="col-sm-8 col-xs-12 relative">
                                <div class="content">
                                    <ul class="list-exposures clearfix relative">
                                        <?php

                                        $arg = array(
                                            'posts_per_page' => 4,
                                            'post_type' => 'edu_events',
                                            'status' => 'publish'
                                        );

                                        $the_query = new WP_Query($arg);
                                        $i = 0;
                                        while ($the_query->have_posts()) :
                                            $the_query->the_post();
                                            $post_id = $the_query->post->ID;
                                            $imagesArray = get_field('gallery_edu_events', $post_id);


                                            ?>
                                            <li class="item  col-sm-4 col-xs-12 relative">
                                                <div class="overlay-link">
                                                    <a href="<?= get_the_permalink($post_id); ?>" class="link">
                                                        <?php _e('подробнее', 'light'); ?>
                                                    </a>
                                                </div>
                                                <div class="carousel-exposure">
                                                    <?php

                                                    foreach ($imagesArray as $item) {

                                                        echo '<div class="item-carousel " >
                                                            <img src="' . $item["url"] . '" alt="Изображение" />
                                                                
                                                            </div>';
                                                    }

                                                    ?>
                                                </div>
                                                <?php  if(count($imagesArray) > 1 ){ ?>
                                                <div class="custom-pagination">
                                                    <div class="arrow">
                                                        <a href="#" class="prev  disable">
                                                            <img class="icon"
                                                                 src="<?php echo get_theme_file_uri('/assets/images/exposure-arrow.png') ?>"
                                                                 alt="Иконка"/>
                                                        </a>
                                                    </div>
                                                    <div class="paginaiton">
                                                        <span>1</span>/<?= count($imagesArray); ?>
                                                    </div>
                                                    <div class="arrow">
                                                        <a href="#" class="next">
                                                            <img class="icon"
                                                                 src="<?php echo get_theme_file_uri('/assets/images/exposure-arrow.png') ?>"
                                                                 alt="Иконка"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            <?php   } ?>

                                            </li>

                                            <?php
                                            $i++;
                                        endwhile;
                                        wp_reset_query();
                                        ?>
                                    </ul>
                                    <div class="row-arrow-next" style="display: none"  >
                                        <a href="#" class="next">
                                            <img src="<?php echo get_theme_file_uri('/assets/images/arr-partners.png') ?>"
                                                 alt="иконка"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
        <?php  get_template_part('inc/form'); ?>
        <section class="partners">
            <div class="clearfix">
                <div class="container">
                    <ul class="list-partners">
                        <?php
                        $arg = array(
                            'posts_per_page' => -1,
                            'post_type' => 'slider_partners',
                            'status' => 'publish'
                        );

                        $the_query = new WP_Query($arg);
                        $i = 0;
                        while ($the_query->have_posts()) :
                            $the_query->the_post();
                            $post_id = $the_query->post->ID;
                            $url     = get_field('url_partner', $post_id);
                            ?>
                            <li class="item">
                                <a target="_blank" href="<?=$url; ?>">
                                    <img src="<?= wp_get_attachment_image_src(get_post_thumbnail_id($post_id), "partners-img")[0]; ?>"
                                         alt="Изображение"/>
                                </a>

                            </li>
                        <?php
                        endwhile;

                        wp_reset_query();
                        ?>

                    </ul>
                    <ul class="partner-arrow">
                        <li>
                            <a href="#" class="prev">
                                <img src="<?php echo get_theme_file_uri('/assets/images/arr-partners.png') ?>"
                                     alt="иконка"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="next">
                                <img src="<?php echo get_theme_file_uri('/assets/images/arr-partners.png') ?>"
                                     alt="иконка"/>
                            </a>
                        </li>


                    </ul>

                </div>
            </div>
        </section>
        <section class="maps-section relative">

            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 colxs-12 ">
                            <div id="map"></div>
                        </div>
                        <div class="col-sm-6 colxs-12 bg-maps ">
                            <div class="contact-info-block">
                                <h2 class="sub-title   ">
                                    <?php _e('Контакты', 'light'); ?>
                                </h2>
                                <div class="wrapper">
                                    <?php  get_template_part('inc/info-list'); ?>
                                    <?php  get_template_part('inc/soc-links'); ?>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </section>
    </div>

<?php get_footer();
