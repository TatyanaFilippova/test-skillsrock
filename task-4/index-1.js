class Calculator {
  constructor() {}
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) throw Error('Ошибка. Деление на ноль')
    return a/b
  }
}

const calculator = new Calculator()

console.log(calculator.add(2,3))