import React, { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // instead of having two states, we can also package it into an object - if we should, depends on how we use it later
    const [user, setUser] = useState({username: '', password: ''})

    const checkState = (event) => {
        event.preventDefault();
        console.log(`username: ${user.username}, password: ${user.password}`);
    }

        return (
            <form>
                <label htmlFor="username">
                    Username:
                    <input value={user.username} type="text" name="username" onChange={(event) => setUser({ username: event.target.value, password: user.password })}  />
                </label>
                <label htmlFor="password">
                    Password:
                    <input value={password} type="password" name="password" onChange={(event) => setPassword(event.target.value)}  />
                </label>
                <button onClick={(event) => checkState(event)}>check State</button>
            </form>
        );
}

export default Login;
