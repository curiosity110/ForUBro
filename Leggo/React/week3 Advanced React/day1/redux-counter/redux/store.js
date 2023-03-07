const counterSlice = RTK.createSlice({
    name: "slice",
    initialState: {
        counter: 0,
        todos: ['Learn Redux', 'Master React']
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        add_todo: (state, action) => {
            new_state = [...state.todos]
            console.log(new_state)
            new_state.push(action.payload)
            state.todos = new_state;
        }
    }
})
// optional step allowing us to just call increment() instead of counterSlice.actions.increment()
const { increment, decrement, add_todo } = counterSlice.actions;



const store = RTK.configureStore({
    reducer: {
        slice: counterSlice.reducer,
    }
});
// optional step allowing us to just call dispatch() instead of store.dispatch()
const { dispatch } = store


render = () => {
    const counter = document.getElementById('counter');
    const state = store.getState();
    counter.innerHTML = state.slice.counter;
    const todoList = document.getElementById('todos')
    todoList.innerHTML = '';
    for (let i = 0; i < state.slice.todos.length; i++) {
        const todoElement = document.createElement('li');
        todoElement.innerHTML = state.slice.todos[i];
        todoList.appendChild(todoElement);
    }
}


// adding the eventListeners
document.getElementById("increment")
    .addEventListener('click', () => dispatch(increment()));

document.getElementById("decrement")
    .addEventListener('click', () => dispatch(decrement()));

document.getElementById("add-todo")
    .addEventListener('click', () => {
        const newTodo = document.getElementById('new-todo').value;
        dispatch(add_todo(newTodo))
        document.getElementById('new-todo').value = '';
    })

    
// connecting the render function to be called when store state changes
store.subscribe(render);
render();
