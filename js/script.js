let hover = document.querySelectorAll('.img__ingredients')
let list = document.querySelectorAll('.ingredients__list')
let listClose = document.querySelector('.close__cross')
let burgerButton = document.querySelector('.burger__menu')
let tabletsMenu = document.querySelector('.menu--tablets')
let tabletsMenuClose = document.querySelector('.menu__close')

//работа гамбургер-меню на планшетах/телефонах

$(burgerButton).click( () => {
    $(tabletsMenu).toggleClass('visible');
    $(tabletsMenu).css('position', 'fixed');
  });

$(tabletsMenuClose).click( () => {
  $(tabletsMenu).toggleClass('visible');
});

// работа выпадающего меню с ингредиентами
$(hover).on('pointerenter', () => {
  $(list).css('opacity', '0.8');
  $(list).css('transition', '0.5s');
});

$(hover).on('pointerleave', () => {
  $(list).css('opacity', '0');
});
 
$(hover).on('touchstart', () => {
  $(list).css('opacity', '0.8');
  $(list).css('transition', '0.5s');
});

$(hover).on('touchend', () => {
  $(list).css('opacity', '0.8');
});

$(listClose).on('touchstart', () => {
  $(list).css('opacity', '0');
});

//модалка
  $(function () {

    $("[data-fancybox]").fancybox({
      slideClass : 'popup__layout'
    });

  })

//аккордеон 
  
$('.item__title').on('click', e => {
  const $this = $(e.currentTarget),
        item = $this.closest('.accordeon__item'),
        content = item.find('.item__info'),
        list = $this.closest('.accordeon__list'),
        items = list.find('.accordeon__item'),
        otherContent = list.find('.item__info'),
        title = item.find('.item__title'),
        titles = list.find('.item__title'),
        duration = 1000;

if (!item.hasClass('accordeon__item-active')) {
  items.removeClass('accordeon__item-active');
  item.addClass('accordeon__item-active');
  titles.removeClass('item__title-active');
  title.addClass('item__title-active');
  otherContent.stop(true, true).slideUp(duration);
  content.stop(true, true).slideDown(duration);
  content.css('display', 'flex');
} else {
  content.stop(true, true).slideUp(duration);
  item.toggleClass('accordeon__item-active');
  title.toggleClass('item__title-active');
}
});

//слайдер

let moveSlide = (container, slideNum) => {
  let items = container.find('.slider__content'),
  activeSlide = items.filter('.slider__content--active'),
  reqItem = items.eq(slideNum),
  reqIndex = reqItem.index(),
  list = container.find('.slider__list'),
  duration = 0;
  

if (reqItem.length) {
  list.animate({
    'left': -reqIndex * 100 + '%'
  }, duration, function() {
    activeSlide.removeClass('slider__content--active');
    reqItem.addClass('slider__content--active');
  });
}
}

$('.scroll__link').on('click', function(e) {

  e.preventDefault();

  let $this = $(this),
      container = $this.closest('.slider'),
      items = container.find('.slider__content'),
      activeItem = items.filter('.slider__content--active'),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev();
 
    
      if ($this.hasClass('scroll__link--right')) {
        if (nextItem.length) {
          moveSlide(container, nextItem.index());    
        } else {
          moveSlide(container, items.first().index());
        }
            
      } else {
        if (prevItem.length) {
          moveSlide(container, prevItem.index());   
        } else {
          moveSlide(container, items.last().index());
        }             
      }
});


//вертикальный слайдер в секции Меню

$('.acco__item').on('click', (e) => {

  let $this = $(e.target),
      container = $this.closest('.acco'),
      items = container.find('.acco__item'),
      activeItem = items.filter('.acco__item--active'),
      item = $this.closest('.acco__item'),
      title = item.find('.acco__item-title'),
      titleList = container.find('.acco__item-title'),
      text = item.find('.acco__item-text');
      

      if (!item.hasClass('acco__item--active')) {
        items.removeClass('acco__item--active');
        item.addClass('acco__item--active');
      } else {
        item.toggleClass('acco__item--active');
      }
      
      if (!title.hasClass('acco__item-title--active')) {
        titleList.removeClass('acco__item-title--active');
        title.addClass('acco__item-title--active');
      } else {
        title.toggleClass('acco__item-title--active');
      }

});

//прокрутка страниц 

$(".main").onepage_scroll({
   
});

// пагинация 



  let paginatorList = document.getElementsByClassName('paginator__list');
  let paginatorItem = document.querySelectorAll('.paginator__link');
  let paginatorItemNext = $(paginatorItem).next();
  let paginatorItemPrev = $(paginatorItem).prev();
  let section = document.getElementsByTagName("section");
  

  if ($(section).hasClass('active')) {
    $(paginatorList).removeClass('paginator__link-active');
    $(paginatorItem).addClass('paginator__link-active');
    
  } else {
    $(paginatorItem).toggleClass('paginator__link-active');
    console.log(paginatorItem[i])
  }
  

