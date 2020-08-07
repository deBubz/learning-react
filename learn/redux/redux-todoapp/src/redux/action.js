import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes'

// action creator

let nextTodoId = 0;

// addTodo action
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})

// toggleTodo action
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

// setFilter action
export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
});