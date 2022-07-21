
var swiper = new Swiper(".content-slides", {
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  var swiper = new Swiper(".slider-videos", {
    observer: true,
    observeParents: true,
    slidesPerView: 1.1,
    spaceBetween: 0,
    loop: true,
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