/**
 * 00 - Recap on Objects
 */




const greet = () => {
  console.log(this);
  console.log(`Hi! My name is ${this.google}`);
}

// 1. Functional style
// greet() // this === Window, window.name === ''

// 2. Method style
const peter = {
  name: 'Peter',
};
peter.hi = greet; 
// peter.hi();

// 3. Explicit value of this
// greet.apply({name: 'Laura'})

// 4. Arrow functions are special 😅

// ! Caveat: Arrow function doesn't care about our rules, and it 
// ! takes the value of "this" from right before the function 
// ! was defined







// ! Pitfalls
const writer = {
  lastName: 'Bukowski',
  books: ['Post Office', 'Factotum'],
  printBooks: function(){
    this.books.forEach((book) => {
      console.log(this.lastName + ' has written ' + book);
    });
  }
}

writer.printBooks();