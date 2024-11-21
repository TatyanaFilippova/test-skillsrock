function debounce(func, delay) {
  //переменная таймера
  let timer;
  return function executedFunc() {
    //фиксируем контекст и аргументы
    const context = this;
    const args = arguments;

    // сбрасываем предыдущий таймер
    clearTimeout(timer);
    // вызываем функцию по истичению времени и оьновляем таймер
    timer = setTimeout(() => func.apply(context, args), delay);
  };
}

const time = 2000;

const debouncedFunction = debounce(() => {
  console.log("Вызвана функция с задержкой");
}, time);

debouncedFunction();

setTimeout(() => {
  debouncedFunction();
}, 5000);
