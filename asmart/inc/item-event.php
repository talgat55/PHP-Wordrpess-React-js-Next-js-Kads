<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 30.04.19
 * Time: 14:32
 */

$id = get_the_ID();
$i = get_query_var( 'count' );


if(get_query_var( 'link_smi' )){

    $redyLink =  get_query_var( 'link_smi' ) ;
    $redyTarget= ' target="_blank"';
    $titleText = 'Перейти на источник';
}else{
    $redyLink =  get_the_permalink($id);
    $redyTarget = '';
    $titleText = 'Перейти на  детальную страницу';
}

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

    $image      =  '<img  class="lazy"   src="'.get_theme_file_uri("/assets/images/sprite.jpg").'"  data-src="' . wp_get_attachment_url(get_post_thumbnail_id($id), 'full') . '" alt="Картинка" /> ';

    $text       = '
        <div>
            <h3 class="title-event"><a  '.$redyTarget.'  href="'.$redyLink.'" title="'.$titleText.'" >'.$title.'</a></h3>
            <div class="date">'.$date.'</div>
            <div class="content">'.mb_strimwidth(strip_tags($content), 0, 280, "...").'</div>
            <a  '.$redyTarget.'  href="'.$redyLink.'" class="link-more" title="'.$titleText.'" >'.__('Читать далее', 'light').'</a>
        </div> 
    ';

?>
<li class="item  <?=$templateClass; ?> clearfix">

    <?php if($left){  ?>
        <div class="<?=$imgClass; ?> col-sm-5 col-xs-12">
            <a  <?=$redyTarget;?>  href="<?=$redyLink; ?>"  title="<?=$titleText; ?>" >
                <?=$image; ?>
            </a>
            <span class="triangle"></span>
        </div>
        <div class="<?=$textClass; ?> col-sm-7 col-xs-12">
            <?=$text; ?>
        </div>
    <?php } else {  ?>
        <div class="<?=$textClass; ?>  col-sm-7 col-xs-12">
            <?=$text; ?>
        </div>
        <div class="<?=$imgClass; ?> col-sm-5 col-xs-12">
            <a <?=$redyTarget;?> href="<?=$redyLink; ?>"  title="<?=$titleText; ?>" >
                <?=$image; ?>
            </a>
            <span class="triangle"></span>
        </div>
    <?php } ?>

</li>
