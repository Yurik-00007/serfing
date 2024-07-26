$(function () {
  var mixer = mixitup('.gallery__content')
  Fancybox.bind("[data-fancybox]", {})
  $('.blog-slider__items').slick({
    dots: true,
    arrows:false
  });

})