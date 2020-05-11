import React from 'react'

import AddTodo from '../addTodo/AddTodo'
import TodoList from '../todoList/TodoList'
import VisibilityFilters from '../visibilityFilters/VisibilityFilters'




const TodoApp = props => {
    return (
        <div>
            <h3>Todo List</h3>
            <hr/>
            <>
                <AddTodo />
                <TodoList />
                <VisibilityFilters />
            </>
        </div>
    )
}


export default TodoApp