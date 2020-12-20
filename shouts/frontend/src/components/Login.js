import React, { useState } from 'react'

function Login() {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUserName] = useState("")
    const login = (event) => {
        console.log("login");
        console.log(email, password);
        fetch('/auth/', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                password,
                email,
                username
            })
        }).then(
            data => {
                console.log(data);
            }
        ).catch(error => console.log(error))
    }
    return (
        <div>
            <h1>Login User Form</h1>
            <label> Email : </label>
            <input type="email" name="email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label> userName : </label>
            <input type="text" name="username" value={username}
                onChange={(e) => setUserName(e.target.value)} />
            <br />
            <label> Password : </label>
            <input type="password" name="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={login}>Login</button>

        </div>
    )
}

export default Login