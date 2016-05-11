
'use strict';

/**
 *
 *  FORM REQUEST A CALL
 *
 */


var btnFormClick = $('.btn-forms');

btnFormClick.on('click', function () {

    var data = {};
    var form = $(this).data('form');
    var fields = $( '#' + form + ' .form-field');

    fields.on('focus', function() {
        $(this).removeClass('is-not-valid');
    });

    fields.on('blur', function() {
        if( !$(this).val() )
            $(this).addClass('is-not-valid');
    });

    if (validFields(fields, data))
        sendData(data, $(this).data('url'), form);


    return false;

});


function cleanFields (fields) {
    fields.each( function() {
        $(this).val('');
    });
}

function validFields (fields, data) {

    var isValid = true;

    fields.each( function() {

        var require = $(this).attr('required');

        if ( typeof require !== typeof undefined && require !== false ) {
            if ( !$(this).val()) {
                $(this).addClass('is-not-valid');
                isValid = false;
            }
        } else {
            data[$(this).attr('name')] = $(this).val();
        }

    });

    return isValid;
}

function sendData (json, url, form) {

    var jsonString = JSON.stringify(json);

    $.ajax
    ({
        type: 'POST',
        url: url,
        data: {data : jsonString},
        success: function (data) {
            setTimeout( function() {
                $('.load-message-'+form).show().html($('#success-message').html()).fadeIn(500)
            }, 1000);
        },
        error: function() {
            setTimeout( function() {
                $('.load-message-'+form).show().html($('#error-message').html()).fadeIn(500)
            }, 1000);
        }
    });

}

