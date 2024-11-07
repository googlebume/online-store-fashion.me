export function openConstructorPopup() {
    document.querySelector('.submitCompleate').addEventListener('click', function() {
        const popup = document.getElementById('popupPurchase');
        const popupBody = document.getElementById('popupBody');

        // Відображення модального вікна з анімацією
        popup.classList.add('popup__open');
        setTimeout(() => {
            popupBody.classList.add('popup__body__animate');
        }, 10); // Затримка для плавної анімації

        // Закриття модального вікна через 2 секунди
        setTimeout(() => {
            popupBody.classList.remove('popup__body__animate');
            setTimeout(() => {
                popup.classList.remove('popup__open');
            }, 800); // Час для завершення анімації перед закриттям
        }, 2000);
    });
}

export function openFeedbackPopup() {
    document.addEventListener('DOMContentLoaded', () => {
        const feedbackButtons = document.querySelectorAll('.__feedback');
        const popup = document.querySelector('.popup__feedback');
        const popupBody = document.querySelector('.popup__body2');
        const body = document.querySelector('body');
        const wrapper = document.querySelector('.wrapper');

        if (feedbackButtons.length > 0 && popup && popupBody) { // Додаємо перевірку
            feedbackButtons.forEach(button => {
                button.addEventListener('click', event => {
                    popup.classList.toggle('__popup__feedback__open');
                    popupBody.classList.toggle('__popup__body__animate');
                    body.classList.toggle('stop-sctoll');
                    // if (event.target.closest('.__popup__feedback__open') ) {
                    //     popup.classList.remove('__popup__feedback__open');
                    //     popupBody.classList.remove('__popup__body__animate');
                    //     body.classList.remove('stop-sctoll');
                    // }
                });
            });
            document.addEventListener('click', function closeAllPopup(event){
                if (event.target.closest('.popup')) {
                    popup.classList.toggle('__popup__feedback__open');
                    popupBody.classList.toggle('__popup__body__animate');
                    body.classList.toggle('stop-sctoll');
                }
            });
        }
    });
}