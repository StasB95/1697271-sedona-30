var popup = document.querySelector('.registration');
var openPopupButton = document.querySelector('.button-search-hotel');

openPopupButton.addEventListener('click', function () {
    console.log('Клик по кнопке');
    popup.classList.add('modal--show');
});