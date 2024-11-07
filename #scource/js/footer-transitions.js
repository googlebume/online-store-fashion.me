export function footerTransitions() {
    const buyerList = document.querySelector('.buyer__lis');
    const shopList = document.querySelector('.shop__lis');
    const infoColumns = document.querySelector('.info__columns');

    infoColumns.addEventListener('click', function clickOnInfo(event) {
        if (event.target.closest('.info__buyer')) {
            buyerList.classList.toggle('info__lis__active');
        }
        if (event.target.closest('.info__shop')) {
            shopList.classList.toggle('info__lis__active');
        }
    });
}