/*
* ----------------------------------------------------------------------------------------
Author       : creativepersonal
Template Name: Reanan - Resume Portfolio website Template
Version      : 1.0
* ----------------------------------------------------------------------------------------
*/
(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS
         * ----------------------------------------------------------------------------------------
         */
        $(window).on('load', function () {
            $('.loader').fadeOut();
            $('#preloader-area').delay(350).fadeOut('slow');

            $('.text-rotator').each(function () {

                var text_rotator_content = $(this).html();
                $(this).empty();
                $(this).html('<div class="rotator-wrap"></div>')
                var this_item = $(this).children('.rotator-wrap');
                var text_rotator_content_split = text_rotator_content.split(',');
                var item_size = text_rotator_content_split.length;
                nova_text_rotator(text_rotator_content_split, this_item, item_size);
            });

            function nova_text_rotator(item_array, this_item, item_size, my_index) {

                if (my_index == undefined)
                    var my_index = -1;

                my_index++

                if (my_index < item_size) {

                    this_item.fadeOut(800, function () {
                        this_item.html('<span>' + item_array[my_index] + '</span>');
                        this_item.fadeIn(800);

                    });
                } else {
                    my_index = -1;
                }

                setTimeout(function () {
                    nova_text_rotator(item_array, this_item, item_size, my_index);
                }, 2500);
            }
        });




        /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND JS
         * ----------------------------------------------------------------------------------------
         */
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });





        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL JS
         * ----------------------------------------------------------------------------------------
         */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  PARALLAX JS
         * ----------------------------------------------------------------------------------------
         */

        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  WORK JS
         * ----------------------------------------------------------------------------------------
         */

        $('.work-inner').mixItUp();



        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */

        var magnifPopup = function () {
            $('.work-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();





        /*
         * ----------------------------------------------------------------------------------------
         *  TESTIMONIAL JS
         * ----------------------------------------------------------------------------------------
         */

        $(".testimonial-list").owlCarousel({
            items: 3,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  EXTRA JS
         * ----------------------------------------------------------------------------------------
         */
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */
        new WOW().init();







    });

})(jQuery);