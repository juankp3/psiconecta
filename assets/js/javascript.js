window.onload = function () {
    const myelement = document.querySelectorAll('.faqs__title');
    myelement.forEach(el => el.addEventListener('click', event => {
        const closest = el.closest('li');
        if(closest.classList.contains('--active')){
            closest.classList.remove('--active');
            return false;
        }
        closest.classList.add('--active');
    }));
}


// LANDING WINTER - SWIPERJS
$(function() {

  var swiper = new Swiper(".mySwiper-winter", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiperBanner = new Swiper(".swiper-banner", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".swiper-help", {
    slidesPerView: 1,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper = new Swiper(".mySwiper-winter-therapy", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 1,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(".menu").click(function(){
    if ($(this).closest('.header__rightcol').hasClass('--active')){
      $(this).closest('.header__rightcol').removeClass('--active')
      return false
    }
    $(this).closest('.header__rightcol').addClass('--active')
  })

  $(".js_psicologo").click(function () {
    console.log('aaaa')
    $('.content_modal').addClass('--active')
  })

  $(".window_close").click(function () {
    $('.content_modal').removeClass('--active')
  })

});
