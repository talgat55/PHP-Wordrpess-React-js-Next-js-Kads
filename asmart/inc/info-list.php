<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 17.05.19
 * Time: 23:36
 */
?>
<ul class="list-info">
    <li>


        <span> <?php _e('Адрес:', 'light'); ?> </span>
        <p>
            <a target="_blank" href="https://2gis.ru/omsk/search/%D0%A3%D0%BB.%D0%B4%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%201/firm/282003257698811?queryState=center%2F73.368585%2C54.983613%2Fzoom%2F18" >

            <?php _e(' 644099, Россия, г. Омск, ул. Достоевского, 1', 'light'); ?>
            </a>
        </p>

    </li>
    <li>
        <span> E-mail: </span>
        <a href="mailto:lit-museum@mail.ru">lit-museum@mail.ru</a>
    </li>
    <li>
        <span> <?php _e('Телефон:', 'light'); ?> </span>
        <p>
            <a href="tel: +73812242965"> +7 (3812) 24-29-65</a><br>
            <a href="tel: 89006701428">8-900-670-14-28</a>
        </p>

    </li>
    <li>
        <?php _e('<span>  Время работы: </span>
                                            <p>с 10.00 до 18.00 – без перерывов.<br>
                                                Выходной – понедельник.</p>', 'light'); ?>
    </li>
    <?php  if (  is_page_template('page-about.php')) {  ?>
        <li>
            <span> <?php _e('Прейскурант музея:', 'light'); ?> </span>
            <a target="_blank" href="<?= get_field('file_price', 'option'); ?>">скачать</a>
        </li>
    <?php } ?>
</ul>
