$(function () {

  $(".menu a, .footer a").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });

  Fancybox.bind("[data-fancybox]", {})

  $('.blog-slider__items').slick({
    dots: true,
    arrows:false
  });

  $('.menu__btn, .menu a').on('click', function (e) {
    $('.header__top-inner').toggleClass('header__top-inner--active')
  })

  var mixer = mixitup('.gallery__content')

})