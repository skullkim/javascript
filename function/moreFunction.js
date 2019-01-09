// function sayHello(name, age){
//     return `Hello ${name} you are ${age} years old`;
// }
// const returnSayHello = sayHello("skullKim", 21);
// console.log(returnSayHello);

const calculator = {
    plus: function(a, b){
        return a+b;
    },
    multiplication: function(a, b){
        return a*b;
    },
    devide: function(a, b){
        return a/b;
    },
    square: function(a, b){
        return a**b;
    }

}
const plus = calculator.plus(5, 5);
const multiplication = calculator.multiplication(5, 5);
const devide = calculator.devide(5, 5);
const square = calculator.square(5, 5);
console.log(plus);
console.log(multiplication);
console.log(devide);
console.log(square);