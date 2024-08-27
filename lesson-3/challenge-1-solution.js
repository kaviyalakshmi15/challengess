
const myBoolean = true;

const myString = 'hello world';

const firstNumber = 20;

let secondNumber = 40;

secondNumber = 80;

const myArray = [myBoolean, myString];

const myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber
};

console.log(myObject);

const sumProp = myObject.sumProperty;
console.log(sumProp);

console.log(myObject.firstProperty[1]);
