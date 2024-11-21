
(function ($) {
  "use strict";

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // =======Sticky-header========>>>>>
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
      $(".sticky-navbar").removeClass("sticky");
      $('.back-to-top').hide();
    } else {
      $(".sticky-navbar").addClass("sticky");
      $('.back-to-top').show();
    }
  });
  // =======Sticky-header========>>>>>



  $(window).on("load", function () {
    $(".preloader").delay(600).fadeOut("slow");
  });


  // =======dynamic-year js========>>>>>
  let dynamicyearElm = $(".dynamic-year");
  if (dynamicyearElm.length) {
    let currentYear = new Date().getFullYear();
    dynamicyearElm.html(currentYear);
  }
  // =======dynamic-year js========>>>>>


  // =======couponFun========>>>>>
  function couponFun(){
    let showCoupon = $('.show-coupon');
    let checkoutForm = $('.checkout-form');
    
    $('.show-coupon').on('click', function(){
      if(!checkoutForm.hasClass('open')){
        checkoutForm.addClass('open');
        checkoutForm.slideDown(200)
      }else{
        checkoutForm.removeClass('open');
        checkoutForm.slideUp(200)
      }
    })
  }
  couponFun();
  // =======couponFun========>>>>>


  // =======CounterUp JS-Odometer========>>>>>   
  if ($('.odometer').length > 0) {
    $(window).on('scroll', function () {
      let preloaderTimeout = 2500;
      function winScrollPosition() {
        var scrollPos = $(window).scrollTop(),
          winHeight = $(window).height();
        var scrollPosition = Math.round(scrollPos + (winHeight / .07));
        return scrollPosition;
      }
      var elemOffset = $('.odometer').offset().top;
      if (elemOffset < winScrollPosition()) {

        setTimeout(function () {
          $('.odometer').each(function () {
            $(this).html($(this).data('count-to'));
          });
        }, preloaderTimeout + 200);
      }
    });
  }
  // =======CounterUp JS-Odometer========>>>>>


  // =======Swiper .service-swiper========>>>>>
  if ($('.service-swiper').length > 0) {
    new Swiper(".service-swiper", {
      loop: true,      
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        460: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1320: {
          slidesPerView: 4,
        }
      },
      pagination: {
        el: ".service-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".service-progress-button-next",
        prevEl: ".service-progress-button-prev",
      },
    });
  }
  // =======Swiper .service-swiper========>>>>>



  // =======Swiper .shop-2-swiper========>>>>>
  if ($('.shop-2-swiper').length > 0) {
    new Swiper(".shop-2-swiper", {
      loop: true,      
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".shop-swiper-pagination",
        type: "progressbar",
      },      
    });
  }

  if ($('.shop-swiper').length > 0) {
    new Swiper(".shop-swiper", {
      loop: true,      
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1365: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      },

      pagination: {
        el: ".shop-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".shop-progress-button-next",
        prevEl: ".shop-progress-button-prev",
      },
    });
  }
  // =======Swiper .shop-swiper========>>>>>


  // =======Swiper .blog-swiper========>>>>>
  if ($('.blog-swiper').length > 0) {
    new Swiper(".blog-swiper", {
      loop: true,      
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        }
      },
      pagination: {
        el: ".blog-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".blog-progress-button-next",
        prevEl: ".blog-progress-button-prev",
      },
    });
  }
  // =======Swiper .blog-swiper========>>>>>


  // =======Swiper .testimonial-swiper========>>>>>
  if ($('.testimonial-swiper').length > 0) {
    new Swiper(".testimonial-swiper", {
      loop: true,      
      spaceBetween: 20,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1320: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      },

      pagination: {
        el: ".testimonial-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".testimonial-progress-button-next",
        prevEl: ".testimonial-progress-button-prev",
      },
    });
  }
  // =======Swiper .testimonial-swiper========>>>>>



  // =======Swiper .project-swiper========>>>>>
  if ($('.project-gallery-swiper').length > 0) {
    new Swiper(".project-gallery-swiper", {
      loop: true,
      spaceBetween: 20,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1320: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      },

      pagination: {
        el: ".project-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".project-progress-button-next",
        prevEl: ".project-progress-button-prev",
      },
    });
  }
  // =======Swiper .project-swiper========>>>>>



  // =======Swiper .project-swiper========>>>>>
  if ($('.contact-swiper').length > 0) {
    new Swiper(".contact-swiper", {
      loop: true,
      spaceBetween: 20,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      },

      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  }
  // =======Swiper .project-swiper========>>>>>



  // =======Swiper .gallery-swiper========>>>>>
  if ($('.gallerySwiper').length > 0) {
    var swiper = new Swiper(".gallerySwiper", {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        750: {
          spaceBetween: 20,
        },
        1320: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },
    });
  }
  if ($('.gallerySwiper2').length > 0) {
    var swiper2 = new Swiper(".gallerySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".project-gallery-button-next",
        prevEl: ".project-gallery-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }
  // =======Swiper .gallery-swiper========>>>>>



  // =======Swiper .team-swiper========>>>>>
  if ($('.team-swiper').length > 0) {
    new Swiper(".team-swiper", {
      loop: true,
      spaceBetween: 20,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        }
      },
    });
  }
  // =======Swiper .team-swiper========>>>>>


  // =======Swiper .project-swiper========>>>>>
  if ($('.project-swiper').length > 0) {
    new Swiper(".project-swiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 2000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".project-next-btn",
        prevEl: ".project-prev-btn",
      },
    });
  }
  // =======Swiper .project-swiper========>>>>>



  // =======Magnific-PopUp========>>>>>    
  $('.image-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find('img');
      }
    }
  });

  // Video popup
  $('.video-popup-link').magnificPopup({
    disableOn: 200,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  // =======Magnific-PopUp========>>>>>


  // =======Gallery Animation onClick========>>>>>
  $('.gallery-contents').on('click mouseenter mouseleave', function (event) {
    if (event.type === 'click' || event.type === 'mouseenter') {
      $('.gallery-contents').removeClass('gallery-expand').addClass('gallery-sm');
      $(this).removeClass('gallery-sm').addClass('gallery-expand');
    } else if (event.type === 'mouseleave') {
      $(this).removeClass('gallery-expand').addClass('gallery-sm');
    }
  });
  // =======Gallery Animation onClick========>>>>>


  // =========Button(Increse-Decrese)=========>>>>>
  var buttonPlus = $(".plus-icon");
  var buttonMinus = $(".dash-icon");
  var incrementPlus = buttonPlus.on("click", function () {
    var $n = $(this)
      .parent(".cart-btn")
      .find(".input-number");
    $n.val(Number($n.val()) + 1);
  });
  var incrementMinus = buttonMinus.on("click", function () {
    var $n = $(this)
      .parent(".cart-btn")
      .find(".input-number");
    var amount = Number($n.val());
    if (amount > 1) {
      $n.val(amount - 1);
    }
  });
  // =========Button(Increse-Decrese)=========>>>>>



  // =========Leaflet map=========>>>>>


  if ($('#map').length > 0) {
    var map = L.map('map').setView([35.76428892315803, -40.45770338684278], 3);
    var locationsArray = [];
  
    function clickZoom(e) {
      map.setView(e.target.getLatLng(), 16);
    }
  
    $.each(architronixLocations, function(index, location) {
      // Create Marker
      var marker = L.marker(location.markerPoint, {
        title: location.title,
        className: "marker-usa"  // Class for the marker
      }).addTo(map);
  
      // Bind Popup
      marker.bindPopup(`<div class="card card-map architronix-map-card"><div class="card-body">
                          <h5 class="card-title service-title">${location.title}</h5><p class="mb-0 fw-semibold">${location.subtitle}</p><p class="mb-0 contact-home">${location.address}</p>                          
                        </div></div>`).on('click', clickZoom);
  
      // Store the location in the array
      locationsArray.push({ marker: marker, location: location });
    });
  

    
     // Handle external link clicks
    $('.btn-map-direction').on('click', function(e) {
      e.preventDefault();
      var markerTitle = $(this).data('title');
      
      // Find the marker in the array based on the title
      var selectedMarker = locationsArray.find(function(item) {
        return item.location.title === markerTitle;
      });

      // Open the popup for the selected marker
      if (selectedMarker) {
        selectedMarker.marker.openPopup();
        // Set the zoom level to 16
        map.setView(selectedMarker.marker.getLatLng(), 12);
      }
    });
  
    L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
      maxZoom: 26,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
    // Outside click event
    $(document).on('click', function(e) {
      var mapContainer = $('#map');
      var isClickInsideMap = mapContainer.has(e.target).length > 0 || mapContainer.is(e.target); 
     
    });
  }
  // =========Leaflet map=========>>>>>



  // ========= Scrool stroke-text on Mouse-Wheel=========>>>>>

  if ($('.scroll-move').length > 0){
    const classNames = [];
    $(".scroll-move").each(function (index, item) {
      index += 1;
      const newClassName = 'scroll-parent' + index;
      $(item).addClass(newClassName);
      classNames.push("." + newClassName);
    });
    for (var i = 0; i < classNames.length; i++) {
      letterCarousel(classNames[i], '.scrolling-text');
    }
    function letterCarousel(parent_cls, child_cls) {
      let elemts = jQuery(parent_cls + ' ' + child_cls);
      jQuery(window).on("scroll wheel touchmove", function () {
        let windowHeight = $(window).height(),
          winWidth = $(window).width(),
          divid = winWidth / 100,
          elOffsetTop = $(parent_cls).offset().top;
        if (jQuery(parent_cls).length) {
          let tlH = jQuery(document).scrollTop(); // Get current scroll position
          // Check if scroll top is 0
          if (tlH === 0) {
            elemts.css({
              "transform": "translateX("+ divid + ")",
            });
          } else {
            let i = tlH - elOffsetTop,
              scroll = i + 100,
              scroll_slow = scroll + ((scroll / 100) / 100),
              img_scroll = scroll_slow * divid / 150;
            elemts.css({
              "transform": "translateX(" + img_scroll + "px)",
            });           
          }
        }
      });
    }
  }
  // ========= Scrool stroke-text on Mouse-Wheel=========>>>>>



  // ========= Stroke-animation When visible on view-port=========>>>>>
  if ($('.stroke-heading').length > 0){
    $(document).on("ready", function () {
      function isInViewport(element) {
          var elementTop = $(element).offset().top;
          var elementBottom = elementTop + $(element).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          return elementBottom > viewportTop && elementTop < viewportBottom;
      }
      function handleVisibility() {
          $(".stroke-heading , .stroke-heading-2").each(function (i, listItem) {
              if (isInViewport(listItem)) {
                  $(listItem).find('.text-line-2').addClass('text-line-animation');
              } else {
                  $(listItem).find('.text-line-2').removeClass('text-line-animation');
              }
          });
      }      
      handleVisibility();      
      $(window).on("scroll", handleVisibility);
    });
  }    
  // ========= Stroke-animation When visible on view-port=========>>>>>



  // ========= Team-Wrapper hover=========>>>>>
  if ($('.team-wrapper').length > 0){
      $(document).on("ready", function () {
        $(".team-wrapper").on("hover",
            function () {
              $(this).find('.author-name').addClass('author-border-bottom');
            },
            function () {
              $(this).find('.author-name').removeClass('author-border-bottom');
            }
        );
    });
  }
  // ========= Team-Wrapper hover=========>>>>>
  


//===============smooth scrolling ===================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 2,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// =================  typed text =============

if ($('.typed-text').length > 0){
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    loop: true,
    typeSpeed: 30,
    backSpeed: 10,
    backDelay: 1500,
    cursorChar: '_'
  });
}


