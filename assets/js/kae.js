$(function() {
    $(".fade").letterfx({
      "fx": "fade"
    });
  });

setTimeout(function () {
    $('.start p').fadeIn(1600);
}, 500);
setTimeout(function () {
    $('.start').fadeOut(500);
}, 2500);