import React from 'react';
import axios from 'axios';

export default class UserCreate extends React.Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        // new object
        const user = {
            username: this.state.username,
        }

        console.log(user);
        // post to db
        axios.post('http://localhost:8081/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
        });
    }

    render() {
        return (
            <div className='container'>
                <h3>Create New user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type='text' required className="form-control"
                            value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}