import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [uReg, setUReg] = useState('');
    const [pReg, setPReg] = useState('');
    const [uLog, setULog] = useState('');
    const [pLog, setPLog] = useState('');

    const onUReg = e => setUReg(e.target.value);
    const onPReg = e => setPReg(e.target.value);
    const onULog = e => setULog(e.target.value);
    const onPLog = e => setPLog(e.target.value);

    const login = () => {
        axios
            .post(
                'http://localhost:4000/login',
                { username: uLog, password: pLog }
                // { withCredentials: true }
            )
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    const register = () => {
        axios
            .post(
                'http://localhost:4000/register',
                { username: uReg, password: pReg }
                // { withCredentials: true }
            )
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    const getUser = () => {
        axios
            .get('http://localhost:4000/user')
            .then(res => console.log(res.data))
            .catch(e => console.log(e));
    };

    return (
        <div className="App">
            <div>
                <h1>Register</h1>
                <input placeholder="username" value={uReg} onChange={onUReg} />
                <input placeholder="password" value={pReg} onChange={onPReg} />
                <button onClick={register}>Submit</button>
            </div>

            <div>
                <h1>Login</h1>
                <input placeholder="username" value={uLog} onChange={onULog} />
                <input placeholder="password" value={pLog} onChange={onPLog} />
                <button onClick={login}>Submit</button>
            </div>

            <div>
                <h1>Get User</h1>
                <button onClick={getUser}>Submit</button>
            </div>
        </div>
    );
}

export default App;
