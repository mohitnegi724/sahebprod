$(document).ready(function () {
    $('.Clients-logos').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2,
        arrows: false,
        dots: false,
      	variableWidth: true,
        speed: 1500,
        cssEase: 'linear',
        pauseOnHover: false,
    });
    $('.BannerSlider').slick({
        slidesToShow: 12,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2,
        arrows: false,
        dots: false,
      	variableWidth: true,
        speed: 1000,
        cssEase: 'linear',
        pauseOnHover: false,
    });

    // Show Case Slider
      $('.showCaseNav').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false,
        dots: true,
        arrows:true,
        infinite: false,
        prevArrow: "<img class='a-left control-c prev slick-prev' id='left' src='./Media/icons/Arrow/left.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' id='right' src='./Media/icons/Arrow/right.png'>",
        centerMode: false,
        focusOnSelect: false,
          responsive: [{
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  draggable: true,
              }
          }]
        });
    

    var sliderIntervalRight, sliderIntervalLeft;
   $("#right").mouseover(function(){
        sliderInterval = setInterval(function(){
            $('.showCaseNav').slick('slickNext');
        },500);
    });
    $("#right").mouseleave(function(){
        clearInterval(sliderInterval);
    });

    $("#left").mouseover(function(){
        sliderIntervalLeft = setInterval(function(){
            $('.showCaseNav').slick('slickPrev');
        },500);
    });
    $("#left").mouseleave(function(){
        clearInterval(sliderIntervalLeft);
    });

    //Showcase
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});

// (() => {
//     const sliderEl = document.querySelector('.slider-1');
//     if (!sliderEl) {
//         return;
//     }
//     const slider = new Swiper(sliderEl, {
//         loop: false,
//         autoplay: {
//             delay: 5000,
//             disableOnInteraction: false
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// })();

