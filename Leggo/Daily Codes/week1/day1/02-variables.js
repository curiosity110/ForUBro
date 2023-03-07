document.querySelector('h1').innerText = "Variables";


// Variables are NOT values
// Variables point to values
// let firstName = "Peter";
// // console.log(firstName);
// firstName = "Mark";
// // console.log(firstName);

// // Expressions -> Code that expresses a value, one single value
// firstName = "Pe" + "ter";

// Primitives
// let x1 = 10;
// let x2 = x1;
// x1 = 20;
// console.log(x1); // 10    20    20
// console.log(x2); // 20    10    20

function double(n) {
  n = n * 2;
  return n
}

const num = 10
const result = double(num)
// console.log(num);         // 10
// console.log(result);      // 20

// let & const
// const y1 = 10
// const y2 = 10
// y1 = 20;






// Objects
// let student = {
//   firstName: 'Peter',
//   lastName: 'Parker',
//   age: 30,
//   major: 'Math',
//   property: 'QWERTY'
// };




// console.log(student.firstName);
// console.log(student["firstName"]);
// const property = prompt("Which property of student you want to see?");
// console.log(property);

// console.log(student.property);
// console.log(student[property]);



// const & let VS var
const object = {
  value: 2,
  type: 'number'
};

// Option A
// object.value = 4;


// Option B will not work as it tries to give a new value to variable
object = {
  value: 4,
  type: 'number'
}

console.log(object);   // Error?? or not?





