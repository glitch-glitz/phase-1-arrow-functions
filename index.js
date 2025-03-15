const dogName = (name, breed) => ["Kyle + Poo", "Chihuahua"];
console.log(dogName());

//When to use arrow function
//1.iteration methods
const numbers = [1, 2, 3];
const squares = numbers.map((x) => x ** 2);
console.log(squares);
console.log(numbers);

//LABWORK
const divide = function (a, b) {
  return a / b;
};

const square = (x) => x ** 2;

const add = (a, b) => a + b;
