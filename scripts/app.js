import 'normalize.css';
import '../styles/main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import showTab from './tabs';

const popup = document.querySelector('.popup');
const headerButton = document.querySelector('.header__button');
const popupClose = document.querySelector('.popup__close');
const headerWrapper = document.querySelector('.header__wrapper');
const servicesPaddingTop = 150;
const services = document.querySelector('.services');
const fixedHeader = services.offsetTop - servicesPaddingTop;

const openPopup = (popup) => {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closePopupEsc);
  document.body.classList.add('modal-open');
  headerWrapper.style.visibility = 'hidden';
};

const closePopup = (popup) => {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closePopupEsc);
  document.body.classList.remove('modal-open');
  headerWrapper.style.visibility = 'visible';
};

const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_open');
    closePopup(popup);
  }
};

const popupCloseOverlay = (event, popup) => {
  if (event.target === event.currentTarget) {
    closePopup(popup);
  }
};

showTab(0);

$('.portfolio__slider-wrapper').slick({
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

$('.clients__slides').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: '.clients__button-next',
  prevArrow: '.clients__button-prev',
  cssEase: 'ease',
  speed: 500,
});

const visibleScrollMenu = () => {
  if (window.pageYOffset > fixedHeader) {
    headerWrapper.classList.add('header__wrapper_fixed');
    services.style.paddingTop = '150px';
  } else {
    headerWrapper.classList.remove('header__wrapper_fixed');
    services.style.paddingTop = '100px';
  }
};

window.onscroll = function () {
  visibleScrollMenu();
};

headerButton.addEventListener('click', () => openPopup(popup));
popupClose.addEventListener('click', () => closePopup(popup));
popup.addEventListener('click', (event) => popupCloseOverlay(event, popup));
