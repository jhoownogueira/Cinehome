const sliderPrincipal = new Swiper(".content-slides", {
  loop: true,
  loopedSlides: 20,
  observer: true,
  shortSwipes: false,
  longSwipes: false,
  autoHeight: true,
  observeParents: true,
  effect: "fade",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const sliderVideos = new Swiper(".slider-videos", {
  observer: true,
  observeParents: true,
  slidesPerView: 1.4,
  spaceBetween: 8,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 1.8,
      spaceBetween: 16,
    },
    800: {
      slidesPerView: 2.2,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 16,
    },
    1278: {
      slidesPerView: 4.2,
      spaceBetween: 16,
    },
    1366: {
      slidesPerView: 4.8,
      spaceBetween: 16,
    },
    1512: {
      slidesPerView: 7.5,
      spaceBetween: 0,
    },
  },
});