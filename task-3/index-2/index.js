//хардкодим количество слайдов
const count = 3;

//функция для вызова следующего слайда
function setNextSlide() {
  //находим активный слайд по селектору
  const activeSlide = document.querySelector(".slide_active");

  //индекс активного слайда
  const index = +activeSlide.getAttribute("data-number");

  //индекс следующего слайда
  const nextIndex = index + 1 < count ? index + 1 : 0;

  //выключаем прошлый активный слайд путем удаления класса
  activeSlide.classList.remove("slide_active");

  //включаем следующий активный слайд путем добавления класс
  document
    .querySelector(`[data-number="${nextIndex}"]`)
    .classList.add("slide_active");
}

//функция для вызова предыдущего слайда
function setPrevSlide() {
  const activeSlide = document.querySelector(".slide_active");
  const index = +activeSlide.getAttribute("data-number");

  const nextIndex = index === 0 ? count - 1 : index - 1;

  activeSlide.classList.remove("slide_active");

  document
    .querySelector(`[data-number="${nextIndex}"]`)
    .classList.add("slide_active");
}

//таймер для смены слайда
setInterval(setNextSlide, 3000);
