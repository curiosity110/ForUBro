/*
### Cat and Mouse

You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump three characters. So:

*/

// ES5
function isCaught(sequence) {
  let jumpLength = 3;
  for (let i = 0; i < sequence.length; i++) {
    let chr = sequence[i];
    if (chr === 'C') {
      for (let j = i + 1; j <= i + jumpLength + 1; j++) {
        let chr2 = sequence[j];
        if (chr2 === 'm') {
          return true;
        }
      }
    }
  }
  return false;
}

const isCaughtES6 = sequence => sequence.indexOf('C') + 3 >= sequence.indexOf('m');

console.log(isCaught('C...m')); // => true
console.log(isCaught('..C..m')); // => true
console.log(isCaught('..C...m')); // => true
console.log(isCaught('C.....m')); // => false
console.log(isCaught('C.....m...')); // => false


console.log(isCaughtES6('C...m')); // => true
console.log(isCaughtES6('..C..m')); // => true
console.log(isCaughtES6('..C...m')); // => true
console.log(isCaughtES6('C.....m')); // => false
console.log(isCaughtES6('C.....m...')); // => false
