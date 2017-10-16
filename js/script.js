/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $("#header").removeClass("default");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $("#header").addClass("default").fadeIn('fast');
        } else {
            $("#header").removeClass("default").fadeIn('fast');
        }
    });
});

// Уменьшение шрифта заголовка
$(document).ready(function () {
    "use strict";
    var winWidth;
    winWidth = $(this).innerWidth();
    if (winWidth < 1280) {
        $("#gl").css("font-size", "22px");
    }
    if (winWidth < 917) {
        $("#gl").css("font-size", "18px");
    }
    if (winWidth < 500) {
        $("#gl2").css("font-size", "10px");
        $("#glhr").hide();
    }
    // Подключение гамбургера
    if (winWidth <= 750) {
        $("#gl").css("font-size", "14px");
        $("#gl2").css("font-size", "14px");
        $("#hamburger").css("display", "block");
        $(".nav > li").css("display", "none");
        $(".nav_menu").css("margin-left", "10px");
    }
    $("#hamburger").click(function () {
        $(".nav > li").css("display", "block");
        $("#hamburger").css("display", "none");
    });
    /*$(winWidth <= 767) {
        $("#header").css("width", "100%");
    }*/
});

// Blockquote
$(document).ready(function () {
    "use strict";
    var winWidth;
    winWidth = $(this).innerWidth();
    if (winWidth < 1737) {
        $(".row2").css("margin-top", "100px");
    }
    if (winWidth < 1646) {
        $(".row2").css("margin-top", "90px");
    }
    if (winWidth < 1581) {
        $(".row2").css("margin-top", "60px");
    }
    if (winWidth < 1466) {
        $(".row2").hide();
    }
});

$(document).ready(function () {
    "use strict";
    $(".img").click(function () {
        $(".img").hide();
    });
});
