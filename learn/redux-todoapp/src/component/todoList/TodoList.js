import React from 'react';

import Todo from './Todo'

const TodoList = ({ props }) => {
    return (
        <>
            <ul className="todo-list">
                { props && props.length ?
                    props.map((item, index) => {
                        return <Todo key={`todo-${item.id}`} todo={item}/>
                    }):
                    "None left in list"}
            </ul>
        </>
    );
}

export default TodoList;