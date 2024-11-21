function deepClone(obj) {
  //превращаем объект в массив ключей
  const keys = Object.keys(obj);
  //создаем объект для клонированных свойств
  const result = {};
  //перебираем все ключи
  for (const key of keys) {
    const value = obj[key];
    //проверяем тип и если "объект", то делаем его глубокое клонирование, иначе просто возвращаем
    switch (typeof value) {
      case "object": {
        result[key] = deepClone(value);
        break;
      }
      default: {
        result[key] = value;
        break;
      }
    }
  }
  return result;
}

const original = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};
const copy = deepClone(original);
copy.address.city = "Los Angeles";
console.log(original.address.city);
console.log(copy.address.city);
// Los Angeles
