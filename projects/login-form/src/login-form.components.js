import React from 'react'

export default class LoginForm extends React.Component {
    // constructor
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',   // bad dont do this
        }
    }
    // bind this 

    // on change
    onChangeUsername (e) {
       this.setState({
           username: e.target.value,
       }) 
    }
    onChangePassword (e) {   // again bad dont do this
       this.setState({
           password: e.target.value,
       }) 
    }

    onSubmit() {
        alert("thanks for logging in\nuser \t\t" + this.state.username + "\npassword \t" + this.state.password);
    }

    render() {
        return (
            <div className='container'>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type='text' required className="form-control"
                            value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                                        <div className="form-group">
                        <label>Password: </label>
                        <input type='password' required className="form-control"
                            value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}