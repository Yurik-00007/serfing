$(function () {
  Fancybox.bind("[data-fancybox]", {})
  $('.blog-slider__items').slick({
    dots: true,
    arrows:false
  });

  $('.menu__btn').on('click', function (e) {
    $('.header__top-inner').toggleClass('header__top-inner--active')
  })

  var mixer = mixitup('.gallery__content')

})