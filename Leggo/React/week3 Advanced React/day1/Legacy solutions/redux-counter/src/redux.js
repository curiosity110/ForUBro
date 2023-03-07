const INC = 'increment';
const DEC = 'decrement';
const ADD_TODO = 'add_todo';

const initialState = {
    counter: 0,
    todo: ['Learn Redux', 'Master React']
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC: {
            let newState = { ...state };
            newState.counter++;
            return newState;
        }
        case DEC: {
            let newState = { ...state };
            newState.counter--;
            return newState;
        }
        case ADD_TODO: {
            let newState = { ...state }
            const newTodos = newState.todo.concat([action.data])
            newState.todo = newTodos;
            return newState
        }
        default:
            return state;
    }
}



render = () => {
    const counter = document.getElementById('counter');
    const state = store.getState();
    counter.innerHTML = state.counter;
    const todoList = document.getElementById('todos')
    todoList.innerHTML = '';
    for (let i = 0; i < state.todo.length; i++) {
        const todoElement = document.createElement('li');
        todoElement.innerHTML = state.todo[i];
        todoList.appendChild(todoElement);
    }
}

document.getElementById("inc")
    .addEventListener('click', () => store.dispatch({ type: 'increment' }));

document.getElementById("dec")
    .addEventListener('click', () => store.dispatch({ type: 'decrement' }));

document.getElementById("add-todo")
    .addEventListener('click', () => {
        const newTodo = document.getElementById('new-todo').value;
        store.dispatch({
            type: ADD_TODO,
            data: newTodo
        })
        document.getElementById('new-todo').value = '';
    })

const store = Redux.createStore(reducer);
store.subscribe(render);
render();