new WOW().init();



  $(document).on('submit', '#contactForm, #callRequestForm, #downloadForm',function(e) {
    e.preventDefault();
    var form = $(this);
    var formData = form.serialize();
    var responseDiv = form.find('.response');
    form.find('[type="submit"]').prop('disabled', true); 
    formData += '&id='+form.attr('id');
    responseDiv.html('<p>Working....</p>');
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: formData,
      success: function(response) {
       var data = JSON.parse(response);
        if (data.error) {
          responseDiv.empty().html('<div class="alert alert-error">'+data.msg+'</div>');
          // You can add additional actions for success here
        } else {
          responseDiv.empty().html('<div class="alert alert-sucess">'+data.msg+'</div>');
          form.get(0).reset();
        }
        form.find('[type="submit"]').prop('disabled', false); 
      },
      error: function(error) {
        console.log('Error:', error);
        form.find('[type="submit"]').prop('disabled', false); 
      }
    });
  });


  // =================  Back-To-Top =============
  if ($('.progressCounter').length > 0){
    $(".progressCounter").progressScroll();
    $(".progressCounter").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $(document).on("ready", function() {
      var progressElements = $('.progressScroll');
      $(window).on("scroll", function() {
          // Check if the scroll position is greater than or equal to 50px
          if ($(this).scrollTop() >= 50) {
              // Add class 'progress-scroll-opacity-1' with smooth fadeIn animation
              progressElements.addClass('progress-scroll-opacity-1');
          } else {
              // Remove class 'progress-scroll-opacity-1' with smooth fadeOut animation
              progressElements.removeClass('progress-scroll-opacity-1');
          }
      });
    });
  }
  // =================  Back-To-Top =============


  // =================  Coustomizer closing =============
  if ($('[data-toggle="tooltip"]').length > 0){
    $(function () {
      $('[data-toggle="tooltip"]').tooltip({delay: { "show": 300, "hide": 300 }})
    })
  }
  // =================  Coustomizer closing ============= 


})(jQuery);

  document.addEventListener("DOMContentLoaded", function () {
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
        document.querySelectorAll('.hover-menu .nav-item.dropdown').forEach(function (everyitem) {
            everyitem.addEventListener('mouseover', function (e) {
                let el_link = this.querySelector('a[data-bs-toggle]');
                if (el_link !== null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    if (nextEl !== null && this.contains(nextEl)) {
                        nextEl.classList.add('show');
                    }
                }
            }.bind(everyitem)); // Explicitly bind the context to the current element
            everyitem.addEventListener('mouseleave', function (e) {
                let el_link = this.querySelector('a[data-bs-toggle]');
                if (el_link !== null) {
                    let nextEl = el_link.nextElementSibling;
                    if (nextEl !== null && this.contains(nextEl)) {
                        el_link.classList.remove('show');
                        nextEl.classList.remove('show');
                    }
                }
            }.bind(everyitem)); // Explicitly bind the context to the current element
        });
    }
    // end if innerWidth
  });