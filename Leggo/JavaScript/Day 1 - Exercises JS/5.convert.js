/*
### Convert number to reversed array of digits

Given a random number. You have to return the digits of this number within an array in reverse order.

*/

// es5
function convert(n) {
    let newArr = ("" + n).split("");
    let numbs = [];
    for (let i = 0; i < newArr.length; i++) {
        numbs.push(parseInt(newArr[i]));
    }
    return numbs.sort().reverse();
}

// es6
convertFunctionalAndES6 = num => num.toString().split('').map(Math.floor).sort().reverse();



console.log(convertFunctionalAndES6(429563)); // => [9, 6, 5, 4, 3, 2]
console.log(convertFunctionalAndES6(324)); // => [4, 3, 2]


console.log(convert(429563)); // => [9, 6, 5, 4, 3, 2]
console.log(convert(324)); // => [4, 3, 2]