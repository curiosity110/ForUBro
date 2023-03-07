import { v4 as uuid } from 'uuid';
import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETED } from '../types';

const initialState = [
  { id: uuid(), content: 'Learn JS', completed: true },
  { id: uuid(), content: 'Learn React', completed: false },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      // creates the object we want to add to the state
      const todo = {
        content: action.data,
        completed: false,
        id: uuid(),
      };

      // creates copy of the state
      const newState = [...state];
      // concats the new object
      const newTodos = newState.concat(todo);
      return newTodos;
    }

    case REMOVE_TODO: {
      const newState = [...state];
      // returns an array with all the todos except the one in the action
      const todos = newState.filter((todo) => todo.id !== action.data);
      return todos;
    }

    case TOGGLE_COMPLETED: {
      // gets the index of the todo from the state
      const todoIndex = state.findIndex((todo) => todo.id === action.data);
      // copies the todo
      const todo = { ...state[todoIndex] };
      // inverts the property of todo completed
      todo.completed = !todo.completed;
      // copies the state
      const newState = [...state];
      // overwrites the copy of the state with the new todo
      newState[todoIndex] = todo;
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;
