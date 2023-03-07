/**
 * 01 - Fetch
 */

// ! A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// * Basic
// const a = 2;
// setTimeout(() => {
//   console.log('In da middle');
// }, 0)
// console.log(a);

// * Promises
// const promiseA = new Promise((res, rej) => {
//   rej(['hi', 'hallo'])
// });

// console.log(promiseA);

// promiseA
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log('Something went wroong', error);
//   })

// const promiseB = new Promise((resolve, reject) => {
//   const randomNumber = Math.random()
//   if (randomNumber > 0.5) {
//     return resolve('Yayyy') 
//   } else {
//     return reject('Oh nooo!');
//   }
// });

// console.log(promiseB);
//  promiseB
//  .then(d => console.log(d))
//  .catch(e => console.info(e))


// *  Return statement is passed down to next handler
// * Chaining
// new Promise((resolve) => resolve(2))
//     .then(d => {
//         console.log(`1st: ${d}`)
//         return d * d
//     })
//     .then(d => {
//         console.log(`2nd: ${d}`)
//         return d * d;
//     })
//     .then(d => {
//         console.log(`3rd: ${d}`)
//     })
//     .catch(e => console.log(e))

// * Error handling
// * Enhanced setTimeout
// const delay = (timeout, value = 7) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.random();
//             console.log(random);
//             if (random > 0.5) resolve(value)
//             else reject('Rejected')
//         }, timeout)
//     })
// }

// const valuePromise = delay(2000, 20)
// console.log(valuePromise);
// valuePromise
//     .then(data => console.log(data * 2))
//     .catch(e => console.log(`There was an error: ${e}`))











// * FETCH
// const baseUrl = 'https://jsonplaceholder.typicode.com';

// * 1. GET
// const promise = fetch(`https://jsonplaceholder.typicode.com/todos`);

fetch(`https://jsonplaceholder.typicode.com/todossss`)
  .then((response) => {
    if (response.status >= 400 && response.status < 500) {
      const error = new Error(`${response.status} error`)
      throw error;
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    data.forEach(todo => console.log(todo.title))
  })
   .catch(error => {
    console.log('This is a second error', error);
  })


function axios(url) {
  return fetch(url).then((response) => {
    if (response.status >= 400 && response.status < 500) {
      const error = new Error(`${response.status} error`)
      throw error;
    }
    return response.json();
  })
}



function handleResponseFromTodos(hund) {
  console.log(hund);
}

axios(`https://jsonplaceholder.typicode.com/todos`)
  .then(handleResponseFromTodos)

// axios(`https://jsonplaceholder.typicode.com/todoss/3`)
//   .then(todo => {
//     console.log(todo);
//   })
//   .catch(e => {
//     console.log('Oh noo!', e);
//   })

















// const promise2 = promise.then(response => {
//   console.log('Promise.then: ')
//   console.log(response)
//   return response.json()
// });
// promise2.then((data) => {
//   console.log(data)
// })

// fetch(`${baseUrl}/todos`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Oh something went wrong with the data!', error)
//   })


// function myFetch(endpoint) {
//   return fetch(endpoint).then(response => {
//     console.log(response);
//     return response.json()
//   });
// }


// myFetch(`${baseUrl}/todos`)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Oh something went wrong!', error)
//   })









// console.log('Promise 2');
// console.log(promise2);
// console.log('After the promise 2 😅');

// const promise3 = promise2.then(data => {
//     console.log('Data: ')
//     console.log(data)
// });
// console.log('Promise 3');
// console.log(promise3);
// console.log('After the promise 3 😅');

// fetch(`${baseUrl}/todos/199`)
//     .then(response => {
//         console.log(response.status)
//         if (response.status > 400) {
//             throw new Error();
//         } else {
//             return response.json()
//         }
//     })
//     .then(data => console.log(data))
//     .catch((error) => console.log("Error w/ the fetch"))

// fetch(`${baseUrl}/todos/1`).then(response => {
//     console.log(response);
//     return response.json()
// }).then(data => console.log(data));

// * 1b. fetch abstraction
// function axios(url) {
//     return fetch(url).then(response => response.json())
// };

// axios(`${baseUrl}/todos/1`)
//     .then(data => console.log(data));

// * POST
// fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: 'POST',
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//         title: 'Make homework',
//     }),
// }).then(res => res.json()).then(data => console.log(data))


// * Object serialization - deserialization
 
// const obj = {
//     id: 2,
//     value: 'Clean my computer'
// }

// * Object serialization - Now object is ready to be sent through the internet
//    const objString = JSON.stringify(obj)         // "{"id":2,"value":"Clean my computer"}"

// * Object deserialization - Now string is ready to be used in JS
//    const objStringToObj = JSON.parse(objString)  //    {id: 2, value: "Clean my computer"}