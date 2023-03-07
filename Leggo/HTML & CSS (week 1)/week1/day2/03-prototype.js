document.querySelector('h1').innerText = "JS - Prototype";

/**
 * 03 - prototype - prototype chain
 *
 */

// ! Prototype chain

// * The empty object
const obj = {
  toString: () => {
    console.log('This is a string');
  }
};

// console.log(obj);   // {}
// console.log(obj.toString());   // undefined -> TypeError
// console.log(obj.__proto__);

// const peter = {
//   name: "Peter",
// }
// const laura = {
//   name: "Laura",
// }

const human = {
  walk: function()  {
    console.log('Walking')
  },
}

// peter.__proto__ = human;
// laura.__proto__ = human;

// console.log(peter.toStrin);
// peter.walk()



// * Examples

const studentSkills = {
  greet, 
  study, 
}

// const laura = {
//   name: "Laura",
//   age: 27,
//   greet: studentSkills.greet,
//   study: studentSkills.study,
// }

// const peter = {
//   name: "Peter",
//   age: 28,
// }

// console.log(laura);
// console.log(peter);

function greet() {
  console.log(`Hi I'm ${this.name} and I'm ${this.age} years old`);
};
function study() {
  console.log(`Studying really hard!`);
}


// const peter = {
//   name: "Peter",
//   age: 30,
// }

// const human = {
//   type: 'human',
//   talk: () => {
//     console.log('hi');
//   }
// }
// studentSkills.__proto__ = human;
// peter.__proto__ = studentSkills;

// console.log(peter.type);
// human.type = "androids"
// console.log(peter.type);


// laura.__proto__= studentSkills
// peter.__proto__= studentSkills

// Object.setPrototypeOf(michael, studentSkills)
// Object.setPrototypeOf(peter, studentSkills)


// studentSkills.hi = function() {
//   console.log('Hi form hawai');
// };

// console.log(peter);
// console.log(michael);

// * Classes and inheritance

class Person {
  constructor(isAlive, name) {
    this.isAlive = isAlive;
    this.name = name;
  }
  talk() {
    if(this.alive) {
      console.log(`${this.name} is talking!`);
    }   
  }
}

const ale = new Person(true, "Alejandro");
console.log(ale);
ale.talk()

const peter = new Person(true, "Peter");
console.log(peter);
peter.talk()


class Singer extends Person {
  constructor(alive, name, style) {
    super(alive, name)
    this.artisticName = 'Fancy ' + name;
    this.style = style;
  }

  sing() {
    if (this.alive) {
      console.log(`${this.artisticName} is singing!`);
    }
  } 
}

const singer = new Singer(true, "Paula", "pop");
console.log(singer);
singer.sing()
singer.talk()









// /**
//  *
//  * The new keyword
//  * 
//  * how it works:
//  * 1. creates a plain object {}
//  * 2. calls the constructor with the keyword 'this' bound to the object created in step 1 (this = {})
//  * 3. sets the prototype of the object to the constructor's prototype
//  * 4. returns that object
//  */
