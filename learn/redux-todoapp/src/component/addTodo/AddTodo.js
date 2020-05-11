import React from 'react';

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
    handleTodo = props => {
        console.log(`hey there ${this.state.input}`);
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

export default AddTodo;