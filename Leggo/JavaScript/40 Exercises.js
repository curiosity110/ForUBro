/*

### `myEach`

Define a `myEach` function that simulates the `forEach` method on `Array`

DO NOT USE `forEach` in the implementation.

*/

const myEach = (collection, fn) => {
    for (let i = 0; i < collection.length; i++) {
      fn(collection[i], i, collection);
    }
  }
  
  // myEach([1,2,5], function(el, index, arr) {
  //   console.log(index);
  //   console.log(el);
  //   console.log(arr);
  // });
  
  /*
  
  ### `myMap`
  
  Define a `myMap` function that simulates the `map` method on `Array`
  
  DO NOT USE `map`, but you can use your own `myEach`.
  
  */
  
  const myMap = (collection, fn) => {
    const result = [];
    myEach(collection, function(el, index, arr) {
      const newElement = fn(el, index, arr);
      result.push(newElement);
    });
  
    return result;
  }
  
  const numbers = myMap([2, 4, 6], function(el, index) {
    return el * index;
  });
  
  // console.log(numbers);
  
  /*
  
  ### `myFilter`
  
  Define a myFilter function that simulates the `filter` method on `Array`.
  
  DO NOT USE `filter`, but you can use your own `myEach`.
  
  */
  
  const myFilter = (collection, fn) => {
    const result = [];
    myEach(collection, function(el, index, arr) {
      if (fn(el, index, arr)) {
        result.push(el);
      }
    });
  
    return result;
  }
  
  const filtered = myFilter([2, 8, 5, 15], function(el, index) {
    return el % index === 0;
  });
  
  // console.log(filtered);
  
  /*
  
  //   Merge
  
  */
  
  const merge = (...args) => {
    let Obj = {};
    args.forEach(obj => {
      for (let key in obj) {
        if (!Obj.hasOwnProperty(key)) {
          Obj[key] = obj[key];
        }
      }
    });
    return Obj;
  };
  
  // merge({ a: 3, b: 2 }, { a: 2, c: 4 }); // { a: 3, b: 2, c: 4 }
  // merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5}); // { a: 3, b: 2, c: 4, e: 8 }
  
  /*
  
  //   Invert
  
  */
  
  const invert = obj => {
    let newObj = {};
    for (k in obj) {
      newObj[obj[k]] = k;
    }
    return newObj;
  };
  // invert({ a: 3, b: 2 }); // { 2: 'b', 3: 'a' }
  
  
  // Object.values(obj); // ['Program Paradigm', 'JS', 'Browser']
  
  /*
  
  //   Rectangle Insertion
  
  */
  
  const createRect = rect => {
    return {
      left: Math.min(rect[0][0], rect[1][0]),
      right: Math.max(rect[0][0], rect[1][0]),
      bottom: Math.min(rect[0][1], rect[1][1]),
      top: Math.max(rect[0][1], rect[1][1])
    };
  };
  
  const intersect = (rect1, rect2) => {
    let firstRect = createRect(rect1);
    let secondRect = createRect(rect2);
  
    let left = Math.max(firstRect.left, secondRect.left);
    let right = Math.min(firstRect.right, secondRect.right);
    let bottom = Math.max(firstRect.bottom, secondRect.bottom);
    let top = Math.min(firstRect.top, secondRect.top);
  
    if (left > right || bottom > top) {
      return [];
    }
  
    return [[left, bottom], [right, top]];
  };
  
  // intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]]); // => [2, 2], [4, 3]
  // intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]]); // => [2, 1], [4, 4]
  
  // Min, Max, Length and Average
  
  const minMaxLengthAverage = arr => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const len = arr.length;
  
    //Reducer for get Average function
    const ave = arr => arr.reduce((acc, curVal) => acc + curVal, 0) / len;
    const average = ave(arr);
  
    //Return output
    return [min, max, len, average];
  }
  
  // Array of Multiples
  
  const arrayOfMultiples = (num, length) => {
      let output = []
      let multiple = 0
      for(i = 1; i < length + 1; i++) {
          multiple = num * i
          output.push(multiple)
      }
      return output
  }
  
  // Convert Key, Values to an array of arrays
  
  const objectToArray = obj => {
      let r = [];
    for (let i in obj) {
          r.push([i, obj[i]]);
      }
      return r;
  }
  
  // Print the Century
  
  const century = year => {
      const c = Math.floor((year - 1) / 100) + 1;
      return c + (c == 21 ? "st" : "th") + " century"
  }
  
  // Loves Me, Loves Me Not...
  
  const lovesMe = n => {
      let str = ""
      for (let i=0; i<n; i++) {
          let phrase = i%2===0? "Loves me, " : "Loves me not, "
          if (i === n-1) phrase = phrase.toUpperCase()
          str += phrase
      }
      return str.slice(0,-2)
  }
  
  // Adding a Function to the String Prototype
  
  String.prototype.swapCase = function () {
  let arr = this.split("");
      let newArr = [];
      for(let x of arr){
          if(x == x.toUpperCase()){
                 newArr.push(x.toLowerCase());  
          }else if(x == x.toLowerCase()){
                newArr.push(x.toUpperCase());
          }
      }
      return newArr.join("")
  }
  
  // Length of a Nested Array
  
  const getLength = (arr) => {
      let count = 0;
      arr.forEach(item => {
          if (Array.isArray(item)) {
              count += getLength(item);
          } else {
              count++;
          }
      });
      return count;
  }
  
  // Alphabet Looper
  
  const alphabetLooper = (alphabet) => {
    let i = -1;
    return () => {
      if(i === alphabet.length - 1) i = -1;
      letter = alphabet[++i];
      return console.log(letter);
    }
  }
  
  // Hashtags Generator
  
  const hashtagsGenerator = (str) => {
    return str ? 
      '#' + str.split(' ')
      .filter((arrayValue) => arrayValue !== '')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
      : false;
  }
  
  // RGB to Hexadecimal color converter
  
  const rgb = (r, g, b) => {            
    return [r, g, b].map(arg => {
      if(arg > 255) arg = 255;
      if(arg < 0) arg = 0;
      return arg.toString(16).length == 1 
        ? '0' + arg.toString(16).toUpperCase()
        : arg.toString(16).toUpperCase();
    }).join('');
  }
  
  // Smallest Digit
  
  const smallest = (number) => {
    let min = 10;
    let previousMin = min;
    let arr = [];
      [...number.toString()].forEach((num, index) => {
        num = parseInt(num);
        if(num <= min) {
          if(previousMin > num) {
            previousMin = num;
            arr.splice(0, arr.length);
            arr.push([num, index]);
          } else if(previousMin === num) arr.push([num, index]);
          min = num;
        }
      });
    return arr.length === 1 ? arr[0] : arr;
  }
  
  // Break Up Camel Case
  
  const breakUpCamelCase = (str) => {
    return str.split(/(?=[A-Z])/).join(' ');
  }
  
  // Format Duration
  
  const formatDuration = (timeInSeconds) => {
    const years = Math.floor(timeInSeconds / 31536000);
    const days = Math.floor((timeInSeconds - (years * 31536000)) / 86400);
    var hours = Math.floor((timeInSeconds - (years * 31536000) - (days * 86400)) / 3600);
    var minutes = Math.floor((timeInSeconds - (years * 31536000) - (days * 86400) - (hours * 3600)) / 60);
    var seconds = timeInSeconds - (years * 31536000) - (days * 86400) - (hours * 3600) - (minutes * 60);
  
    let DurationStringFormat = '';
    if (years !== 0) 
      years === 1 ? DurationStringFormat = `${years} year, ` : DurationStringFormat = `${years} years, `;
    if (days !== 0)
      days === 1 ? DurationStringFormat = `${days} day, ` : DurationStringFormat = `${days} days, `;
    if (hours !== 0)
      hours === 1 ? DurationStringFormat += `${hours} hour, ` : DurationStringFormat += `${hours} hours, `;
    if (minutes !== 0) 
      minutes === 1 ? DurationStringFormat += `${minutes} minute ` : DurationStringFormat += `${minutes} minutes `;
    if (seconds !== 0)
      seconds === 1 ? DurationStringFormat += `and ${seconds} second ` : DurationStringFormat += `and ${seconds} seconds `;
  
    return DurationStringFormat;
  }
  
  // Sort 2D Array
  
  const Sort2dArray = (array) => {
    const arrayLength = array[0].length;
    const sorted2dArray = [];
    let mergeArrays = [];
  
    array.forEach(arr => mergeArrays.push(...arr));
    mergeArrays = mergeArrays.sort();
  
    for (let i = 0, j = mergeArrays.length; i < j; i += arrayLength ) {
      sorted2dArray.push(mergeArrays.slice(i,i + arrayLength));
    }
    return sorted2dArray;
  }
  
  // Pyramid Longest Slide Down
  
  const pyramidLongestSlideDown = (array) => {
    const maxValues = [];
    let previousMaxIndex = 0;
    array.forEach(arr => {
      if (arr.length > 1)
        maxValues.push(Math.max(...arr.slice(previousMaxIndex , previousMaxIndex + 2)));
      else if (arr.length == 1) 
        maxValues.push(arr[0]);
  
      previousMaxIndex = arr.indexOf(maxValues[maxValues.length - 1]);
    });
    
    return `Slide length: ${maxValues.reduce((a,b) => a + b, 0)}\nSlide path: [ ${maxValues.join(' -> ')} ]`;
  }
  
  // ---------------------------------------------------------------------------------------
  // EXTRA EXERCISES 2020
  // ---------------------------------------------------------------------------------------
  
  /*
  
  Fake news !
  
  Create a "fakeNews" function that will count the number of fake news (boolean false) within the array.
  
  //     const news = [true, false, false, true, false, false, false, true, true, true]; 
  
  //     fakeNews(news); // "There is 5 fake news !"
  
  */
  
  const news = [true, false, false, true, false, false, false, true, true, true];
  
  // SOLUTION 
  const fakeNews = arr => "There is " + arr.filter(arg => arg === false).length + " fake news !";
  
  // console.log(fakeNews(news));
  
  /*
  
  The Echo
  
  Write a function that returns the same sentence minus two letters until only the first letter is left. Use recursion.
  
  //      const yodel = "Yodelayheeeeehooooo";
  
  //      checkEcho(yodel); // "Yodelayheeeeehooooo", "Yodelayheeeeehooo", "Yodelayheeeeeho", "Yodelayheeeee" ... until "Y"
  
  */
  
  const yodel = "Yodelayheeeeehooooo";
  
  // SOLUTION
  const checkEcho = str => {
  
      let oddOrEven = str.length % 2;
  
      if(oddOrEven > 0 && str.length === 1)
      {
          return str;
      } else if (!oddOrEven && str.length === 2) {
          return str.slice(0, -1);
      }
  
      return str + "\n" + checkEcho(str.slice(0, -2));
  }
  
  // console.log(checkEcho(yodel))
  
  /*
  
  Social distancing
  
  In OOP, create a class Distanciation that accept one argument: the radius. Based on this radius, you should be able to create 1 method to get the area of this security circle (PI*r^2) and another one to get the perimeter (2PI*r).
  
  //      const socialDistancing = new Distanciation(5);
  
  //      socialDistancing.getArea(); // 78.53
  
  //      socialDistancing.getPerimeter() // 31.41
  
  */
  
  // SOLUTION
  
  class Distanciation {
      constructor(radius){
          this.radius = radius;
      }
      
      getArea() {
          return (this.radius**2)*Math.PI;
      }
      
      getPerimeter() {
          return this.radius*(Math.PI*2);
      }	
  }
  
  const socialDistancing = new Distanciation(5);
  
  // console.log(socialDistancing.getArea(), socialDistancing.getPerimeter());
  
  /*
  
  Create a calculator
  
  Create a calculator that allows a user to send 2 numbers, the type of operation and return the result.
  
  //      calculator(2, 10, "+"); // 12
  
  //      calculator(20, 3, "*"); // 60
  
  //      calculator(10, 0, "/") // Cannot divide by 0
  
  */
  
  // SOLUTION
  
  const calculator = (nb1, nb2, operator) => {
      switch(operator)
      {
          case "+":
              return nb1 + nb2;
              break;
          case "-":
              return nb1 - nb2;
              break;
          case "*":
              return nb1 * nb2;
              break;
          case "/":
              return nb2 === 0 ? "Cannot divide by 0" : nb1/nb2;
              break;
          default:
              return "Operator isn't recognize. Please try again."
      }
  }
  
  // console.log(calculator(2, 0, "/"));
  
  /*
  
  Word count
  
  Write a function to count the number of words. We limit the number of words by 30, so if there is more, please return an error message with the first 30 words.
  
  //      wordCount("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupery"); // 24
  
  //      wordCount("Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. ― Lao Tzu") // ERROR: you wrote 33 words. We only can accept the following words: "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. ―"
  
  */
  
  // SOLUTION
  function wordCount(str) {
      const words = str.split(" ");
      if(words.length > 30) 
      {
          const acceptedWords = words.slice(0, 31);
          return `ERROR: you wrote ${words.length} words. \n We only can accept the following words: \n "${acceptedWords.join(" ")}"`;
      } else {
          return words.length;
      }
  }
  
  // console.log(wordCount("Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. ― Lao Tzu"));
  
  /*
  
  Who is the president ?
  
  Create a function to return the majority of vote in the array. The candidate with the majority of vote will be our next president !
  
  //      whoIsThePresident(["Teddy Bear", "Chewbacca", "Dracula", "Chewbacca"]); // Chewbacca is our new president with 2 votes !
  
  //      whoIsThePresident(["Chewbacca", "Teddy Bear", "Dracula", "Chewbacca", "Dracula"]); // We got a draw ! Please vote again.
  
  //		whoIsThePresident([]); // Is it a democratic vote here ? Please vote again.
  
  */
  
  // SOLUTION
  const whoIsThePresident = arr => {
  
      if(!arr.length){return "Is it a democratic vote here ? Please vote again."}
      
      let vote = [];
      arr.forEach(candidate => vote[candidate] ? vote[candidate]++ : vote[candidate] = 1);
      
      let highestScore = [Object.keys(vote)[0], Object.values(vote)[0]];
      
      for(candidate in vote)
      {
          if(vote[candidate] > highestScore[1])
          {
              highestScore = [candidate, vote[candidate]];
          } else if (candidate != highestScore[0] && vote[candidate] === highestScore[1]) {
              highestScore.push("DRAW");
          }
      }
  
      return highestScore.includes("DRAW") ? "We got a draw ! Please vote again." : `${highestScore[0]} is our new president with ${highestScore[1]} votes !`
  }
  
  // other solution
  
  const whoIsThePresident2 = arr => {
  
      if(!arr.length){
          return 'Is it a democratic vote here ? Please vote again.'
      }
      let sorted_tuples = [...new Set(arr)].map(candidate => [candidate, arr.filter(val => candidate === val).length]).sort((a, b) => b[1] - a[1])
  
      return sorted_tuples[0][1] === sorted_tuples[1][1] ? 'We got a draw ! Please vote again.' : `${sorted_tuples[0][0]} is our new president with ${sorted_tuples[0][1]} votes !`;
  
  }
  
  // console.log(whoIsThePresident2(["Teddy Bear", "Chewbacca", "Dracula", "Chewbacca"]));
  
  /*
  
  Help me finish my words ...
  
  Write a function that will return if, from few letters, we can write the word expected. The function will accept two parameters: the first one will be letters, and the second one will be a complete word. From these letters, you have to return if we can achieve to write the complete word or not.
  
  We expect the use of recursion.
  
  //    wordHelper("bbece", "barbecue"); // True
  
  //		wordHelper("bbecce", "barbecue"); // False
  
  //    wordHelper("bdg", "butterfly"); // False
  
  */
  
  // SOLUTION
  
  const wordHelper = (letters, word) => {
      if (letters === ""){
          return true;
      }
      for (let i = 0 ; i<word.length ; i++){
          let currentCharacterOfWord = word[i];
          let currentCharacterOfLetters = letters[0];
          if (currentCharacterOfLetters === currentCharacterOfWord){
                  return wordHelper(letters.substring(1) , word.substring(i+1));
              }
          }
      return false;
  }
  
  // console.log(wordHelper("bdg", "butterfly"));
  
  /*
  
  Remember Nokia 3310 ?
  
  Create a function that is able to read the number typed on an old phone: 0 and 1 get their own keypad, 2 is "ABC", 3 is "DEF", 4 is "GHI", 5 is "JKL", 6 is "MNO", 7 is "PQRS", 8 is "TUV", 9 is "WXYZ".
  
  //      oldPhoneConvert("0GGKVJ1T1I"); // 0445851814
  
  //      oldPhoneConvert("00G1HITZEGKFU"); // 0448934538
  
  */
  
  // SOLUTION
  
  const converter = [
      ["ABC", 2],
      ["DEF", 3],
      ["GHI", 4],
      ["JKL", 5],
      ["MNO", 6],
      ["PQRS", 7],
      ["TUV", 8],
      ["WXYZ", 9]
  ]
  
  const oldPhoneConvert = phone => {
      return phone.replace(
          /[A-Z]/g,
          letter => converter.find(([letters]) => letters.includes(letter))[1]
      );
  }
  
  // console.log(oldPhoneConvert("0GGKVJ1T1I"));
  
  /*
  
  Mistigri
  
  Write a function in order to find if the Mistigri is in the array. Our Mistigri will be the number 6.
  
  //    mistigri([3,2,1,6]); // Mistigri !
  
  //    mistigri([3,9,8,7,1]); // No Mistigri here
  
  // 		mistigri([36,43,29]) // Mistigri !
  
  */
  
  // SOLUTION
  const mistigri = arr =>
    /6/.test(arr) ? 'Mistigri !' : 'No Mistigri here';
  
  // console.log(mistigri([36,43,29]))
  
  /*
  
  Basketball
  
  Mickeal is practicing a lot, we have to help him to check if the basket is accepted or not. Create a function that will return true or false regarding the place of the ball.
  
  //      basket([
          // [' ##### '],
          // [' # 0 # '],
          // [' ##### ']
          // ]); // true
  
  //      basket([
          // [' ##### '],
          // [' #0  # '],	
          // [' ##### ']
          // ]); // true
  
  // 		basket([
          // [' ##### '],
          // ['0#   # '],	
          // [' ##### ']
          // ]); // false
  
  */
  
  // SOLUTION
  const basket = position => position.some(([v]) => /^\s+#\s*0\s*#\s+$/.test(v));
  
  // console.log(basket([
  // 	[' ##### '],
  // 	[' # 0 # '],
  // 	[' ##### ']
  // 	]));
  
  /*
  
  Check the Full
  
  We are playing with dices, but we need your help to check if we have a Full (3 identical figures + 2 identical figures; for instance 3 dices showing a 6 and 2 dices showing a 4). Write a function to check if a player have a Full or not !
  
  //      full([6,6,6,4,4]); // true
  
  //      full([3,2,3,2,3]); // true
  
  // 		full([1,2,2,3,6]); // false
  
  */
  
  // SOLUTION
  const full = dices => {
      dices.sort();
      return dices[0]===dices[2] && dices[3]===dices[4] || dices[0]===dices[1] && dices[2]===dices[4];
  }
  
  // console.log(full([1,2,2,3,6]));
  
  /*
  
  Historical marker
  
  Create a function to sort dates contained in an array. You should be able to choose if you want to sort it ascendingly or descendingly thanks to the keywords DSC/ASC.
  
  //      sortDates(["20-02-2020_12:30", "20-02-2018_12:30", "20-02-2020_12:15"], "ASC") // ["20-02-2018_12:30", "20-02-2020_12:15", "20-02-2020_12:30"]
  
  // 		sortDates(["15-06-2020_12:30", "15-06-2018_12:30", "15-06-2020_12:15"], "DSC") // ["15-06-2020_12:30", "15-06-2020_12:15", "15-06-2020_12:30"]
  
  // 		sortDates(["10-02-2000_10:03", "14-02-2000_18:29", "01-01-1999_00:55"], "ASC") // ["01-01-1999_00:55", "10-02-2000_10:03", "14-02-2000_18:29"]
  
  */
  
  // SOLUTION
  const sortDates = (arr, type) => {
      const conversion = str => new Date(str.replace(/(\d+)-(\d+)(-\d+)_(\d+:\d+)/g, '$2-$1$3 $4'))
      
      return arr
          .sort((a, b) => type === 'ASC' ? conversion(a) - conversion(b) : conversion(b) - conversion(a))
  }
  
  // console.log(sortDates(["10-02-2000_10:03", "14-02-2000_18:29", "01-01-1999_00:55"], "DSC"));
  
  /*
  
  Camel Case convention
  
  Write a function to return all the string in camel case. 
  
  //      camelizeIt("Hello World") // "helloWorld"
  
  // 		camelizeIt("hackathon_rocks") // "hackathonRocks"
  
  // 		camelizeIt("Learning convention at Propulsion") // "learningConventionAtPropulsion"
  
  */
  
  // SOLUTION
  const camelizeIt = str => {
      return str.split(/[ _]/g).map((w,i) => (!i ?
          w.toLowerCase() : w[0].toUpperCase() + w.slice(1).toLowerCase()
      )).join("");
  }
  
  // console.log(camelizeIt("Learning convention at Propulsion"))
  
  /* 
  
  Is it IPv4 ?
  
  Create a function to check if the data sent respect the IPv4 format. For instance: 127.0.0.1 (home, sweet home) or 255.255.255.255
  
  //      checkIP("127.0.0.1") // true
  
  // 		checkIP("255.255.255.255") // true
  
  // 		checkIP("123.023.400.011") // false, cannot go further than 255
  
  // 		checkIP("123.090.020.011") // false, cannot start with a 0
  
  */
  
  // SOLUTION
  const checkIP = str => {
      if ( /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(str) ) 
      {
        str = str.split(".");
        for(let i in str) 
        {
          if(parseInt(str[i]).toString().length !== str[i].length || str[i] > 255) return false;
        }
        return true;
      }
      return false;
    }
  
  // console.log(checkIP("123.023.400.011"));
  
  /* 
  
  Enigma
  
  Create a function that expects a message and encrypts it based on our "enigma" dictionary.
  
  Each character should be changed by the corresponding one in the `enigma` dictionary. Then create a function to decode a message based on our "enigma" dictionnary.
  
    encrypt('attack') // 'mhhmfp'
  
    encrypt('fire in the hole') // 'nxec xq hwc wodc'
  
    decrypt('x eofp ho bcfegrh mdd hwcvc clcefxvcv') // 'i rock to decrypt all these exercises'
  
  */
  
  // SOLUTION
  const enigma = {
    a: 'm',
    b: 'a',
    c: 'f',
    d: 'b',
    e: 'c',
    f: 'n',
    g: 'z',
    h: 'w',
    i: 'x',
    j: 'u',
    k: 'p',
    l: 'd',
    m: 'y',
    n: 'q',
    o: 'o',
    p: 'r',
    q: 't',
    r: 'e',
    s: 'v',
    t: 'h',
    u: 'i',
    v: 'j',
    w: 'k',
    x: 'l',
    y: 'g',
    z: 's'
  }
  
  const encrypt = message => {
    return message
      .split('')
      .map(chr => enigma[chr] || chr)
      .join(''); 
  }
  
  const decrypt = message => {
  
    return message
      .split('')
      .map(chr => {
        for (var k in enigma) {
          if (enigma.hasOwnProperty(k) && enigma[k] === chr) {
            return k;
          }
        }
  
        return chr;
      })
      .join('');
  }
  
  // console.log(encrypt('attack'))
  // console.log(encrypt('i rock to decrypt all these exercises'))
  // console.log(decrypt("x eofp ho bcfegrh mdd hwcvc clcefxvcv"))
  
  /* 
  
  Help Jimi Hendrix
  
  Jimi is playing guitar but the sound is terrible !
  
  Create a guitar tuner that will return if the frequency for each chord is good or not.
   
    Chord 1 (E4) 	329.63 Hz
  
    Chord 2 (B3) 	246.94 Hz
  
    Chord 3 (G3) 	196.00 Hz
  
    Chord 4 (D3) 	146.83 Hz
  
    Chord 5 (A2) 	110.00 Hz
  
    Chord 6 (E2) 	82.41 Hz 
  
  If the frequency is between 1 and 2% off, return "+" or "-" regarding if we need to tune up or down.
  
  If the frequency is more than 3% off, return "+ +" or "- -" regarding if we need to tune up or down.
  
  If the chord is not played, return "X".
  
  If it's fine, return "Good".
  
  tuner([0, 246.94, 0, 0, 0, 80]) // ["X", "Good", "X", "X", "X", "++"]
  
  tuner([329, 246, 195, 146, 111, 82]) // ["Good", "Good", "+", "+", "-", "Good" ]
  
  tuner([329.63, 246.94, 196, 146.83, 110, 82.41]) // ["Good", "Good", "Good", "Good", "Good", "Good"]
  
  
  */
  
  // SOLUTION
  const tuner = array => {
    const chords = [329.63, 246.94, 196, 146.83, 110, 82.41];
  
    return array.map((freq,index) => {
      if (freq === 0) return 'X';
      let percent = Math.round(freq / chords[index] * 100) - 100;
      if (percent >= 3) return '--';
      if (percent >= 1) return '-';
      if (percent <= -3) return '++';
      if (percent <= -1) return '+';
      return 'Good';
    })
  }
  
  // console.log(tuner([329, 246, 195, 146, 111, 82]))
  
  /* 
  
  Get all the pairs
  
  Write a function that will return all the pair of numbers with a sum reaching the targeted numbers. All the pairs need to be sorted from the lowest to the biggest. If no numbers are found, please return an empty array.
  
  allPairs([2, 4, 5, 3], 7) // [[2, 5], [3, 4]]
  // 2 + 5 = 7 and 3 + 4 = 7
  
  allPairs([5, 3, 9, 2, 1], 3) // [[1, 2]]
  
  allPairs([4, 5, 1, 3, 6, 8], 9) // [[1, 8], [3, 6], [4, 5]]
  
  */
  
  // SOLUTION
  const findPairs = (array, target) => {
    const results = [];
  
    for (let i = 0; i < array.length - 1; i++) 
    {
        for (let j = i + 1; j < array.length; j++) 
        {
            const a = array[i];
            const b = array[j];
  
            if (a + b === target) results.push([Math.min(a, b), Math.max(a, b)]);
        }
    }
  
    return results.sort(([a], [b]) => a - b);
  }
  
  // console.log(findPairs([2, 4, 5, 3], 7));
  
  /* 
  
  Don't worry, be happy ?
  
  Create a function that will take as argument a number. Take all the digits from this number and add the sums of their squares. 
  
  Their is 2 possibility at the end: 
  
  - the process reach 1, meaning your number is a happy one, then return TRUE;
  - the process reach 4, meaning your number is a unhappy one, then return FALSE;
  
  happyOrNot(19) // true
  // because 19 >> 1^2 + 9^2 = 82 >> 8^2 + 2^2 = 68 >> 6^2 + 8^2 = 100 >> 1^2 + 0^2 + 0^2 = 1
  // We reached 1 meaning that 19 is a Happy Number.
  
  happyOrNot(203) // true
  happyOrNot(11) // false
  happyOrNot(107) // false
  
  */
  
  // SOLUTION
  const happyOrNot = nb => {
  
    if(nb === 1) return true;
    if (nb === 4) return false;
  
    let digits = nb.toString().split("");
  
    let result = 0;
    digits.forEach(digit => {
        result += parseInt(digit)**2;
    });
  
    return happyOrNot(result)
  
  }
  // OR
  const happyOrNot2 = nb => {
  
    if(nb === 1) return true;
    if (nb === 4) return false;
  
    return happyOrNot2([...nb.toString()]
    .reduce((sum, v) => Math.pow(Number(v), 2) + sum, 0))
  
  }
  
  // console.log(happyOrNot2(203))
  
  /* 
  
  Sort you contacts
  
  Write a function that takes as arguments an array of contacts and the order you wish (ASC, DESC). You need to return a sorted array from it based on their lastnames. 
  
  sortContacts([
      "Bat Man",
      "Bat Girl",
      "Dean Rouflaquette",
      "Albert Musketeer",
      "Captain America"
  ], "ASC") 
  // ['Captain America','Bat Girl','Bat Man','Albert Musketeer','Dean Rouflaquette']
  
  sortContacts([
      "Boutros Boutros-Ghali",
      "Kofi Annan",
      "Ban Ki-moon",
      "António Guterres"
  ], "DESC") 
  // ['Ban Ki-moon','António Guterres','Boutros Boutros-Ghali','Kofi Annan']
  
  sortContacts([], "DESC") // []
  
  sortContacts(null, "DESC") // []
  
  sortContacts(undefined, "DESC") // []
  
  sortContacts([
      "Bat Man",
      "Bat Girl",
      "Dean Rouflaquette",
      "Albert Musketeer",
      "Captain America"
  ]) // "Please choose how to sort your contacts"
  
  */
  
  // SOLUTION
  const sortContacts = (name, sort) => {
  
    if(!name) return [];
    if(!sort) return "Please choose how to sort your contacts";
  
    return name.sort((element1, element2) => {
      const last1 = element1.split(' ')[1];
      const last2 = element2.split(' ')[1];
  
      return sort === "ASC" ?
        last1 > last2 ? 1 : -1
      :
        last1 < last2 ? 1 : -1
    });
  }
  
  // console.log(sortContacts(undefined, "DESC"))
  
  /* 
  
  Tic Tac Toe
  
  We want to implement an tic tac toe and you need to write a function to check the winning condition where "E" means Empty.
  
    ticTacToe([
      ["X", "O", "X"],
      ["O", "X",  "O"],
      ["O", "X",  "X"]
    ]) // "Winner: X"
  
    ticTacToe([
      ["O", "O", "O"],
      ["O", "X", "X"],
      ["E", "X", "X"]
    ]) // "Winner: O"
  
    ticTacToe([
      ["X", "X", "O"],
      ["O", "O", "X"],
      ["X", "X", "O"]
    ]) // "Draw. Play again"
  
  */
  
  // SOLUTION
  const ticTacToe = array => {
  
    for(let i = 0; i < array.length; i++)
    {
        if ((array[i][0] === array[i][1] && array[i][1] === array[i][2])) {
            return `Winner: ${array[i][0]}`
        } else if (array[0][i] === array[1][i] && array[1][i] === array[2][i]) {
            return `Winner: ${array[0][i]}`
        } else if ((array[0][0] === array[1][1] && array[1][1] === array[2][2]) || (array[0][2] === array[1][1] && array[1][1] === array[2][0])) {
            return `Winner: ${array[1][1]}`
        } 
    }   
  
    return "Draw. Play again"
  }
  
  // console.log(ticTacToe([
  //   ["X", "O", "O"],
  //   ["X", "O", "E"],
  //   ["O", "O", "X"]
  // ]))
  
  /* 
  
  Remove the last vowel
  
  Write a function that removes the last vowel in each word in a sentence.
  
  killLastVowel("Propulsion is a great place to get headache.")
  // "Propulsin s  gret plac t gt headach."
  
  killLastVowel("I love Javascript so much.")
  // " lov Javascrpt s mch."
  
  */
  
  // SOLUTION
  const killLastVowel = str => str.split(' ').map(x => x.replace(/[aeiou](?=[^aeiou]*\b)/i, '')).join(' ')
  
  // console.log(killLastVowel("Propulsion is a great place to get headache."))
  
  /* 
  
  Check the URL
  
  Write a function that will decompose an url and return and object with all the informations.
  
  checkUrl("https://test.propulsion.academy/full-stack/challenge/test.html?ok=0&test=javascript") 
  
  {
    protocol: "https",
    subDomain: test,
    domainName: "propulsion.academy",
    folderTree: [
        "full-stack",
        "challenge"
    ],
    targetFile: "test.html",
    argumentsFile: {
        ok: "0",
        test: "javascript"
    }
  }
  
  */
  
  // SOLUTION
  const checkUrl = url => {
    let protocol = url.match(/(^\w+):\/\//)
    let subDomain = url.match(/^\w+:\/\/([a-z]+)\.\w+\./)
    let domainName = url.match(/^\w+:\/\/(?:[a-z]+\.)?(\w+\.[a-z]+)/)
    let folderTree = url.match(/^\w+:\/\/(?:[a-z]+\.)?\w+\.[a-z]+\/([\w\/\-\_]+)\//)
    let targetFile = url.match(/\/([\w\.]+)(?:\?.*)?$/)
    let argumentsFile = url.match(/(\?.+)/)
  
    argumentsFile = argumentsFile[1].replace("?", "").split("&");
    
    let arguments = {}
    argumentsFile.forEach(element => arguments[element.split("=")[0]] = element.split("=")[1])
  
    return { 
        protocol:protocol? protocol[1]:null,
        subDomain:subDomain? subDomain[1]:null,
        domainName:domainName? domainName[1]:null,
        folderTree:folderTree? folderTree[1].split("\/"):null,
        targetFile:targetFile? targetFile[1]:null,
        argumentsFile:argumentsFile? arguments:null
    }
  }
  
  console.log(checkUrl("https://test.propulsion.academy/full-stack/challenge/test.html?ok=0&test=javascript"))
  
  /* 
  
  Spanish conjugation
  
  Create a function to display the conjugation of Spanish regular verbs in present tense. 
  
  spanishConj("pasar") // "Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan."
  
  spanishConj("unir") // "Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen."
  
  spanishConj("correr") // "Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren."
  
  */
  
  // SOLUTION
  const spanishConj = verb => {
    const pronouns = ['Yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'];
    const ends = {
      ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
      ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
      er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
    }
    const form = verb.substr(-2);
    const stem = verb.substr(0, verb.length - 2);
    return pronouns.reduce((result, pronoun, index) => {
      return `${result}${pronoun} ${stem}${ends[form][index]}${
        index === pronouns.length - 1 ? '.' : ', '}`;
    }, '');
  } 
  
  // console.log(spanishConj("pasar"))
  
  /* 
  
  The Ohms law
  
  Create a function that expects an array with colors and returns a resistance based on the Ohm's law.
  
  We will apply these following rules:
  
  - First three colors are the amount of Ohms -resistance unit-
  - Fourth color is the tolerance
  
  We use the exponentiation format to represent the resistance:
  
  - `34 x 10^5` -> 340,000
  - `52 x 10^3` -> 5,200
  
  The first 2 numbers are to represent the base: `34` and `52` in our examples:
  
  - `34` would be 'orange yellow'. First color the first number, second second.
  - `52` would be 'gree red'.
  
  Third color would be exponent of 10:
  
  - `10^5` would be 'green'
  - `10^3` would be 'orange'
  
  Back to our resistances:
  
  - 340,000 would be 'orange yellow green'
  - 5,200 would be 'green red orange'
  
  Tolerance color:
  
  - 20% -> NO fourth color
  - 10% -> `silver`
  - 5% -> 'gold'
  
  const colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
  };
  
  decodeColors('brown black black'); // '10 ohms, 20%'
  
  decodeColors('orange orange yellow gold'); // '330k ohms, 5%'
  
  decodeColors('red black green gold'); // '2M ohms, 5%'
  
  decodeColors('brown black black'); // '10 ohms, 20%'
  decodeColors('brown black brown gold'); // '100 ohms, 5%'
  decodeColors('brown black red silver'); // '1k ohms, 10%'
  decodeColors('red red orange silver'); // '22k ohms, 10%'
  decodeColors('yellow violet orange gold'); // '47k ohms, 5%'
  decodeColors('orange orange yellow gold'); // '330k ohms, 5%'
  decodeColors('red black green gold'); // '2M ohms, 5%'
  
  */
  
  // SOLUTION
  function decodeColors(bands) {
    const colors = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      gray: 8,
      white: 9,
    };
    const resistances = {
      silver: '10%',
      gold: '5%',
    };
    const bandsArr = bands.split(' ');
    const base = colors[bandsArr[0]] * 10 + colors[bandsArr[1]];
    const times = Math.pow(10, colors[bandsArr[2]]);
    const ohms = base * times;
    const resistance = bandsArr[3] ? resistances[bandsArr[3]] : '20%';
    if (ohms >= 1000000) {
      return (ohms / 1000000) + 'M ohms, ' + resistance;
    } else if (ohms >= 1000) {
      return (ohms / 1000) + 'k ohms, ' + resistance;
    }
  
    return ohms + ' ohms, ' + resistance;
  }
  
  // console.log(decodeColors('brown black black'));