import React from 'react';

// redux
import { connect } from 'react-redux'
import { getTodos } from '../../redux/selector'

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

const mapStateToProps = state => {
    const { byIds, allIds } = state.todos || {};
    const todos = allIds && allIds.length 
        ? allIds.map(id => (byIds ? {...byIds[id], id} : null))
        : null;
    return { todos };
}

export default connect(state => ({ todos: getTodos(state) }))
    (TodoList);