/**
 * Created by lucasnascimento on 12/05/2016.
 */


$(function(){

    'use strict';

    /**
     *
     * =========================================================================== *
     *                                  DETECTING MOBILE
     * =========================================================================== *
     *
     */

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    /**
     *
     * =========================================================================== *
     *                                  ANIMATION
     * =========================================================================== *
     *
     */

    /**
     *
     * =========================================================================== *
     *                                  DETECTING CLICK "ON"
     * =========================================================================== *
     *
     */

    var $animation_element_bear  = $('.polar_bear-desktop');

    var ON_INICIAL_X = 450;
    var ON_FINAL_X = 500;
    var ON_INICIAL_Y = 470;
    var ON_FINAL_Y = 520;


    $animation_element_bear
        .click( function(e) {

            var offset = $(this).offset();
            var current_x = e.pageX - offset.left;
            var current_y = e.pageY - offset.top;

            if( current_x > ON_INICIAL_X && current_x < ON_FINAL_X && current_y > ON_INICIAL_Y && current_y < ON_FINAL_Y ) {
                //alert('entrou');
                //$('selector').css( 'cursor', 'pointer' );
                window.location.href = "http://www.spacenow.com.au";
            }
        });
    /*
    $animation_element_bear
        .mouseover( function(e) {

            var offset = $(this).offset();
            var current_x = e.pageX - offset.left;
            var current_y = e.pageY - offset.top;

            if( current_x > ON_INICIAL_X && current_x < ON_FINAL_X && current_y > ON_INICIAL_Y && current_y < ON_FINAL_Y ) {

                alert('entrou');
                $('selector').css( 'cursor', 'pointer' );
                //window.location.href = "http://www.returnonclick.com.au/source/calculator.html";
            }

        })

      */







    var $animation_element_on    = $('.on-desktop');
    var $animation_element_water = $('.polar_bear-water-desktop');

    TweenMax.delayedCall(0, bearDown);
    TweenMax.delayedCall(0, onDown);
    TweenMax.delayedCall(0, waterMoveUp);

    function bearUp() {
        $animation_element_bear.addClass('in-view');
        TweenMax.delayedCall(1.5, bearDown);
    }
    function bearDown() {
        $animation_element_bear.removeClass('in-view');
        TweenMax.delayedCall(1.5, bearUp);
    }
    function onUp() {
        $animation_element_on.addClass('in-view');
        TweenMax.delayedCall(1.5, onDown);
    }
    function onDown() {
        $animation_element_on.removeClass('in-view');
        TweenMax.delayedCall(1.5, onUp);
    }
    function waterMoveUp() {
        $animation_element_water.addClass('in-view');
        TweenMax.delayedCall(2, waterMoveDown);
    }
    function waterMoveDown() {
        $animation_element_water.removeClass('in-view');
        TweenMax.delayedCall(2, waterMoveUp);
    }


    var $window = $(window);
    var window_height = $window.height();


    if(!isMobile.any()) {
        $window.on('scroll resize', runFish);
    }


    var $animation_element_fish = $('.fish-desktop');
    var position = $window.scrollTop();
    var i = 0;
    var flip = 1;
    var speed = 10;


    /**
     *
     * =========================================================================== *
     *                                  ANIMATION FISH
     * =========================================================================== *
     *
     */


    function runFish() {

        var scroll = $window.scrollTop();
        var window_bottom_position = (scroll + window_height);
        var fish_height = $animation_element_fish.outerHeight();
        var fish_top_position = $animation_element_fish.offset().top;
        var fish_bottom_position = (fish_top_position + fish_height);

        if (fish_top_position < window_bottom_position && scroll < fish_bottom_position ) {

            if ( scroll > position ) {
                run(i++, 1);
            } else {
                run(i--, -1);
            }
            position = scroll;
        }

    }

    function run(pos, flip) {
        $animation_element_fish.css({
            "transform": "translate3d(" + (pos * speed) + "px, 0px, 0px) scaleX(" + flip + ")"
        });
    }


    /**
     *
     * =========================================================================== *
     *                                  ANIMATION TIGER
     * =========================================================================== *
     *
     */



    $window.on('scroll resize', hitTiger);

    var $animation_element_tiger = $('.tiger');
    var $animation_element_eagle = $('.eagle');


    var totalSteps = 4;
    var flipTiger = window_height / totalSteps;
    var flip = 1;
    var scale = 0.4;
    var step1Done = 0, step2Done = 0, step3Done = 0, step4Done = 0;
    var translateX = 0;
    var translateY = 0;



    function hitTiger() {

        var window_scroll = $window.scrollTop();
        var window_bottom_position = (window_scroll + window_height);
        var tiger_height = $animation_element_tiger.outerHeight();
        var tiger_top_position = $animation_element_tiger.offset().top;
        var tiger_bottom_position = (tiger_top_position + tiger_height);

        //console.log("window height " + window_height);
        //console.log("tiger top position " + tiger_top_position);
        //console.log("tiger bottom position " + element_bottom_position);
        //console.log("window scroll " + windowScroll);
        //console.log("window bottom position " + window_bottom_position);


        if (tiger_top_position < window_bottom_position && window_scroll < tiger_bottom_position) {

            if (tiger_top_position > window_bottom_position - (1 * flipTiger)) {
                if (step1Done == 0) {
                    flip = -1;
                    scale = 0.4;
                    translateX = 0;
                    translateY = 160;
                    runTiger(flip, scale, translateX, translateY);
                    step1Done = 1;
                }
            } else if (tiger_top_position > window_bottom_position - (2 * flipTiger)) {
                if (step2Done == 0) {
                    flip = 1;
                    scale = 0.6;
                    translateX = -20;
                    translateY = 106;
                    runTiger(flip, scale, translateX, translateY);
                    step2Done = 1;
                }
            } else if (tiger_top_position > window_bottom_position - (3 * flipTiger)) {
                if (step3Done == 0) {
                    flip = -1;
                    scale = 0.8;
                    translateX = 0;
                    translateY = 54;
                    runTiger(flip, scale, translateX, translateY);
                    step3Done = 1;
                }
            } else if (tiger_top_position > window_bottom_position - (4 * flipTiger)) {
                if (step4Done == 0) {
                    flip = 1;
                    scale = 1;
                    translateX = -20;
                    translateY = 0;
                    runTiger(flip, scale, translateX, translateY);
                    step4Done = 1;
                    if(!isMobile.any()) {
                        $animation_element_eagle.css({
                            "animation": "anim 5s"
                        });
                    }
                }
            }

        }

        function runTiger(flip, scale, translateX, translateY) {
            $animation_element_tiger.css({
                "transform": "translate3d(" + translateX + "px, " + translateY + "px, 0px) scale(" + scale + ") scaleX(" + flip + ")"
            });
        }

    }
    /**
     *
     * =========================================================================== *
     *                                  ANIMATION EAGLE
     * =========================================================================== *
     *
     */

    $window.trigger('scroll');
});


//$(document).on('click', '.click-on-desktop', function() {
  //  window.location.href="http://www.returnonclick.com.au/calculator.html";
//});