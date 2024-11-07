export function scrollToNode() {
    //Перехід для кнопки "Замовити зараз" в хедері
    const toShopButton = document.querySelector('.to-shop');
    const headerBlock = document.querySelector('header');
    const goodsBlock = document.querySelector('.goods');
    const spaceBlockAfterGoodsBlock = document.querySelector('.space-block');
    toShopButton.addEventListener('click', (event) => {
        window.scrollTo({
            top: goodsBlock.scrollHeight + spaceBlockAfterGoodsBlock.scrollHeight + headerBlock.scrollHeight,
            behavior: "smooth",
        });
    });



    //Перехід для кнопки "Список товарів" в хедері
    const supportUsButton = document.querySelectorAll('.__goods-li');
    supportUsButton.forEach(button => {
        button.addEventListener('click', (event) => {
        window.scrollTo({
            top: headerBlock.scrollHeight,
            behavior: "smooth",
        });
    });
});

    //Перехід для кнопки "Про нас" в хедері
    const aboutUsButton = document.querySelectorAll('.__about-us');
    const footer = document.querySelector("footer");
    const main = document.querySelector('main');
    aboutUsButton.forEach(button =>{
        button.addEventListener('click', (event) => {
            window.scrollTo({
                top: headerBlock.scrollHeight + footer.scrollHeight + main.scrollHeight,
                behavior: "smooth",
            });
        });
    })
}

export function goodsTypeAppearance() {
    const goodsTipesCards = document.querySelectorAll('.goods__card');
    const userClientHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 0.2 * userClientHeight) {
            goodsTipesCards.forEach(card => {
                card.classList.add('goods__card-animate');
            });
        }
    });
}
