import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Invalid credentials');
                }
            })
            .then(data => {
                localStorage.setItem('user', JSON.stringify(data));
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div id='main'>
            <div class="container">
                <div class="form_area">
                    <p class="sub-title">Welcome back! 👋</p>
                    <h3 class="title">Sign up to your account</h3>
                    <form id="signupForm" onSubmit={handleLogin}>
                        <div class="form_group">
                            <label class="sub_title" for="email">Username</label>
                            <input
                             placeholder="Username"
                            id="email" 
                            class="form_style" 
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div class="form_group">
                            <label class="sub_title" for="password">Password</label>
                            <input 
                            placeholder="Enter your password" 
                            id="password" 
                            class="form_style" 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button class="btn" id="submitBtn" type='submit'>CONTINUE</button>
                        </div>
                        <span id="genericError" class="err">{error && <p>{error}</p>}</span>
                    </form>
                </div>
                <p class="sign-up_link">Don't have an account? <a href="/">Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;
