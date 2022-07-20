var swiper = new Swiper(".content-slides", {
    observer: true,
    observeParents: true,
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".slider-videos", {
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });