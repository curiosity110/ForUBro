/**
 * 02 - Events
 */

const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  console.log('Button was clicked');
  console.log(event);
});

button.addEventListener('mouseenter', () => {
    console.log('going in');
})
button.addEventListener('mouseleave', () => {
    console.log('going out');
})

document.addEventListener('keypress', (e) => {
    console.log(e.key);
})