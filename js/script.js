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

  let $this = $(e.currentTarget),
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

// let section = document.getElementsByTagName('section'),
//     currentSection = section.find('.active'),
//     nextSection = currentSection.next(),
//     prevSection = currentSection.prev();

// currentSection.scroll( () => {

  // if (!currentSection.hasClass('active')) {
  //   section.removeClass('active');
  // } else {
  //   section.toggleClass('active');
  // }
  // if($(window).scrollTop()+$(window).height()>=$(document).height()){
  //   section.removeClass('active');
  //   } else {
  //     section.toggleClass('active');
  //   }

// });

$(".main").onepage_scroll({
  sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
  pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
  loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true,                  // You can activate the keyboard controls
  responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                   // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                   // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

