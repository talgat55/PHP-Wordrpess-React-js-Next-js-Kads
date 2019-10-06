// ---------------------------------------------------------
// !!!!!!!!!!!!!!!!!document ready!!!!!!!!!!!!!!!!!!!!!!!!!!
// ---------------------------------------------------------

jQuery(document).ready(function () {
    "use strict";

     //
    //  fixed footer on bottom
    //
    var hh = jQuery('header').height(); // берем высоту шапки и суем в переменную hh
    var fh = jQuery('footer').height(); // то же самое с подвалом
    var wh = jQuery(window).height(); // высота всего окна
    var сh = wh - hh - fh; // считаем оптимальную высоту для блока с контентом
    jQuery('.site-content').css('min-height', сh); // применяем посчитанную высоту




    galleryExposure();
    exposureCarousel();
    lasyLoad();
    modal();
    carouselParthers();
    map();
    carouselHistorry();
    galleryHistory();
    sliderCollectionPage();
    carouselSinglePage();
    gallerySinglePage();
    mobileMenu();
    changeLangByClick();
    phoneMask();
    carouselRow();


    // end redy function
});

jQuery( window ).resize(function() {
    dinamicWidthMap();
});


jQuery( window ).load(function() {
    scrollToAnimate();
});


//
//  Modal
//
function modal() {
    "use strict";

    jQuery('.modal-overlay, .img-close-modal').click(function () {

        jQuery('.custom-modal ,  .custom-modal2, .modal-overlay').removeClass('show-modal');

        return false;
    });
    jQuery('.link-to-call.slider').click(function () {
        if (jQuery(this).hasClass('link-registration')) {
            jQuery('.custom-modal2, .modal-overlay').addClass('show-modal');

        } else {
            jQuery('.custom-modal, .modal-overlay').addClass('show-modal');

        }

        return false;


    });

}


//----------------------------------
//   Lasyload
//---------------------------------------

function lasyLoad() {
    "use strict";
    var lasyClass = '.lazy';
    if (jQuery(lasyClass).length) {
        jQuery(lasyClass).lazy();
    }

}

//----------------------------------
//   Carousel Expouse
//---------------------------------------

function exposureCarousel() {
    "use strict";
    var carouselClass = '.carousel-exposure';
    if (jQuery(carouselClass).length) {
        jQuery(carouselClass).slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            arrows: false,
            dots: false

            //   autoplay: true,
        });
        jQuery('.custom-pagination  .prev').click(function (e) {
            e.preventDefault();
            jQuery(this).parent().parent().parent().find('.carousel-exposure').slick('slickPrev');
        });
        jQuery('.custom-pagination  .next').click(function (e) {
            e.preventDefault();
            jQuery(this).parent().parent().parent().find('.carousel-exposure').slick('slickNext');
        });
        jQuery(carouselClass).on("afterChange", function (event, slick, currentSlide) {
            var currentSlideCount = parseInt(currentSlide + 1);

            if (currentSlideCount != '1' && currentSlideCount != slick.slideCount) {

                jQuery(this).parent().find('.custom-pagination .prev, .custom-pagination .next').removeClass('disable');
            } else if (slick.slideCount == currentSlideCount) {

                jQuery(this).parent().find('.custom-pagination .next').addClass('disable');

            } else {
                jQuery(this).parent().find('.custom-pagination .prev').addClass('disable');
            }

            jQuery(this).parent().find('.custom-pagination .paginaiton span').html(' ').html(currentSlide + 1);

        });
    }

}

//----------------------------------
//   Carousel Partners
//---------------------------------------
function carouselParthers() {
    "use strict";
    var carouselClass = jQuery('.list-partners');
    if (carouselClass.length) {
        carouselClass.slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: jQuery('.partner-arrow .next'),
            prevArrow: jQuery('.partner-arrow .prev'),
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]

            //   autoplay: true,
        });

    }

}


//----------------------------------
// Map
//------------------------------------
// set width  for map in home page
function dinamicWidthMap(){
    "use strict";
    var $mapHome = jQuery('#map');
    if(jQuery('body').hasClass('home')){

        $mapHome.css('width', jQuery(window).width()/2);

    }

}
function map() {
    "use strict";

    let $map = jQuery('#map');


    if ($map.length) {
        dinamicWidthMap();


        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 15,
                controls: [ ],
                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(54.983693, 73.368633), // New York

                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": [{"gamma": "0.82"}]
                }, {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [{"gamma": "1.21"}]
                }, {
                    "featureType": "all",
                    "elementType": "labels",
                    "stylers": [{"lightness": "-60"}]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [{"gamma": "5.37"}]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#557a46"}, {"lightness": "-39"}]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
                }, {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{"visibility": "off"}]
                },   {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
                }, {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#42738d"}, {"gamma": "5.37"}]
                }]
            };

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(54.983693, 73.368633),
                map: map,
                title: 'Музей'
            });
        }

        google.maps.event.addDomListener(window, 'load', init);

    }
}


