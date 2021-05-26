document.addEventListener('DOMContentLoaded', () => {
    
    const moreElems = document.querySelectorAll('.more');
    const modalWindow = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.modal__close');

    const openModal = () => {
        modalWindow.classList.remove('hidden'); 
        disableScroll();
    }

    const closeModal = () => {
        modalWindow.classList.add('hidden');
        enabledScroll();
    }

    moreElems.forEach((btn) => {
        btn.addEventListener('click', openModal);
    })

    overlay.addEventListener('click', closeModal);
    closeButton.addEventListener('click', closeModal);
})
