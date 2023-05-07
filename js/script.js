/* const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
    hamburger.style.opacity = '0';
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    hamburger.style.opacity = '1';
});

menu.addEventListener('click', (event) => {
    if(event.target !== event.currentTarget) return;
    menu.classList.remove('menu_active');
    hamburger.style.opacity = '1';
}) */

const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('mobile_active')
    overlay.classList.add('overlay_active')
})

close.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile_active')
    overlay.classList.remove('overlay_active')
})