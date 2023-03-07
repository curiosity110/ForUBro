/*
### Exponentiation
  
Write a function that takes two integers. The first one will be the base `b` and the second one `n` will be the exponent.

The function should return the value of `b` raised to the power `n`.

Try to solve it with recursion.

You can try first with a loop and then try to implement the recursive approach.

*/

function exp(num, base) {
  if (base === 0) {
    return 1;
  }
  return num * exp(num, base - 1);
}



expES6 = (num, base) => base === 0 ? 1 : num * exp(num, base - 1)

console.log(exp(5, 3)); // => 125
console.log(exp(2, 4)); // => 16
console.log(exp(5, 1)); // => 5
console.log(exp(6, 0)); // => 1

console.log("-----------------------")

console.log(expES6(5, 3)); // => 125
console.log(expES6(2, 4)); // => 16
console.log(expES6(5, 1)); // => 5
console.log(expES6(6, 0)); // => 1
