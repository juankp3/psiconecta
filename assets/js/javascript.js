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

  var swiper = new Swiper(".swiper-help", {
    slidesPerView: 1,
    // spaceBetween: 10,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 1,
      },
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
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
      // 550: {
      //   slidesPerView: 1,
      // }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $("nav.header__rightcol").click(function(){
    if ($(this).hasClass('--active')){
      $(this).removeClass('--active')
      return false
    }
    $(this).addClass('--active')
    console.log('aaa')
  })

  });
