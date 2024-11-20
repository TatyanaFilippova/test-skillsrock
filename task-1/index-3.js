const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const size = 4;
function chunkArray(array, size) {
  const result = []; // массив для записи результата

  //пробегаюсь по исходному массиву с шагом size
  for (let i = 0; i < array.length; i += size) {
    const _array = array.slice(i, i + size); //создаю подмассив из отрезка

    result.push(_array); //записываю подмассив в результат
  }
  return result;
}
console.log(chunkArray(array, size));
