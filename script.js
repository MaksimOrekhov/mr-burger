let hover = document.querySelector('.img__ingredients')
let list = document.querySelector('.ingredients__list')
let listClose = document.querySelector('.close__cross')

hover.addEventListener('pointerenter', function(e) {
  list.style.opacity = 1;
});

hover.addEventListener('pointerleave', function(e) {
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