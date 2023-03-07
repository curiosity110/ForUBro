/*
You will create a program that takes a sentence, then search for a word in it and replaces it for a new one while preserving the uppercase if there is one.
*/


function myReplace(str, before, after) {
    let stringArray = str.split(" ");
    for (let i = 0; i <= stringArray.length - 1; i++) {
        let firstChar = stringArray[i].charAt(0);

        if (stringArray[i].toLowerCase() === before.toLowerCase()) {
            if (firstChar === firstChar.toUpperCase()) {
                stringArray = stringArray
                    .join(" ")
                    .replace(
                        stringArray[i],
                        after.charAt(0).toUpperCase() + after.slice(1)
                    );
            } else {
                stringArray = stringArray.join(" ").replace(stringArray[i], after);
            }
        }
    }
    return stringArray;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));