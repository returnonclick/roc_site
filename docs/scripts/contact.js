/**
 * Created by lucasnascimento on 11/05/2016.
 */

/**
 *
 * =========================================================================== *
 *                                  FINISH
 * =========================================================================== *
 *
 */
$(document).on('click', '.btn-send', function() {


    var contactName   = $('#contactName');
    var email         = $('#email');
    var phone         = $('#phone');
    var message       = $('#message');

    if ( !contactName.val() ){
        contactName.addClass('input--not-filled');
        return false;
    }
    if ( !email.val() ){
        email.addClass('input--not-filled');
        return false;
    }
    if ( !message.val() ){
        message.addClass('input--not-filled');
        return false;
    }

    json['contactName']     =  contactName.val();
    json['email']           =  email.val();
    json['phone']           =  phone.val();
    json['message']         =  message.val();

    var jsonString = JSON.stringify(json);
    $.ajax
    ({
        type: 'POST',
        url: '../../source/php/contact.php',
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