/*
    Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
    In other words, return the symmetric difference of the two arrays.
*/


function diffArray(array1, array2) {
    let combinedArray = array1.concat(array2);
    let resultArray = [];
    for (const el of combinedArray) {
        if (array1.indexOf(el) === -1 || array2.indexOf(el) === -1) {
            resultArray.push(el)
        }
    }
    return resultArray
}

const diffArrayES6 = (array1, array2) => {
    return [...array1, ...array2].filter(el => (array1.indexOf(el) === -1 || array2.indexOf(el) === -1))
};

console.log(diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
)); // [ 'pink wool', 'diorite' ]

console.log("-----------------------------");

console.log(diffArrayES6(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
)); // [ 'pink wool', 'diorite' ]
