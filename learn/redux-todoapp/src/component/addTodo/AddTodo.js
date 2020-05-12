import React from 'react';

// redux import
import { connect } from 'react-redux'
import { addTodo } from '../../redux/action'

// input box  and button to dispatch

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
        }
    }

    onTextChange = (e) => {
        console.log(e.target.value);
        this.setState({
            input: e.target.value,
        })
    }

    handleTodo = () => {
        // dispatch action to add todo
        this.props.addTodo(this.state.input);

        this.setState({ input: '', })
    }

    render() {
    return (
            <div>
                <input
                    onChange={this.onTextChange}
                    value={this.state.input}/>
                <button
                    className="add-todo"
                    onClick={this.handleTodo}> 
                        Add Todo
                </button>
            </div>
        );
    }
}

export default connect( null, { AddTodo } )(AddTodo);