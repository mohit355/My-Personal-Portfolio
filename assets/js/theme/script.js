(function ($) {

  'use strict';

  // AOS
  AOS.init();

  // HIDE ALL PLANS NOT FIRST ONE
  $('.plan_row:not(:first-child)').hide();

  // PLANS NAV
  $('#plans_nav li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    // var to get (data-plan) attribute value
    var data_plan_value = $(this).data('plan');
    // toggle between section's plans
    $(data_plan_value).show().siblings().hide();
  });

  // SE VI SLIDER (#se_vi_slider)
  $('#se_vi_slider').slick({
    slidesToShow    : 3,
    slidesToScroll  : 1,
    dots            : true,
    arrows          : false,
    infinite        : true,
    appendDots      : $('#se_vi_slider_dots'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  // NAVBAR
  $('#navbar_toggler').on('click', function() {
    $('.theme_navbar').toggleClass('open');
  });

}(jQuery));