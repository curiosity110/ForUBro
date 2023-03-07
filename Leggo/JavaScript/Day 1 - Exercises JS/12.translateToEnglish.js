/*
This problem is very straight forward, you will get a string that will represent a sentence in binary code, and you need to translate that into words.
There is not direct way to do this so you will have to translate twice.
*/

// ES5
function toEnglish(str) {
    let binaryArray = str.split(" ");
    let sentence = '';
    for (let i = 0; i < binaryArray.length; i++) {
        sentence += String.fromCharCode(parseInt(binaryArray[i], 2).toString(10))
    }
    return sentence;
}

// ES6
const toEnglishES6 = str => str.split(" ").map(element => String.fromCharCode(parseInt(element, 2).toString(10))).join("");

console.log(
    toEnglish(
        "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    )
);

console.log("-------------------------------");

console.log(
    toEnglishES6(
        "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    )
);