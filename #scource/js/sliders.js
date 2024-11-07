export function mayLikeSlider() {
    document.addEventListener('DOMContentLoaded', () => {
        const cardsContainer = document.querySelector('.may-like__cards');
        const cardWidth = document.querySelector('.may-like__card').offsetWidth;
        const gap = 50; // Розмір відступу між картками
    
        document.querySelector('.may-like__arrow-left').addEventListener('click', () => {
            cardsContainer.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
        });
    
        document.querySelector('.may-like__arrow-right').addEventListener('click', () => {
            cardsContainer.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        });
    });
    
}