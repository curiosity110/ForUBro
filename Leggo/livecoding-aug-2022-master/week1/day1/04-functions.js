document.querySelector('h1').innerText = "Functions";

// Arrow functions
// * Function expression -> no hoisting and anonymous
// * No context binding -> Tomorrow more
// * Do not have arguments object

function greet() {
  console.log(arguments);
  console.log('greeting')
}

// spread operator to behave similar as arguments
const hi = (...args) => {
  console.log(args);
  console.log('hiing');
}
// greet(1, 2, 'hello');
// hi(1, 2, 'hello');







// const sum = (a, b) => {
//   const result = a + b;
//   return result;
// }
// const sum = (a, b) => {
//   return  a + b;
// }

// parameters
// arguments
// const result = sum(2, 3);
// const sum = (a, b) => a + b;
// console.log(`The result is: ${result}`); // The result is: 5 | Error | The result is: undefined


// Iterative
function countToXIterative(end) {
  for (let i = 0; i < end; i++) {
    console.log(i);
  }
}
// countToXIterative(10);


// Recursion
function countToXRecursive(count, end) {
  if (count === end) return;
  console.log(count);
  
  countToXRecursive(count + 1, end);
}

countToXRecursive(0, 10);
