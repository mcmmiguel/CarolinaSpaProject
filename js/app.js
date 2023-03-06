// Verificar para agregar un slider demo
// 1. Copiar el css del demo a implmentar
// 2. copiar el codigo js que contiene ese demo
// 3. los nombres concuerden con los que ellos tienen


var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });