const value = 400
// console.log(value)

const anotherValue = new Number(200)
// console.log(anotherValue);

// console.log(anotherValue.toString());
// console.log(anotherValue.toString().length);
// console.log(anotherValue.toFixed(2));

const number = 143.492757
// console.log(number.toPrecision(4));


const anotherNumber = 100000000
// console.log(anotherNumber.toLocaleString('en-IN'));


// ============================= Maths ===========================
/*
console.log(Math);
console.log(Math.abs(-5)); //change negative value into positive
console.log(Math.round(3.56)); //round-off the decimal value
console.log(Math.ceil(4.2)); //if there is 0.1value in integer value so the value will increase after round-off
console.log(Math.floor(4.6)); //value after decimal will removed, round-off will be the integer what ever is given
console.log(Math.sqrt(5)); //sqaure-root of 5 (under-root 5)
console.log(Math.min(3,6,8,9,1)); //calculate the minimum value
console.log(Math.max(3,6,8,9,1)); //calculate the maximum value
*/

console.log(Math.random());
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min)) + min);