/*
### isString

Create a function that returns `true` when the parameter passed is a string and `false` otherwise.

*/

function isString(string) {
    return typeof string === "string";
}

isStringES6 = string => typeof string === "string";

console.log(isString('hello')); // => true
console.log(isString(['hello'])); // => false
console.log(isString('this is a long sentence')); // => true
console.log(isString({
    a: 2
})); // => false

console.log("----------------------------------------------------")

console.log(isStringES6('hello')); // => true
console.log(isStringES6(['hello'])); // => false
console.log(isStringES6('this is a long sentence')); // => true
console.log(isStringES6({
    a: 2
})); // => false