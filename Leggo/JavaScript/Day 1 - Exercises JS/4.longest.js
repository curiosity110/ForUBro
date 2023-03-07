/*
### Sort and remove duplicated characters

Take 2 strings s1 and s2 including only letters from a to z.

Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

*/

// ES5 Version I
function longest(a, b) {
  let ab = a + b;
  let newArr = [];
  for (let i = 0; i < ab.length; i++) {
    if (newArr.indexOf(ab[i]) === -1) {
      newArr.push(ab[i]);
    }
  }
  return newArr.sort().join("");
}

// ES6
longestES6 = (a, b) => {
  const ab = a + b;
  let newArr = [];
  for (const letter of ab) {
    newArr.indexOf(letter) === -1 ? newArr.push(letter) : null
  }
  return newArr.sort().join("");
};

// ES6
const longestES6II = (arg1, arg2) => [...new Set(arg1 + arg2)].sort().join('');

console.log(longest('abcccaa', 'acddddffzzz')); // => 'abcdfz'
console.log(longestES6('abcccaa', 'acddddffzzz')); // => 'abcdfz'

a = 'xyaabbbccccdefww';
b = 'xxxxyyyyabklmopq';

console.log(longest(a, b)); // => 'abcdefklmopqwxy'
console.log(longestES6(a, b)); // => 'abcdefklmopqwxy'

a = 'abcdefghijklmnopqrstuvwxyz';
console.log(longest(a, a)); // => 'abcdefghijklmnopqrstuvwxyz'
console.log(longestES6(a, a)); // => 'abcdefghijklmnopqrstuvwxyz'

console.log(longest(a, a)); // => 'abcdefghijklmnopqrstuvwxyz'
console.log(longestES6II(a, a)); // => 'abcdefghijklmnopqrstuvwxyz'


