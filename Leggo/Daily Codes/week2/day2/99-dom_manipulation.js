/**
 * 00 - Dom Manipulation
 */

// * Selectors
// * Single element
// let div = document.getElementById('root');
// div = document.querySelector('#root')
// console.log(div);

// * Multiple elements
// let divs = document.getElementsByName('div')
// console.log(divs);
// divs = document.querySelectorAll('div')
// console.log(divs);


// const rootElement = document.querySelector('#root');

// * Traversing the DOM - NOT RECOMMENDED
// const firstChild = rootElement.firstChild;
// console.log('firstChild: ', firstChild);

// const lastChild = rootElement.lastChild;
// console.log('lastChild: ', lastChild);

// const parentNode = rootElement.parentNode;
// console.log('parentNode: ', parentNode);

// const nextSibling = rootElement.nextSibling;
// console.log('nextSibling: ', nextSibling);

// const previousSibling = rootElement.previousSibling;
// console.log('previousSibling: ', previousSibling);

// * Adding and removing items
// * createElement
// const p = document.createElement('p');
// p.innerText = 'Hello world';
// rootElement.appendChild(p);

// * creatTextNode
// const text = document.createTextNode('Text');
// rootElement.appendChild(text);

// const subtitle = document.querySelector('h2');
// setTimeout(() => {
//     subtitle.innerText = "Not anymore"
// }, 3000);

// * Attribute modifiers

// * getAttribute
// console.log(`Id: ${subtitle.getAttribute('id')}`);

// * setAttribute
// subtitle.setAttribute('id', 'subtitle')
// console.log(`Id: ${subtitle.getAttribute('id')}`)

// * hasAttribute
// console.log(`Has id? ${subtitle.hasAttribute('id')}`);

// * removeAttribute
// subtitle.removeAttribute('id')
// console.log(`Has id? ${subtitle.hasAttribute('id')}`);

// * styling
// subtitle.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;