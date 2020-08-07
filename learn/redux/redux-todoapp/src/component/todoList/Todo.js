import React from 'react';
// import cx from 'classnames'

const Todo = ({ props }) => {
    return (
        <li className="todo-item" onClick={() => {} /* dispatch action to toggle todo*/}>
            { props && props.completed ? "yeet" : "ew" } { " " }
            { props.content }
        </li>
    );
}

export default Todo;