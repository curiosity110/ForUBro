/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
 Please do not use .endsWith() method. Try to use one of the JavaScript substring methods instead.
*/

// ES5
function confirmEnding(str, end) {
    for (let i = 0; i <= str.length - end.length; i++) {
        if (str.substr(i, i + end.length) === end) {
            return true;
        }
    }
    return false;
}

// ES6
const confirmEndingES6 = (string, end) => string.lastIndexOf(end) + end.length >= string.length;


console.log(confirmEnding("Open sesame", "same")); // true
console.log(confirmEnding("Open sesame", "sam")); // false
console.log(confirmEnding("Open sesame", "e")); // true
console.log("-----------------------------------------");
console.log(confirmEndingES6("Open sesame", "same")); // true
console.log(confirmEndingES6("Open sesame", "sam")); // false
console.log(confirmEndingES6("Open sesame", "e")); // true
