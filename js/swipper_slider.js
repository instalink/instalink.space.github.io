var swiper = new Swiper('.swiper-container', {
  spaceBetween: 100,
  // effect: "coverflow",
  effect: "flip",
  loop: false,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  autoplay: {
    delay: 5000,
  },
});
