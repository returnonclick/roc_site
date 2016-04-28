var steps = [];

$(function(){


    //Detecting mobile devices
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



    /* intro ===================================== */
    $(".player").mb_YTPlayer();

    $('#load-content').fadeOut().html($('#content-step-0').html()).fadeIn(500);
    $('#timeline').fadeIn( "slow" );

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
     *                             CONTACT FORM HOME PAGE
     * =========================================================================== *
     *
     */

    $('#btn-contact-form').click(function() {
        $(".collapse").on('show.bs.collapse', function () {
            var y = $(window).scrollTop();  //your current y position on the page
            $('html, body').animate({scrollTop: y + 550}, 800);
        });
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

    //open/close primary navigation
    $('.cd-primary-nav-trigger').on('click', function(){
        $('.cd-menu-icon').toggleClass('is-clicked');
        $('.cd-header').toggleClass('menu-is-open');

        //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        if( $('.cd-primary-nav').hasClass('is-visible') ) {
            $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('body').removeClass('overflow-hidden');
            });
        } else {
            $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('body').addClass('overflow-hidden');
            });
        }
    });




    /**
     *
     * =========================================================================== *
     *                                  ANIMATION
     * =========================================================================== *
     *
     */

    var $animation_element_bear = $('.polar_bear-desktop');
    var $animation_element_water = $('.polar_bear-water-desktop');

    TweenMax.delayedCall(0, bearDown);
    TweenMax.delayedCall(0, waterMoveUp);

    function bearUp() {
        $animation_element_bear.addClass('in-view');
        TweenMax.delayedCall(1.5, bearDown);
    }
    function bearDown() {
        $animation_element_bear.removeClass('in-view');
        TweenMax.delayedCall(1.5, bearUp);
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



/**
 *
 * =========================================================================== *
 *                                  STEP 1
 * =========================================================================== *
 *
 */

$(document).on('click', '.btn-step', function(e) {
    if ($(this).attr('id')=='request-call')
        $("html, body").animate({ scrollTop: $('#speak-with-us').offset().top }, 1000);

    $('#load-content').hide().html($('#' + $(this).data('type') + '-step-' + $(this).data('steps')).html()).fadeIn(500);
    $('ul.timeline li:nth-child(' + $(this).data('steps') + ')').addClass('complete');


    var attr = $(this).attr('data-content');
    if (typeof attr !== typeof undefined && attr !== false) {

            steps.push({
                step: $(this).data('steps') - 1,
                data:[{
                    content: $(this).data('content')
                }]
            });

    }


});

/**
 *
 * =========================================================================== *
 *                                  STEP 2
 * =========================================================================== *
 *
 */

$(document).on('click', '.btn-step-check', function(e) {
    $(this).toggleClass('active-blue');
    steps.push({
        step: $(this).data('steps') - 1,
        data:[{
            content: $(this).data('content')
        }]
    });
});



/**
 *
 * =========================================================================== *
 *                                  STEP 3
 * =========================================================================== *
 *
 */


/**
 *
 * =========================================================================== *
 *                                  STEP 4
 * =========================================================================== *
 *
 */

$(document).on('mouseover', '.btn-person', function(e) {
    for (var i = 1; i < ($(this).data('id') + 1); i++) {
        $('.btn-person:nth-of-type('+ i +') .img-person').addClass('no-blur-no-grayscale');
    }
    $('.convert-equation').html($(this).data('id') + " / 10");
});

$(document).on('mouseout', '.btn-person', function(e) {
    for (var i = 1; i < ($(this).data('id') + 1); i++) {
        $('.btn-person:nth-of-type('+ i +') .img-person').removeClass('no-blur-no-grayscale');
    }
    $('.convert-equation').html("0 / 10");

});

$(document).on('click', '.btn-person', function(e) {

    var dataValue = $(this).data('id') / 10;
    var myObj = $(this);
    var progress = new ElasticProgress($(this), {
        align: "center",
        colorFg: "#01bded",
        colorBg: "#fff",
        highlightColor: "#01bded",
        width: Math.min($(window).width() / 2 - 100, 715),
        barHeight: 12,
        labelHeight: 50,
        labelWobbliness: 0,
        bleedTop: 120,
        bleedRight: 100,
        buttonSize: 60,
        fontFamily: "Arvo",
        barStretch: 0,
        barInset: 4,
        barElasticOvershoot: 1,
        barElasticPeriod: 0.6,
        textFail: "Failed",
        textComplete: "Conversion Rate",
        arrowHangOnFail: false,

    });

    steps.push({
        step: $(this).data('steps') - 1,
        data:[{
            content: $(this).data('content')
        }]
    });

    progress.open();
    //console.log(progress.open());
    TweenMax.delayedCall(2, function () {
        //console.log(progress.open());
        fakeLoading(progress);
    });



    function fakeLoading($obj, speed, failAt) {
        if (typeof speed == "undefined") speed = 1;
        if (typeof failAt == "undefined") failAt = -1;
        var v = 0;
        var l = function() {
            if (failAt > -1) {
                if (v >= failAt) {
                    if (typeof $obj.jquery != "undefined") {
                        $obj.ElasticProgress("fail");
                    } else {
                        $obj.fail();
                    }
                    return;
                }
            }
            v += Math.pow(Math.random(), 2) * 0.1 * speed;
            if (typeof $obj.jquery != "undefined") {
                $obj.ElasticProgress("setValue", v);
            } else {
                $obj.setValue(v);
            }
            //if (v < 1) {
            if (v < dataValue) {
                TweenMax.delayedCall(0.05 + (Math.random() * 0.14), l)
            } else {
                TweenMax.delayedCall(2.0, function () {
                    $('#load-content').hide().html($('#' + myObj.data('type') + '-step-' + myObj.data('steps')).html()).fadeIn(500);
                })
            }
        };
        l();
    }

});


/**
 *
 * =========================================================================== *
 *                                  STEP 5
 * =========================================================================== *
 *
 */



/**
 *
 * =========================================================================== *
 *                                  FINISH
 * =========================================================================== *
 *
 */
$(document).on('click', '.btn-step-finish', function(e) {

    steps.push({
        step: $(this).data('steps') - 1,
        data:[{
            businessName:   $(this).('#businessName').val(),
            contactName:    $(this).('#contactName').val(),
            email:          $(this).('#email').val(),
            phone:          $(this).('#phone').val()
        }]
    });

    var jsonString = JSON.stringify(steps);
    $.ajax
    ({
        type: 'POST',
        url: 'conversion.php',
        data: {data : jsonString},
        success: function () {
            setTimeout( function() {
                $('#load-content').hide().html($('#content-step-sent').html()).fadeIn(500)
            }, 1000)
        },
        error: function() {
            setTimeout( function() {
                $('#load-content').hide().html($('#content-step-error').html()).fadeIn(500)
            }, 1000)
        }
    });

});