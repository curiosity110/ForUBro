// 3: Create a function that checks whether all the element of an array are the same datatype

// // es5
function typeOfElement(element) {
  if (typeof element === 'object') {
    return Array.isArray(element) ? 'array' : 'object'
  }
  return typeof element;
}

function areSameType(elements) {
  let firstElementType = typeOfElement(elements[0]);
  for (let i = 1; i < elements.length; i++) {
    let currentType = typeOfElement(elements[i]);
    if (currentType !== firstElementType) {
      return false;
    }
  }
  return true;
}


// es6
typeOfElementES6 = element => typeof element === 'object' ? Array.isArray(element) ? 'array' : 'object' : typeof element;

const areSameTypeES6 = elements => {
  const firstElementType = typeOfElementES6(elements[0]);
  return elements.filter(element => firstElementType !== typeOfElementES6(element)).length === 0;
};


console.log(areSameType(['hello', 'world', 'long sentence'])); // => true
console.log(areSameType([1, 2, 9, 10])); // => true
console.log(areSameType([['hello'], 'hello', ['bye']])); // => false
console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]])); // => true

console.log(areSameTypeES6(['hello', 'world', 'long sentence'])); // => true
console.log(areSameTypeES6([1, 2, 9, 10])); // => true
console.log(areSameTypeES6([['hello'], ['bye'], 'hello', ['bye']])); // => false
console.log(areSameTypeES6([['hello'], [1, 2, 3], [{ a: 2 }]])); // => true
