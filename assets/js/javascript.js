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
  
  });