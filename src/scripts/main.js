/* global Swiper */
'use strict';
import '../styles/main.scss';

const swiper = new Swiper('.work-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // Від 320px до 374px — 1 слайд
    320: { slidesPerView: 2, spaceBetween: 10 },
    // Від 375px — 2 слайди (твій запит)
    375: { slidesPerView: 3, spaceBetween: 15 },
    // Від 768px — 2.5 або 3 слайди
    768: { slidesPerView: 2.5, spaceBetween: 20 },
    // Від 1200px — 3 слайди
    1200: { slidesPerView: 3, spaceBetween: 30 },
  },
});

// Логіка Бургера
const burgerBtn = document.querySelector('.nav__burger');
const navBar = document.querySelector('.nav__bar');

if (burgerBtn && navBar) {
  const toggleMenu = () => navBar.classList.toggle('active');
  const closeMenu = () => navBar.classList.remove('active');

  burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Зупиняємо спливання, щоб спрацював клік поза межами
    toggleMenu();
  });

  // Закриття по посиланням
  navBar.querySelectorAll('.nav__bar-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Закриття при кліку поза межами
  document.addEventListener('click', (e) => {
    if (!navBar.contains(e.target) && navBar.classList.contains('active')) {
      closeMenu();
    }
  });
}
