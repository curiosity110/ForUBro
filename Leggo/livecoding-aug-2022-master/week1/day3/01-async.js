/**
 * 01 - Async code
 */

// * Sync VS Async code
// JS executes our code line by line
// Whenever it finds a line with async code sends the code, to the
// async "bucket". This code will be only executed once the synchronous bucket
// is empty.

// * SetTimeout functionality
// setTimeout generates async code. When we call it, we pass 2 arguments to it,
// a function(callback) to be called, and an amount of time(ms) for setTimeout to wait until
// it can ask JS if it can run the callback. When JS goes 'IDLE' then the timeouts will be able
// to execute their code


// console.log('hi');
// console.log('in the middle');
// console.log('in the end');

function longFunction() {
    console.log('Starting heavy computation');
    for (var i = 0; i < 10_000_000_000; i++) { }
    console.log('Finished heavy computation');
}
// longFunction()


// * It blockes the UI
// console.log('hi');
// setTimeout(() => {
    // console.log('In da timeout!');
// }, 0);
// console.log('in the end');



/**
 * Stack call
 */

let i = 1;
function foo() {
    bar();
    console.log('foo')
}

function bar() {
    baz();
    console.log('bar')
} 

function baz() {
    console.log('baz')
}

// foo();
// How many logs?   3
// 1: baz | foo  
// 2: bar | bar 
// 3: foo | baz


setTimeout(function cb() {
    console.log('in da timeout');
}, 0)

setTimeout(function cb() {
    console.log('slower timeout');
}, 200)

setTimeout(function cb() {
    console.log('faster timeout?');
}, 100)

// 1. In da
// 2. Faster
// 3. Slower

foo()




// setTimeout(function cb() {
//     console.log('1ms');
// }, 1)

// setTimeout(function cb() {
//     console.log('0ms');
// }, 0)




/**
 *
 * The Scope Challenge
 *
*/
// ES6
// function solution1() {
//     for (let i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 100);
//     }
// }
// solution1();

// BIND
// function solution2() {
//     for (var i = 0; i < 5; i++) {
//         setTimeout(
//             ((a) => {
//                 console.log(a);
//             }).bind(null, i),
//             100
//         );
//     }
// }
// solution2();

// IIFE
// function solution3() {
//     for (var i = 0; i < 5; i++) {
//         setTimeout(
//             ((a) => () => {
//                 console.log(a);
//             })(i),
//             100
//         );
//     }
// }
// solution3();

