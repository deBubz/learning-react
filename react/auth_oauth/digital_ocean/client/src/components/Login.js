import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}

const Login = ({ setToken }) => {
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');

    const unameChange = (e) => setUname(e.target.value);
    const passChange = (e) => setPass(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({ uname, pass });
        console.log(token);
        setToken(token);
    };
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={unameChange} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={passChange} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};

export default Login;
