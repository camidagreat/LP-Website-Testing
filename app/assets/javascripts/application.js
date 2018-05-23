// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets


// JS for team hover bios


$(function () {
  $('#henry').popover({
    html: true,
    trigger: 'hover',
    placement: 'top',
    content: function () {
      return 'Henry is the badass behind the operation. With a single squeeze of his butt cheeks, he makes diamonds.';
    }
  })
})

$(function () {
  $('#tim').popover({
    html: true,
    trigger: 'hover',
    placement: 'top',
    content: function () {
      return 'Tim is pure technical magic. With a wave of his pinky and 7-days, from the ground rises one platform to rule them all.';
    }
  })
})

$(function () {
  $('#sam').popover({
    html: true,
    trigger: 'hover',
    placement: 'top',
    content: function () {
      return 'Sam is our Energy policy expert. He has the brain of the Icelandic Sun God, Sól.';
    }
  })
})

$(function () {
  $('#luke').popover({
    html: true,
    trigger: 'hover',
    placement: 'top',
    content: function () {
      return 'Luke is a start up magician. He is the bridge connecting people and the future.';
    }
  })
})


$(window).scroll(function () {
    $('.willAnimate').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).toggleClass('animated');
        } else {
            $(this).toggleClass('animated');
        }
    });
});
