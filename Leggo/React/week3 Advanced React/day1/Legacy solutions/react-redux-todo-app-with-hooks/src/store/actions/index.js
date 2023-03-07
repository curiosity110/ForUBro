import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_COMPLETED,
    CHANGE_FILTER,
    UPDATE_QUOTE
} from '../types';


export const addTodo = (todo) => {
    return {
        data: todo,
        type: ADD_TODO,
    }
}

export const removeTodo = (todoId) => {
    return {
        data: todoId,
        type: REMOVE_TODO
    }
}

export const handleToggleCompleted = (todoId) => {
    return {
        type: TOGGLE_COMPLETED,
        data: todoId
    }
}

export const changeFilter = (filter) => {
    return {
        type: CHANGE_FILTER,
        data: filter
    }
}

export const updateQuote = (data) => {
    return {
        type: UPDATE_QUOTE,
        data: data
    }
}