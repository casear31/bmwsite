document.addEventListener('DOMContentLoaded', () => {

    const tabsHandlerlElems = document.querySelectorAll('[data-tabs-handler]');
    const tabsFieldlElems = document.querySelectorAll('[data-tabs-field]');
    const designTitleElems = document.querySelectorAll('.design__title');

    tabsHandlerlElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const isActive = btn.classList.contains('design-list__item_active');
            const btnHandler = btn.getAttribute('data-tabs-handler');

            if (!isActive) {

                tabsHandlerlElems.forEach((handler) => {
                    handler.classList.remove('design-list__item_active')
                })

                tabsFieldlElems.forEach((field) => {
                    if (field.getAttribute('data-tabs-field') == btnHandler) {
                        field.classList.remove('hidden')
                    } else {
                        field.classList.add('hidden')
                    }
                })

                designTitleElems.forEach((title) => {
                    title.classList.add('hidden')
                })

                btn.classList.add('design-list__item_active');
                designTitleElems[index].classList.remove('hidden');
            }
        })
    })
})

