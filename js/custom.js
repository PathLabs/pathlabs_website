jQuery(document).ready(function( $ ) {

  // Preloader
  $(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });

  // home rotating texts
  $("#home .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 3000
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {opacity:'show'},
    speed: 400
  });

  // Mobile Navigation
  if( $('#nav-menu-container').length ) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
      $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
      $('body').append( $mobile_nav );
      $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
      $('body').append( '<div id="mobile-body-overly"></div>' );
      $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

      $(document).on('click', '.menu-has-children i', function(e){
          $(this).next().toggleClass('menu-item-active');
          $(this).nextAll('ul').eq(0).slideToggle();
          $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });

      $(document).on('click', '#mobile-nav-toggle', function(e){
          $('body').toggleClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').toggle();
      });

      $(document).click(function (e) {
          var container = $("#mobile-nav, #mobile-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
             if ( $('body').hasClass('mobile-nav-active') ) {
                  $('body').removeClass('mobile-nav-active');
                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                  $('#mobile-body-overly').fadeOut();
              }
          }
      });
  } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Stick the header at top on scroll
  $("#header").sticky({topSpacing:0, zIndex: '50'});

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length) {

              var top_space = 0;

              if( $('#header').length ) {
                top_space = $('#header').outerHeight();
              }

              $('html, body').animate({
                  scrollTop: target.offset().top - top_space
              }, 1500, 'easeInOutExpo');

              if ( $(this).parents('.nav-menu').length ) {
                $('.nav-menu .menu-active').removeClass('menu-active');
                $(this).closest('li').addClass('menu-active');
              }

              if ( $('body').hasClass('mobile-nav-active') ) {
                  $('body').removeClass('mobile-nav-active');
                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                  $('#mobile-body-overly').fadeOut();
              }

              return false;
          }
      }
  });

  // Back to top button
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }

  });

  $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
  });

  //forces refresh to top
  $(document).ready(function(){
      $(this).scrollTop(0);
  });

  //Auto Highlight Nav Menu
  $(window).scroll(function() {
    var contact = document.getElementById("#contact");

    var ul = document.getElementById("nav-menu");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
      // do something with items[i], which is a <li> element
      if(window.pageYOffset < 500){
        $(items[i]).removeClass('menu-active');
        $(items[0]).addClass('menu-active');
      }
      else if ( window.pageYOffset > 500 && window.pageYOffset < 2000) {
        $(items[i]).removeClass('menu-active');
        $(items[1]).addClass('menu-active');
      }
      else if ( window.pageYOffset > 2000 && window.pageYOffset <2500) {
        $(items[i]).removeClass('menu-active');
        $(items[2]).addClass('menu-active');
      }
      else if ( window.pageYOffset > 2500 && window.pageYOffset <3000) {
        $(items[i]).removeClass('menu-active');
        $(items[3]).addClass('menu-active');
      }
      else if ( window.pageYOffset > 3000 && window.pageYOffset <3500) {
        $(items[i]).removeClass('menu-active');
        $(items[4]).addClass('menu-active');
      }
      else if ( window.pageYOffset > 3500 && window.pageYOffset <4000) {
        $(items[i]).removeClass('menu-active');
        $(items[5]).addClass('menu-active');
      }
      else if ( window.pageYOffset > 4000 && window.pageYOffset <4500) {
        $(items[i]).removeClass('menu-active');
        $(items[6]).addClass('menu-active');
      }
      else if ( window.pageYOffset > 4500) {
        $(items[i]).removeClass('menu-active');
        $(items[7]).addClass('menu-active');
      }
    }
  });

});
