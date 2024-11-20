function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // в начале проверяю совместное деление на 3 и 5
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      // иначе если только на 3 делится
      console.log("Fizz");
    } else if (i % 5 === 0) {
      // иначе если только на 5 делится
      console.log("Buzz");
    } else console.log(i);
  }
}

fizzBuzz();
