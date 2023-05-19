import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");

burger.addEventListener("click", toggleActive);

function toggleActive() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  allowSlideNext: true,
  pagination: {
    el: ".slider-pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "pagination-bullet",
    bulletActiveClass: "pagination-bullet--active",
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: true,
  },
});
