<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 30.04.19
 * Time: 14:32
 */




//var_dump(get_field('gallery_edu_events'));
$id = get_the_ID();
$i = get_query_var( 'count' );
 if( ($i % 2) == 0){

     $templateClass     = 'even';
     $left              = true;

 }else{

     $templateClass = 'odd';
     $left          = false;
 }

    $imgClass   = 'img-block';
    $textClass  = 'text-block';
    $title      = get_the_title($id);
    $content    = get_the_content($id);
    $date       = get_the_date('j F Y' ,$id);

    $image      =  '<img  class="lazy"   src="'.get_theme_file_uri("/assets/images/sprite.jpg").'"  data-src="' .wp_get_attachment_url(get_post_thumbnail_id($id), 'full'). '" alt="Картинка" /> ';

    $text       = '
        <div>
            <h3 class="title-event"><a href="'.get_the_permalink($id).'" title="Перейти на  детальную страницу " >'.$title.'</a></h3>
            <div class="date">'.$date.'</div>
            <div class="content">'.mb_strimwidth(strip_tags($content), 0, 280, "...").'</div>
            <a href="'.get_the_permalink($id).'" class="link-more" title="Перейти на детальную страницу  " >'.__('Читать далее', 'light').'</a>
        </div> 
    ';

?>
<li class="item  <?=$templateClass; ?> clearfix">

    <?php if($left){  ?>
        <div class="<?=$imgClass; ?> col-sm-5 col-xs-12">
            <a href="<?=get_the_permalink($id); ?>"  title="Перейти на детальную страницу" >
                <?=$image; ?>
            </a>
            <span class="triangle"></span>
        </div>
        <div class="<?=$textClass; ?> col-sm-7 col-xs-12">
            <?=$text; ?>
        </div>
    <?php } else {  ?>
        <div class="<?=$imgClass; ?> col-sm-5 col-xs-12 display-on-mobile ">
            <a href="<?=get_the_permalink($id); ?>"  title="Перейти на детальную страницу" >
                <?=$image; ?>
            </a>
            <span class="triangle"></span>
        </div>
        <div class="<?=$textClass; ?>  col-sm-7 col-xs-12">
            <?=$text; ?>
        </div>
        <div class="<?=$imgClass; ?> col-sm-5 col-xs-12 hide-on-mobile">
            <a href="<?=get_the_permalink($id); ?>"  title="Перейти на детальную страницу" >
                <?=$image; ?>
            </a>
            <span class="triangle"></span>
        </div>
    <?php } ?>

</li>
