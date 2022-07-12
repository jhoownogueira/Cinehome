var swiper = new Swiper(".content-slides", {
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
    slidesPerView: 5,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


const menuHamburguer = document.querySelector('.menu-hamburguer');
const btnHamburguer = document.getElementById('btn-hamburguer');

btnHamburguer.addEventListener('click', () => {
    toggleClass(menuHamburguer);
})

function toggleClass(item) {
    item.classList.toggle('active');
}