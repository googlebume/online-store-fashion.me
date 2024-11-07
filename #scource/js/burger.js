export function showBurger() {
    const burgerButton = document.querySelector('.top-menu__burger');
    const burgerMenu = document.querySelector('.burger__menu');
    const burgerSpan = document.querySelector('.burger');
    addEventListener('click', function clickInBurger(event) {
        if (event.target.closest('.top-menu__burger')) {
            burgerMenu.classList.toggle('__burger-menu-active');
            burgerButton.classList.toggle('__burger-color-active');
            burgerSpan.classList.toggle('__close-burger');
        }
    });

}