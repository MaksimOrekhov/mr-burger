let hover = document.querySelector('.img__ingredients')
let list = document.querySelector('.ingredients__list')
let listClose = document.querySelector('.close__cross')
let burgerButton = document.querySelector('.burger__menu')
let tabletsMenu = document.querySelector('.menu--tablets')
let tabletsMenuClose = document.querySelector('.menu__close')

//работа гамбургер-меню на планшетах/телефонах
burgerButton.addEventListener('touchstart', function() {
  tabletsMenu.style.display = "block";
});

tabletsMenuClose.addEventListener('touchstart', function() {
  tabletsMenu.style.display = "none";
});

// работа выпадающего меню с ингредиентами
hover.addEventListener('pointerenter', function() {
  list.style.opacity = 1;
});

hover.addEventListener('pointerleave', function() {
  list.style.opacity = 0;
});

hover.addEventListener('touchstart', function() {
  list.style.opacity = 1;
});

hover.addEventListener('touchend', function() {
  list.style.opacity = 1;
});

listClose.addEventListener('touchstart', function() {
  list.style.opacity = 0;
});