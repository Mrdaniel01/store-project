const $cart = document.getElementById('cart');
const $overlay = document.getElementById('overlay');
const $cartOpenButton = document.getElementById('cartOpenButton');
const $closeCart = document.getElementById('closeCart');

$cartOpenButton.addEventListener('click', (e) => {
  $cart.style.visibility = 'visible';
  $overlay.style.visibility = 'visible';
});

$closeCart.addEventListener('click', (e) => {
  $cart.style.visibility = 'hidden';
  $overlay.style.visibility = 'hidden';
});

$overlay.addEventListener('click', (e) => {
  $cart.style.visibility = 'hidden';
  $overlay.style.visibility = 'hidden';
})