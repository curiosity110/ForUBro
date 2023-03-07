// document.querySelector('h1').innerText = "JS - Objects";

/**
 * 01 - Objects in JavaScript
 *  Mutable pieces of data that we can change
 */

// * How can we create objects?
const car = {
  wheels: 4,
  model: 'Ford',
}

// * Add a property
// console.log(car);
car.doors = 5;
car.wheels += 1;
// car.wheels = car.wheels + 1;
// console.log(car);

// * Delete property
// delete car.doors;
// console.log(car);

// * Access a property value: dot notation, bracket notation and destructuring
// console.log(car.model)
// console.log(car['model'])

// const option = prompt("Which prop do you want to read?")
// console.log(car[option]);  // undefined <- 

const prop = 'wheels';
// console.log(car.prop);    // error? ReferenceError | undefined? 
// console.log(car[prop]);   // error? ReferenceError | undefined? | 5
// console.log(car['prop']); // undefined



// * DESTRUCTURING
const { model, brand } = car;
// console.log("model: " + model);     // Ford
// console.log("rest: ", rest);
// console.log("wheels: " + wheels);   // 5
// console.log("brand: " + brand);     // undefined

// * Same with Arrays
const [two, one, ...rest] = [1, 2, 3];
// console.log("two: " + two); // two: 1
// console.log("one: " + one); // one: 2
// console.log(rest);          // 

// * MUTABILITY
const sherlock = {
  surname: 'Holmes',
  address: { city: 'London' }
};

const john = {
  surname: 'Watson',
  // address:  sherlock.address,
  address: { city: sherlock.address.city },
};

// console.log(sherlock);
// console.log(john);

// console.log(sherlock.address);  // { city: 'London' }
// console.log(sherlock.address.city);  // 'London'
sherlock.address.city = 'Miami';
// console.log(sherlock);
// console.log(john);





// * OBJECT CREATION PATTERNS
// * Object literal
const student = {
  name: "Peter",
  age: 26,
  greet: function () {
    console.log("Hi I'm Peter and I'm 26 years old");
  }
};

// console.log(student.greet());


// * Factory Function Pattern
const studentFactory = (xyz, age) => {
  const greet = () => {
    console.log(`Hi I'm ${xyz} and I'm ${age} years old`);
  };
  // return { name: firstName, age: age, greet: greet};
  return { name: xyz, age, greet};
}
const student2 = studentFactory('Peter', 26);
console.log(student2);
student2.greet()

// camelCase
// const student3 = studentFactory('Laura', 24);
// console.log(student3);
// student3.greet();



// * ES5 Constructor Pattern - ES5 Class
function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.greet = function () {
  console.log(`Hi I'm ${this.name} and I'm ${this.age} years old`);
}

const stundent4 = new Student('Peter', 26);
console.log(stundent4);
stundent4.greet();
stundent4.age += 1;

// * ES6 Classes
class StudentES6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi I'm ${this.name} and I'm ${this.age} years old`);
  }
}

const student5 = new StudentES6('Peter', 26);
console.log(student5);
student5.greet();