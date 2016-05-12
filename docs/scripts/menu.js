/**
 * Created by lucasnascimento on 12/05/2016.
 */
$(function() {

    'use strict';

    //open/close primary navigation
    $('.cd-primary-nav-trigger').on('click', function () {
        $('.cd-menu-icon').toggleClass('is-clicked');
        $('.cd-header').toggleClass('menu-is-open');

        //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        if ($('.cd-primary-nav').hasClass('is-visible')) {
            $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').removeClass('overflow-hidden');
            });
        } else {
            $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').addClass('overflow-hidden');
            });
        }
    });


    var currentChild  = [];


    $('ul li a').on('click' ,function() {

        var attr = $(this).attr('data-submenu');
        var child = $(this).attr('data-letters');

        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).closest('ul').removeClass('visible');
            $(this).closest('ul').addClass('invisible');

            $("ul")
                .filter(function () {
                    if($(this).attr("data-parent") == child){
                        $(this).removeClass('invisible');
                        $(this).addClass('visible');
                        currentChild.push(child);
                    }
                });

            $("a")
                .filter(function () {
                    if($(this).attr("data-parent") == 'back'){
                        $(this).removeClass('invisible');
                        $(this).addClass('visible');
                    }
                });

        }

    });

    $('.back').on('click', function () {
        $("ul li a")
            .filter(function () {
                if ( $(this).attr('data-letters')==currentChild[currentChild.length-1]) {
                    $(this).closest('ul').addClass('visible');
                    $(this).closest('ul').removeClass('invisible');
                }
            });

        $("ul")
            .filter(function () {
                if($(this).attr("data-parent") == currentChild[currentChild.length-1]){
                    $(this).removeClass('visible');
                    $(this).addClass('invisible');
                }
            });

        currentChild.pop(currentChild);

        if (currentChild.length == 0) {
            $(this).addClass('invisible');
            $(this).removeClass('visible');
        }

    });

});

