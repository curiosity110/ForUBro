document.querySelector('h1').innerText = "JS - Common functional methods";

/**
 * 05 - Common methods in JS: map, filter, reduce
 */

const students = [
  {
    name: 'Laura',
    age: 22,
    followers: 100,
  },
  {
    name: 'Kevin',
    age: 20,
    followers: 10,
  },
  {
    name: 'Mark',
    age: 21,
    followers: 400,
  },
  {
    name: 'Sabrina',
    age: 19,
    followers: 1000,
  },
];

// * 1. List of student names
// ["Laura", "Kevin", "Mark", "Sabrina"]
const names = [];
// for (let index = 0; index < students.length; index++) {
//   const student = students[index];
//   names.push(student.name)
// }
students.forEach(student => {
  names.push(student.name);
})
console.log(names);

// const namesOfStudents = students.map(student => {
//   return student.name;
// })
const namesOfStudents = students.map(student => student.name);
console.log(namesOfStudents);

// * 2. List of students older than 21
// const olderStudents = students.filter((student) => {
//   if (student.age > 21) return true;
//   else return false;
// });
const olderStudents = students.filter((student) => student.age > 21);
console.log(olderStudents);


// * 3. Count of total followers of all students
const amountOfFollowers = students.reduce((currentCountOfFollowers, student) => {
  const newCount = currentCountOfFollowers + student.followers;
  return newCount
}, 0);
console.log(amountOfFollowers);

