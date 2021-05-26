//document.addEventListener(('DOMContentLoaded'), () => {
    
    const menu = document.querySelector('.menu');
    const hamburgerMenu = document.querySelector('.humburger-menu');

    const toggleMenu = () => {
        menu.classList.toggle('menu-active');
        hamburgerMenu.classList.toggle('humburger-menu-active');
    }

    hamburgerMenu.addEventListener('click', toggleMenu);

//})