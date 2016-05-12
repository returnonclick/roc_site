var json = {};
var choices = {};

$(function(){

    'use strict';

    /* down ======================================= */
    $('#arrow-scroll-down').click(function(){
        $("html, body").animate({ scrollTop: $('#speak-with-us').offset().top }, 1000);
        return false;
    });

    /* up ======================================= */
    $('#arrow-scroll-up').click(function(){
        $("html, body").animate({ scrollTop: $("body").offset().top }, 1000);
        return false;
    });



    /**
     *
     * =========================================================================== *
     *                                  MENU
     * =========================================================================== *
     *
     */


    //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
    var MQL = 1170;

    //primary navigation slide-in effect
    if($(window).width() > MQL) {
        var headerHeight = $('.cd-header').height();
        $(window).on('scroll',
            {
                previousTop: 0
            },
            function () {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop ) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
                        $('.cd-header').addClass('is-visible');
                    } else {
                        $('.cd-header').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.cd-header').removeClass('is-visible');
                    if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }

});





/**
 *
 * =========================================================================== *
 *                          GET MY FREE REPORT ANIMATION
 * =========================================================================== *
 *
 */


$(document).on('click', '#btn-get-free-report', function(ev) {
    $('.five-things').addClass('fade-right');
    $('.form-free-report').addClass('form-centered');
});





/**
 *
 * =========================================================================== *
 *                                  FORM CONVERSION
 * =========================================================================== *
 *
 */

$(document).on('focus', '.input__field', function(ev) {
    classie.add(ev.target.parentNode, 'input--filled');
    classie.remove(ev.target, 'input--not-filled');
});

$(document).on('blur', '.input__field', function(ev) {
    if( !$(this).val() ) {
        classie.remove(ev.target.parentNode, 'input--filled');
    }
});