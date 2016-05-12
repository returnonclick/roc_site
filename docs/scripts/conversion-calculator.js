/**
 * Created by lucasnascimento on 12/05/2016.
 */

$(function() {

    'use strict';

    $('#load-content').fadeOut().html($('#content-step-0').html()).fadeIn(500);
    $('#timeline').fadeIn("slow");

});

/**
 *
 * =========================================================================== *
 *                                  STEP 1
 * =========================================================================== *
 *
 */

$(document).on('click', '.btn-step', function() {
    if ($(this).attr('id')=='request-call')
        $("html, body").animate({ scrollTop: $('#speak-with-us').offset().top }, 1000);

    $('#load-content').hide().html($('#' + $(this).data('type') + '-step-' + $(this).data('steps')).html()).fadeIn(500);
    $('ul.timeline li:nth-child(' + $(this).data('steps') + ')').addClass('complete');


    var attr = $(this).attr('data-content');
    var attrStep = $(this).attr('data-steps');
    if (typeof attr !== typeof undefined && attr !== false) {
        json[ 'step' + ($(this).data('steps') - 1)] =  $(this).data('content');
    } else
    if (attrStep == 3) {
        json[ 'step' + ($(this).data('steps') - 1) ] = choices;
    }


});



/**
 *
 * =========================================================================== *
 *                                  STEP 2
 * =========================================================================== *
 *
 */

$(document).on('click', '.btn-step-check', function() {
    $(this).toggleClass('active-blue');
    choices[$(this).data('content')] = 1;
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

$(document).on('mouseover', '.btn-person', function() {
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

$(document).on('click', '.btn-person', function() {


    $('ul.timeline li:nth-child(' + $(this).data('steps') + ')').addClass('complete');

    json[ 'step' + ($(this).data('steps') - 1)] =  $(this).data('content');

    $('#load-content').hide().html($('#' + $(this).data('type') + '-step-' + $(this).data('steps')).html()).fadeIn(500);

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
$(document).on('click', '.btn-step-finish', function() {


    var businessName = $('#businessName');
    var contactName  = $('#contactName');
    var email        = $('#email');
    var phone        = $('#phone');


    if ( !businessName.val() ) {
        businessName.addClass('input--not-filled');
        return false;
    }

    if ( !contactName.val() ){
        contactName.addClass('input--not-filled');
        return false;
    }
    if ( !email.val() ){
        email.addClass('input--not-filled');
        return false;
    }
    if ( !phone.val() ){
        phone.addClass('input--not-filled');
        return false;
    }

    json['businessName']    =  businessName.val();
    json['contactName']     =  contactName.val();
    json['email']           =  email.val();
    json['phone']           =  phone.val();


    $('ul.timeline li:nth-child(' + $(this).data('steps') + ')').addClass('complete');

    var jsonString = JSON.stringify(json);
    $.ajax
    ({
        type: 'POST',
        url: '../../source/php/conversion.php',
        data: {data : jsonString},
        success: function (data) {
            setTimeout( function() {
                $('#load-content').hide().html($('#content-step-sent').html()).fadeIn(500)
            }, 1000);
            console.log(data);
        },
        error: function() {
            setTimeout( function() {
                $('#load-content').hide().html($('#content-step-error').html()).fadeIn(500)
            }, 1000)
        }
    });

});