//----------------------------------
//   Carousel in history page
//---------------------------------------
function carouselHistorry() {
    "use strict";
    var carouselClass = jQuery('.history-carousel');
    if (carouselClass.length) {
        carouselClass.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: jQuery('.history-arrow .next'),
            prevArrow: jQuery('.history-arrow .prev'),
            dots: false,
            lazyLoad: 'ondemand',
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        vertical: false,
                        verticalSwiping: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        vertical: false,
                        verticalSwiping: false
                    }
                }

            ]
            //   autoplay: true,
        });

    }

}


//----------------------------------
//   gallery history page
//---------------------------------------
function galleryHistory() {
    "use strict";
    var historyClass = jQuery('.history-carousel');
    if (historyClass.length) {
        historyClass.lightGallery({
            selector: '.link-full'
        });

    }

}
//----------------------------------
//   gallery for home page exposure
//---------------------------------------
function galleryExposure() {
    "use strict";
    var exposureClass = jQuery('.link-zoom-expouse');
    if (exposureClass.length) {

        exposureClass.click(function (e) {
            e.preventDefault();
            let images = jQuery(this).parent().parent().parent().parent().parent().parent().attr('data-images');
            let redyArray = images.split(',');
            jQuery(this).lightGallery({
                dynamic: true,
                dynamicEl:  redyArray.map(function(name) {
                    return {  'src' : name };
                })
            })
        });

    }





}


//----------------------------------
//   Slider in page collection
//---------------------------------------
function sliderCollectionPage() {
    "use strict";
    var carouselClass = jQuery('.slider-collection');
    if (carouselClass.length) {
        carouselClass.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: jQuery('.arrow-collection .next'),
            prevArrow: jQuery('.arrow-collection .prev'),
            dots: false,

            //   autoplay: true,
        });

    }

}

//----------------------------------
//   Carousel in single page
//---------------------------------------
function carouselSinglePage() {
    "use strict";
    var carouselClass = jQuery('.single-events-carousel');
    if (carouselClass.length) {
        carouselClass.slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: jQuery('.single-arrow .next'),
            prevArrow: jQuery('.arrow-collection .prev'),
            dots: false,

            //   autoplay: true,
        });

    }

}



//----------------------------------
//   gallery single page
//---------------------------------------
function gallerySinglePage() {
    "use strict";
    var singleClass = jQuery('.single-events-carousel');
    if (singleClass.length) {
        singleClass.lightGallery({
            selector: '.link-full'
        });

    }

}
//----------------------------------
//  Change lang by click
//------------------------------------
function changeLangByClick(){
    "use strict";
    var linkClass = '.list-switch-lang a';

    jQuery('body').on('click', linkClass,function(){
        jQuery(linkClass).removeClass('active');
        jQuery(this).addClass('active');
        console.log(jQuery(this).attr('data-type'));
        if(jQuery(this).attr('data-type') == 'en'){
            var redylink = window.location.protocol + "//" + window.location.host + '/en';
            //var redylink = window.location.protocol + "//" + window.location.host + '/en' + window.location.pathname;

        }else{
            var redylink = window.location.protocol + "//" + window.location.host;

        }

        window.location.href = redylink;
        return false;
    });
}

//----------------------------------
//  Mobile Menu
//------------------------------------
function mobileMenu(){
    "use strict";
    var linkClass = '#mobile-toggle';
    var mobileClass = '.mobile-bar';

    jQuery('body').on('click', linkClass,function(){
        jQuery(this).toggleClass('is-active');
        jQuery(mobileClass).toggleClass('is-active');
        return false;
    });
}

//----------------------------------
//  Input phone field Mask
//------------------------------------
function phoneMask(){
    "use strict";
    let phone_class = jQuery('.phone-input');
    if(phone_class.length){
        phone_class.inputmask({"mask": "+7 (999) 999-9999"});

    }
}

//----------------------------------
//  scroll to element
//------------------------------------
function scrollToAnimate(){
    "use strict";
    let homeClass = jQuery('.home');
    // if(homeClass.length == 0){
    //
    //
    //
    //     jQuery(window).scroll(function() {
    //         var height = jQuery(window).scrollTop();
    //         console.log(height);
    //         if(height == 0) {
    //             jQuery('html, body').animate({
    //                 scrollTop: jQuery("#primary").offset().top
    //             }, 800).stop();
    //         }
    //     });
    //
    // }

}
//----------------------------------
//   Carousel Row
//---------------------------------------
function carouselRow() {
    "use strict";
    let exhibitionsClass        = jQuery('.exhibitions .list-exposures');
    let eduClass                = jQuery('.edu-events .list-exposures');
    let exarrowClass            = jQuery('.exhibitions .row-arrow-next');
    let edarrowClass            = jQuery('.edu-events .row-arrow-next');

    if (eduClass.length) {
        setTimeout(function(){
            if(exhibitionsClass.find('li').length > 3){
                edarrowClass.fadeIn();

            }
        }, 200);

        eduClass.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]

        });

    }

    if (exhibitionsClass.length) {

        if(exhibitionsClass.find('li').length > 2){
            exarrowClass.fadeIn();
        }

        exhibitionsClass.slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]

            //   autoplay: true,
        });

    }


    //  arrow
    jQuery('body').on('click', '.row-arrow-next a' ,function(){
        jQuery(this).parent().parent().find('.list-exposures').slick('slickNext');
        return false;
    });

}

