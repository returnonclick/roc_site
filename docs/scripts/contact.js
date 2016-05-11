/**
 * Created by lucasnascimento on 11/05/2016.
 */

$(function() {

    'use strict';

    /* intro ===================================== */
    $(".player").mb_YTPlayer();

    $('#load-content').fadeOut().html($('#content-step-0').html()).fadeIn(500);
    $('#timeline').fadeIn("slow");

});