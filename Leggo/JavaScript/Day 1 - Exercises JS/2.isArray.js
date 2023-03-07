/*
### isArray

Create a function that returns `true` when the parameter passed is a string and `false` otherwise.

*/

// es5 Version One
function isArray(arr) {
    if (Array.isArray(arr)) {
        return true
    } else {
        return false
    }
}

// es5 Version Two
function isArray(arr) {
    return Array.isArray(arr);
}

// es6
const isArrayES6 = arr => Array.isArray(arr);

console.log(isArray('hello')); // => false
console.log(isArray(['hello'])); // => true
console.log(isArray([2, {}, 10])); // => true
console.log(isArray({ a: 2 })); // => false

console.log(isArrayES6('hello')); // => false
console.log(isArrayES6(['hello'])); // => true
console.log(isArrayES6([2, {}, 10])); // => true
console.log(isArrayES6({ a: 2 })); // => false

