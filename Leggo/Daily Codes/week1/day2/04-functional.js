document.querySelector('h1').innerText = "JS - Functional";

/**
 * Functional Javascript
 *
 * Alternative programming paradigm possible w/ JS
 * Instead of objects we build our pieces of software with functions
 * Rules: purity, immutability, functions as regular values
 */

// ! 1. Pure functions have to return the same value for the same input and they have no side effects
function add(n1, n2) {
    return n1 + n2;
}
// console.log("Test 1 should be 6 ", add(2, 4));


function impureAdd(n1) {
    return n1 + Math.random();
}
// console.log("Test 1 should be 2.312312", impureAdd(2));


// ! 2. Functions are first class citizens, they can be treated as any other type(boolean, string, ...) 
// they can be saved into variables, passed as arguments(callbacks), return from another functions(HOF), ...
function hello(name) {
    console.log(`Hello ${name}`);
}
const helloFn = hello;

function returnHello(name) {
    return helloFn
}
const returnedFunction = returnHello
returnedFunction('Peter');


// * Callbacks: Functions that we pass to be call later
// function iterator(item) {
//   console.log(item);
// };
// iterator(4)
// [1,2,3,4].forEach(iterator);


// * HOF: High Order Functions
function createMultiplier(num) {
  
  return function(num2) {
    return num * num2;
  }
}
const multiplyByFive = createMultiplier(5);
const multiplyByThree = createMultiplier(3);

console.log(createMultiplier(5)); // 25 | 15 | function()

// multiplyByFive(4); // 20;
// multiplyByFive(8); // 20;
// multiplyByFive(9); // 45;
// multiplyByThree(3); // 9
// multiplyByThree(5); // 15




// ! 3. Immutability
const values = [10, 20, 30];
function add10ToEachElement(arr) {
    const clonedArr = [...arr];
    for (let index = 0; index < clonedArr.length; index++) {
        clonedArr[index] += 10;
    }
    return clonedArr;
}

// console.log(values);
// console.log(add10ToEachElement(values));
// console.log(values);
//

let obj = {name: 'Peter'}
obj.age = 22;

obj = {
  name: 'Peter',
  age: 22,
}