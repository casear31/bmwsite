document.addEventListener('DOMContentLoaded', () => {

    const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
    

    smoothScrollElems.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const id = link.getAttribute('href').substring(1);
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            
            if (hamburgerMenu.classList.contains('humburger-menu-active')) {
                hamburgerMenu.classList.remove('humburger-menu-active');
                menu.classList.remove('menu-active')
            }
        })
    })
})