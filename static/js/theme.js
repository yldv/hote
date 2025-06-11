(function($) {
    "use strict";

    /*====================================
        comming soon page js
    ====================================*/
    if(document.getElementById('day1')){ 
        var deadline1 = new Date("december 30, 2025 23:59:59").getTime();
        var x = setInterval(function() {
            var currentTime = new Date().getTime();
            var t = deadline1 - currentTime;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("day1").innerHTML = days ;
            document.getElementById("hrs1").innerHTML = hours;
            document.getElementById("min1").innerHTML = minutes;
            document.getElementById("sec1").innerHTML = seconds;
            if (t < 0) {
                clearInterval(x);
                document.getElementById("day1").innerHTML = '0';
                document.getElementById("hrs1").innerHTML = '0';
                document.getElementById("min1").innerHTML = '0' ;
                document.getElementById("sec1").innerHTML = '0';
            }
        }, 1000);
    }

    /*====================================
        numberCounter js
    ====================================*/
    var $count_number = $(".count-number");
    $count_number.each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });

    /*==============================================================
        Fullscreen Height
    ==============================================================*/
    function resizefullscreen() {
        var minheight = $(window).height();
        $(".fullscreen").css('min-height', minheight);
    }
    $(window).on('resize', function () {
        resizefullscreen();
    });
    resizefullscreen();

    /*==============================================================
        preloader
    ==============================================================*/
    $(window).on('load', function() {
        $('.preloader').delay(500).fadeOut('slow');
    });

    $( '[name="tempadate"]' ).datepicker({
        prevText:"click for previous months",
        nextText:"click for next months",
        dateFormat: 'dd M',
        minDate:new Date(),
        changeMonth: true,
        changeYear: true,
        onSelect: function(dateText, inst) { 
            var date = $(this).datepicker('getDate'),
                day  = date.getDate(),  
                month = date.getMonth() + 1;
            $(this).html(date);
        }

    }).datepicker("setDate",'now');

	/*====================================
        mobile-menu js home-1
    ====================================*/
    $(".toggler-btn").on("click", function() {
        $("#mobile-menu").addClass('active');
        $(".bg-screen").addClass('active');
        $("body").addClass('hidden');
    });
    
    $(".menu-close button.menu-close-btn").on("click", function() {
        $("#mobile-menu").removeClass('active');
        $(".bg-screen").removeClass('active');
        $("body").removeClass('hidden');
    });

    /*====================================
        bg-screen js
    ====================================*/
    $(".bg-screen").on("click", function() {
        $(this).removeClass('active');
        $("#mobile-menu").removeClass('active');
        $(".side-content-block").removeClass('active');
        $("body").removeClass('hidden');
    });

    /*====================================
        service-img none-block
    ====================================*/
    $('.service-li').hover(function(){
      $('li.service-li ').removeClass("active");
      $(this).addClass("active");
    });

    /*====================================
        package button none-block
    ====================================*/
    $('.package-li').hover(function(){
      $('li.package-li ').removeClass("active");
      $(this).addClass("active");
    });

    /*====================================
        hotel button none-block
    ====================================*/
    $('.hotel-wrapper').hover(function(){
      $('.hotel-wrapper').removeClass("active");
      $(this).addClass("active");
    });

    /*====================================
        quantity js
    ====================================*/
    $('.ju-qty-adjust-plus').on("click", function() {
	  var th = $(this).closest('.js-qty-wrap').find('.js-qty-num');
	  th.val(+th.val() + 1);
	});
	$('.ju-qty-adjust-minus').on("click", function() {
	  var th = $(this).closest('.js-qty-wrap').find('.js-qty-num');
	    if (th.val() > 1) th.val(+th.val() - 1);
	});

    /*====================================
       video popup js
    ====================================*/
    $('.play-button').magnificPopup ({
        type: 'iframe',
        tClose: 'Close (Esc)',
        mainClass: 'mfp-fade',
        removalDelay: 160
    });

    /*====================================
        gallery js
    ====================================*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    /*====================================
        agree button js
    ====================================*/
    $('label.box-area').on('click', function () {
        if($('.cust-checkbox').is(':checked')) {
          $('.agree').removeClass('disabled');
        }
        else {
          $('.agree').addClass('disabled');
        }
    });

    /*====================================
        back-to-top js
    ====================================*/
    $('#top').on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /*====================================
        home-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#home-slider', {
        loop: false,
        rewind: true,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-homeslider',
            nextEl: '.swiper-next-homeslider'
        },
        pagination: {
            el: ".swiper-pagination-homeslider",
            clickable: true
        },
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true
        // },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1399: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                    spaceBetween: 30
                },
            }
        }
    });

    /*====================================
        about-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#about-slider', {
        rewind: true,
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: 'row' | 'column',
        },
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-about',
            nextEl: '.swiper-next-about',
        },
        pagination: {
            el: ".swiper-pagination-about",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1399: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                    spaceBetween: 30
                },
            }
        }
    });

    /*====================================
        hotel-slider js
    ====================================*/
    var $hotel_slider = $("#hotel-slider");
    $hotel_slider.owlCarousel({
        loop: true,
        items: 4,
        center: true,
        autoWidth:true,
        margin: 30,
        nav: false,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        navText: ['<i class="ri-arrow-left-line"></i>','<i class="ri-arrow-right-line"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 12,
                center:false,
                autoWidth:false
            },
            479: {
                items: 2,
                margin: 12
            },
            540: {
                items: 2,
                margin: 12
            },
            640: {
                items: 2,
                margin: 12
            },
            768: {
                items: 2,
                margin: 30
            },
            992: {
                items: 3,
                margin: 30
            },
            1200: {
                items: 4,
                margin: 30
            }
        }
    });
        
    /*====================================
        room details js
    ====================================*/
    var swiper = new Swiper('.swiper#details-slider', {
        loop: false,
        rewind: true,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-homeslider',
            nextEl: '.swiper-next-homeslider'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    /*====================================
        blog-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#blog-slider', {
        loop: false,
        rewind: true,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-blog',
            nextEl: '.swiper-next-blog'
        },
        pagination: {
            el: ".swiper-pagination-blog",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // ================================================================================= Home 2 ================================================================================= 

    /*====================================
        home-slider js
    ====================================*/
    $(".toggler-btn").on("click", function() {
        $(".side-content-block").addClass('active');
        $(".bg-screen").addClass('active');
        $("body").addClass('hidden');
    });
    $(".menu-close button.menu-close-btn").on("click", function() {
        $(".side-content-block").removeClass('active');
        $(".bg-screen").removeClass('active');
        $("body").removeClass('hidden');
    });

    /*====================================
        home-slider js
    ====================================*/
    $('.home-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.home-slider-small',
        adaptiveHeight: true,
    });
    $('.home-slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.home-slider-big',
        responsive: [{
            breakpoint: 640,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    /*====================================
        hotel-room js
    ====================================*/
    var swiper = new Swiper('.swiper#hotel-room', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 0
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 0
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 0
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 0
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 0
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 0
            }
        }
    });


    /*====================================
        hotel-feature js
    ====================================*/
    var swiper = new Swiper('.swiper#hotel-feature', {
        loop: true,
        rewind: true,
        slidesPerView: 2,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        testimonial js
    ====================================*/
    var $testimonial_slider = $("#testimonial-slider1");
        $testimonial_slider.owlCarousel({
            loop: true,
            items: 4,
            center:true,
            margin: 30,
            autoplay:true,
            autoplayTimeout: 5000,
            autoplayHoverPause:true,
            nav: false,
            navText: ['<i class="ri-arrow-left-line"></i>','<i class="ri-arrow-right-line"></i>'],
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 12
                },
                479: {
                    items: 1,
                    margin: 12
                },
                540: {
                    items: 1,
                    margin: 12
                },
                640: {
                    items: 1,
                    margin: 12
                },
                768: {
                    items: 1,
                    margin: 30
                },
                979: {
                    items: 1,
                    margin: 30
                },
                1199: {
                    items: 1,
                    margin: 30
                },
                1299: {
                    items: 1,
                    margin: 30
                },
                1499: {
                    items: 1,
                    margin: 30
                }
            }
        });


    /*====================================
        blog-slider js
    ====================================*/
    var $blog_slider = $("#blog-slider1");
        $blog_slider.owlCarousel({
        loop: true,
        items: 4,
        center: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: false,
        navText: ['<i class="ri-arrow-left-line"></i>','<i class="ri-arrow-right-line"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 12
            },
            479: {
                items: 1,
                margin: 12
            },
            540: {
                items: 1,
                margin: 12
            },
            640: {
                items: 2,
                margin: 12
            },
            768: {
                items: 2,
                margin: 30
            },
            1199: {
                items: 3,
                margin: 30
            },
            1299: {
                items: 3,
                margin: 30
            },
            1499: {
                items: 3,
                margin: 30
            }
        }
    });

    /*====================================
        blog-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#blog-area', {
        loop: false,
        rewind: true,
        slidesPerView: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        rtl: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });
    
    
    /*====================================
        wow js
    ====================================*/
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 90,
        mobile: false,
        live: true
    });
    wow.init();


    /*====================================
        testimonial-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#testimonial-slider', {
        loop: false,
        rewind: true,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // ================================================================================= promotions page ================================================================================= 
    /*====================================
        promotions block js
    ====================================*/
    var swiper = new Swiper('.swiper#promotions-slider', {
        loop: false,
        rewind: true,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // ================================================================================= membership page ================================================================================= 

    /*====================================
        membership js
    ====================================*/
    var swiper = new Swiper('.swiper#membership-slider', {
        loop: true,
        rewind: true,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        sticky header js
    ====================================*/
    var lastScrollTop = 0;
    $(window).on('scroll', () => {
        var scroll = $(window).scrollTop();
        if (scroll > lastScrollTop) {
            $('.header-area').addClass('sticky-down');
            $('.header-area').removeClass('sticky-up');
        } else {
          if (lastScrollTop <= 100) {
            $('.header-area').removeClass('sticky');
            $('.header-area').removeClass('sticky-down');
            $('.header-area').removeClass('sticky-up');
          } else {
            $('.header-area').addClass('sticky');
            $('.header-area').removeClass('sticky-down');
            $('.header-area').addClass('sticky-up');
          }
        }
        lastScrollTop = scroll;

        // back to top show //
        if ($(window).scrollTop() > 1000) {
            $('#top').fadeIn();
        } else {
           
            $('#top').fadeOut();
        }

        // header sticky show //
        var win_scroll = $(window).scrollTop();
        var height = $('.home-slider-area').height();
        
        if (win_scroll >= height) {
            $(".header-home").addClass("show-header");
        }else{
            $(".header-home").removeClass("show-header");
        }

        // services sticky show //

        var win_scroll = $(window).scrollTop();
        var height = $('.home-slider-area').height();
        
        if (win_scroll >= height) {
            $(".header-home").addClass("show-header");
        }else{
            $(".header-home").removeClass("show-header");
        }

    });

    // default back to top hide //
    $('#top').fadeOut();

})(jQuery);