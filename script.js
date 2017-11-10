let hover = document.querySelector('.img__ingredients')
let list = document.querySelector('.ingredients__list')

hover.addEventListener('pointerenter', function(e) {
  list.style.opacity = 1;
});

hover.addEventListener('pointerleave', function(e) {
  list.style.opacity = 0;
});
