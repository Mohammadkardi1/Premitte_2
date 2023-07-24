const navbarTogglers = document.querySelectorAll('.nav-toggler');
const navbarCollapse = document.querySelector('.nav-collapse');

navbarTogglers.forEach(function(navbarToggler) {
  navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
  });
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: getSlidesPerView(),
  spaceBetween: getSpaceBetween(),
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.params.slidesPerView = getSlidesPerView();
      swiper.params.spaceBetween = getSpaceBetween();
      swiper.update();
    },
  },
});


function getSlidesPerView() {
  var windowWidth = window.innerWidth;
  if (windowWidth <= 576) {
    return 1 
  } else if (windowWidth > 576 && windowWidth <= 760 ) {
    return 2
  } else {
    return 3
  }
}

function getSpaceBetween() {
  var windowWidth = window.innerWidth;
  return windowWidth <= 760 ? 20 : 30;
}





