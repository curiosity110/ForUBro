/*
### Count repetitions

You will be given an array of string:

['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']

Return an object where the keys are the string and the value for each key is how many
repetitions they have in the provided array

*/


// es5
function countRepetitions(elements) {
  const obj = {};
  for (const element of elements) {
    if (obj[element]) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  }
  return obj;
}

// es6
repetitionsES6 = elements => elements.reduce((acc, el) => {
  acc[el] ? acc[el] += 1 : acc[el] = 1;
  return acc
}, {});


const elements = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];
console.log(countRepetitions(elements)); // { kerouac: 2, fante: 3, buk: 2, hemingway: 1, hornby: 1 }
console.log(repetitionsES6(elements)); // { kerouac: 2, fante: 3, buk: 2, hemingway: 1, hornby: 1 }
