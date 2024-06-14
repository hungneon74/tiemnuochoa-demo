// cart
const openCarts = document.querySelectorAll('.js-open-cart')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')

function showCarts() {
    modal.classList.add('open-overlay-with-cart')
}

function hideCarts() {
    modal.classList.remove('open-overlay-with-cart')
}
for (const openCart of openCarts) {
    openCart.addEventListener('click', showCarts)
}
modalClose.addEventListener('click', hideCarts)