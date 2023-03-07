document.querySelector('h1').innerText = "Scope & Hoisting";

// Scope

// global scope
const x = 10;

function doSth() {   
  const x1 = 20;   
  console.log(x);     // 10  
  console.log(x1);    // 20
  // console.log(x2);   // ReferenceError
}

// doSth();
// x();                 // TypeError

// VAR -> Fuctional scope
// var student = "Peter";
// var age = 20;
// if (age > 18) {
//   var student = "Mark";
// }
// console.log(student);  // Mark 

// LET & CONST -> Block scope
// GLOBAL SCOPE
// const student = "Peter";
// const age = 20;
// if (age > 18) {
//   // IF SCOPE
//   const student = "Mark"; // variable doesn't scape this scope
// }

// console.log(student); // Peter 

// Hoisting
console.log(age);
const age = 12;       // undefined
console.log(age);

// greet('Mark');

// // Function declaration -> Hoisted
// function greet(name) {
//   console.log(`Hello ${name}`); // same | 
// }

// // Function Expressions -> Not Hoisted
// console.log(greetExpression);  //
// greetExpression('Peter');

// var greetExpression = function(name) {
//   console.log(`Expressing ${name}`); 
// }




// ---------------------------------
// // JS INTERNALS
// // 1st interation
// var age;
// function greet(name) {
//   console.log(`Hello ${name}`); // same | 
// }

// // 2nd iteration
// console.log(age);
// age = 12;
// console.log(age);
// greet('Mark');






// ----- JS working
// var age; 
// console.log(age);
// age = 12

// greet()

// function greet(){
//   console.log('hi');
// }


// Hoisting -> declarations vs expressions