/*

You need to create a program that will translate from English to Pig Latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an “ay”.
If a word begins with a vowel you just add “way” to the end.
It might not be obvious but you need to remove all the consonants up to the first vowel in case the word does not start with a vowel.

*/

function translatePigLatin(word) {
  word = word.toLowerCase();
  if ("aeiou".includes(word[0])) {
    return word + "way";
  } else {
    while (!"aeiou".includes(word[0])) {
      word = word.substring(1) + word[0]
    }
    return word + "ay";
  }
}

console.log(translatePigLatin("glove"));
console.log(translatePigLatin("pig")); // igpay
