import 'normalize.css';
import '../styles/main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import showTab from './tabs';

showTab(0);

$('.portfolio__slider-wrapper').slick({
  // infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: '.portfolio__button-next',
  prevArrow: '.portfolio__button-prev',
  cssEase: 'ease',
  speed: 1000,
});

$('.portfolio__slider-wrapper').on(
  'beforeChange',
  function (event, slick, currentSlide, nextSlide) {
    $(this)
      .find('.slick-slide[data-slick-index="' + nextSlide + '"]')
      .addClass('portfolio__slide_active');
    $(this)
      .find('.slick-slide.slick-cloned div .portfolio__slide')
      .removeClass('portfolio__slide_active');
    $(this)
      .find('.slick-slide[data-slick-index="' + currentSlide + '"]')
      .removeClass('portfolio__slide_active');
  }
);
