<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 11.05.19
 * Time: 13:04
 */
?>
<section class="contact-section">

    <div class="clearfix">
        <div class="container">
            <div class="row">
                <div class="contact-block">
                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <?php if (get_locale() == 'en_US') {  ?>
                                <?= do_shortcode('[contact-form-7 id="239" title="свяжитесь с нами En"  html_class="form-contact_us"]'); ?>
                            <?php } else { ?>
                                <?= do_shortcode('[contact-form-7 id="51" title="свяжитесь с нами" html_class="form-contact_us"]'); ?>
                            <?php } ?>

                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="content">
                                <h2 class="sub-title   ">
                                    <?php _e('СВЯЖИТЕСЬ<br>
                                    С НАМИ', 'light'); ?>
                                </h2>
                                <p>
                                    <?php _e(' Возникли вопросы?<br>
                                    Мы ответим на все, что Вас интересует', 'light'); ?>

                                </p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</section>
