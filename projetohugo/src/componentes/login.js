import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    let isSuccessful = false;

  
    document.getElementById("loginbutton").onclick = function(){
        if (email === "admin@admin.com" & pass === "pass") {
            isSuccessful = true;
            alert("Login Successfull")
        } else {
            isSuccessful = false;
            alert("Login Failed")
        }
    }


    return (
        <div className="auth-form-container">
            <h1>Shopping List 🛒</h1>
            <p className= "emoji">🔒</p>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button id="loginbutton" type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}