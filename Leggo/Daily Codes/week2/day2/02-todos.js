/**
 * 03 - Todos
 */

const url = 'https://jsonplaceholder.typicode.com/todos';
// Get a reference in JS world to the HTML element
const container = document.getElementById('root');

const button = document.createElement('button');
button.innerText = "Click me!";

// FETCH approach
// button.addEventListener('click', () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       renderTodos(data)
//     })
// })

// ASYNC/AWAIT
button.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderTodos(data)
  } catch(e) {
    console.log('Here comes the error');
  }
})



container.appendChild(button)


function renderTodos(todos) {
  // userId, id, title, completed: boolean
  const ul = document.createElement('ul');
  todos.forEach(todo => {
    const li = document.createElement('li');
    
    const spanForUser = document.createElement('span');
    spanForUser.innerText = `Id ${todo.userId} -> `;
    li.appendChild(spanForUser);
    
    const spanForTitle = document.createElement('span');
    spanForTitle.innerText = todo.title;
    if (todo.completed) {
      spanForTitle.classList = 'done'
    } else {
      spanForTitle.classList = 'undone'
    }
    li.appendChild(spanForTitle);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    if (todo.completed) {
      checkbox.setAttribute('checked', true)
    }

    li.appendChild(checkbox);
    ul.appendChild(li);
  })
  container.appendChild(ul)

}