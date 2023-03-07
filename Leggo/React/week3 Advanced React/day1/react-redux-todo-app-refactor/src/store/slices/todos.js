import { v4 as uuid } from 'uuid';
import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        list: [
            { id: uuid(), content: 'Learn JS', completed: true },
            { id: uuid(), content: 'Learn React', completed: false },
        ]
    },
    reducers: {
        add_todo: (state, action) => {
            const todo = {
                id: uuid(),
                content: action.payload,
                completed: false,
            };
            state.list.push(todo)

        },
        remove_todo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload);

        },
        toggle_completed: (state, action) => {
            // gets the index of the todo from the state
            const todoIndex = state.list.findIndex((todo) => todo.id === action.payload);
            const todo = state.list[todoIndex];
            // inverts the property of todo completed
            todo.completed = !todo.completed;
        },
        },
    }
)

export const { add_todo, remove_todo, toggle_completed } = todosSlice.actions;

export default todosSlice.reducer;