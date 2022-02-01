$(document).ready(function () {
  new WOW().init();

  // NAVBAR STICKY
  var $stickyNav = $(".navbar-sticky");

  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $stickyNav.addClass("navbar-sticky-moved-up");
    } else {
      $stickyNav.removeClass("navbar-sticky-moved-up");
    }
    // apply transition
    if (scroll >= 50) {
      $stickyNav.addClass("navbar-sticky-transitioned");
    } else {
      $stickyNav.removeClass("navbar-sticky-transitioned");
    }
    // sticky on
    if (scroll >= 50) {
      $stickyNav.addClass("navbar-sticky-on");
    } else {
      $stickyNav.removeClass("navbar-sticky-on");
    }
  });

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".overlay-box").fadeIn(300);
      $(".navgition").addClass("reset-left");
      $("body").addClass("overflow");
    });
    $(".nav-head .close-btn, .overlay-box").click(function () {
      $(".overlay-box").fadeOut(300);
      $(".navgition").removeClass("reset-left");
      $("body").removeClass("overflow");
    });
    //slide down menu
    $(".btn-div").click(function (e) {
      e.preventDefault();
      $(this).siblings(".cats-dispaly").slideToggle(400);
      $(".btn-div").not(this).siblings(".cats-dispaly").slideUp(400);
      if ($(window).width() <= 1199) {
        $(this).toggleClass("active");
      }
    });
    $(".overlay-box").click(function () {
      $(".cats-dispaly").slideToggle(400);
    });
  }
  $(".top-header .add-chevron").addClass("chevron-down");

  //dropdown inside menu
  // $(".lang-word, .chevron-down").click(function (e) {
  //   e.preventDefault();
  //   var item = $(this).siblings(".dropdown-content");
  //   item.slideToggle(400);
  // });
  // //main Slider Carousel
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });

  ///////// ** product one** /////////
  var specialsO = new Swiper(".product-one .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".product-one .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-one .swiper-btn-next",
      prevEl: ".product-one .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  ///////// ** product two** /////////
  var specialsT = new Swiper(".product-two .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".product-two .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-two .swiper-btn-next",
      prevEl: ".product-two .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  ///////// ** product three** /////////
  var specialsTh = new Swiper(".product-three .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".product-three .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-three .swiper-btn-next",
      prevEl: ".product-three .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  ////////////////add swiper carsoul to class category////////////////////////////////
  if ($(window).width() < 1199) {
    $(".image-cat .swiper-containeres").addClass("swiper-container");
    $(".image-cat .image-row").addClass("swiper-wrapper");
    $(".image-cat .swiper-slidees").addClass("swiper-slide");
    var category = new Swiper(".image-cat .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".image-cat .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
  ////////////////add swiper carsoul to class feature////////////////////////////////

  if ($(window).width() < 1199) {
    $(".features .col-md-3.col-xs-12").contents().unwrap();
    $(".features .row").contents().unwrap();
    $(".feature-section .features").addClass("swiper-container");
    $(".feature-section .features-div").addClass("swiper-wrapper");
    $(".feature-section .features-box").addClass("swiper-slide");
    var feature = new Swiper(".feature-section .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".feature-section .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1199: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
});
