const { ready } = require("jquery");


$(function(){
    $('.slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: document.getElementsByClassName('adviceArrowTop'),
        nextArrow: document.getElementsByClassName('adviceArrowBottom'),
        draggable: false,
        variableHeight: true
    });
});

$(document).ready(function(){
    $('.mainSlider').slick();
});