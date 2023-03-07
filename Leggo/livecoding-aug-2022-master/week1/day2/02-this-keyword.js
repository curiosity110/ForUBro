document.querySelector('h1').innerText = "JS - this keyword";

/**
 * 02 - this keyword
 *
 * As the english word "this" JS needs a context to understand what we mean by this
 * It doesn't depend and where/how we define a function but rather on how we CALL it
 */

class Student {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  greet() {
    console.log(`Hi I'm ${this.name} and I'm ${this.age} years old`);
  }
}

// const peter = new Student('Peter', 26);
// const laura = new Student('Laura', 22);

// console.log(peter);
// console.log(laura);
// peter.greet();
// laura.greet();


// * Caveat
// console.log(this);         // this === WINDOW

// function useStrictMode() {
//   "use strict";
//   console.log(this);
// }
// useStrictMode();


// ! 3 rules to set the value of this
// function greet() {
//   console.log(this); 
//   console.log(`Hello world!, I'm ${this.name}, nice meeting you`);
// }

// * Function style => Window object
// greet()      // Hello world!, I'm undefined, nice meeting you

// * Method style
const laura = {
  name: 'Laura',
  age: 26,
  greet: greet,
  hi: function() {
    console.log(`Hello world!, I'm ${this.name}, nice meeting you`);
  }
}
// laura.greet(); 
// laura.hi();

const pete = {
  name: 'Pete',
  age: 41,
}
// pete.hi = greet();    
// console.log(pete.hi);
// Number of logs: 2 | 3 
// 1: window                                                <- From line 42     
// 2: Hello world!, I'm , nice meeting you                  <- From line 43
// 3: undefined                                             <- From line 62

// * Indirect invocation: call & apply
function greet(lastName, age) {
  console.log(`Hello world!, I'm ${this.name}, nice meeting you. ${lastName} and ${age}`); // I'm , nice
}

const isa = { name: 'Isa', age: 24 };
// greet(isa); // Hello world!, I'm , nice meeting you | Hello world!, I'm , nice meeting you
// greet.apply(isa); // undefined

// No value for this
// greet2('Müller', 4);

// First argument is the value of "this", the rest are passed to the function
greet.call(isa, 'Müller', 4);

// First argument is the value of "this", the second, an array is passed to the function
greet.apply(isa, ['Müller', 4]);


// * Constructor style
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   greet = greet
//   study = study
// }

// const student = new Student('Silva', 30);
// console.log(student);
// student.greet();


// ! Caveat: Arrow function doesn't care about our rules, and it 
// ! takes the value of "this" from right before the function 
// ! was defined

 // ! Pitfalls
const writer = {
  lastName: 'Bukowski',
  books: ['Post Office', 'Factotum'],
  printBooks: function(){
    this.books.forEach(function(book) {
      console.log(this.lastName + ' has written ' + book);
    });
  }
}

// writer.printBooks();

