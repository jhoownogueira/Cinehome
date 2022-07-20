const menuHamburguer = document.querySelector('.menu-hamburguer');
const btnHamburguer = document.getElementById('btn-hamburguer');

btnHamburguer.addEventListener('click', () => {
    toggleClass(menuHamburguer);
})

function toggleClass(item) {
    item.classList.toggle('active');
}