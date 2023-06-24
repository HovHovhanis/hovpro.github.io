const burgerBtn = document.querySelector('.burger-menu');
const menuBurger = document.querySelector('.menu__burger');
const none = document.querySelector('.none')

burgerBtn.addEventListener('click', () => {
    menuBurger.classList.toggle('open');
})