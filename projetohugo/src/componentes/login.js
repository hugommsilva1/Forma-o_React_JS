import React, { useState } from "react";
import "../App.css";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    let emojiLogin = "🔒";
    let isSuccessful = false;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        if (email === "admin@admin.com" & pass === "pass") {
            isSuccessful = true;
            emojiLogin = "🔓";
            console.log("Login Successfull " + isSuccessful)
            window.location = '/home';
            //navigation.navigate('/home', { /* params go here */ })
        } else {
            isSuccessful = false;
            emojiLogin = "🔒";
            window.location = '/loginfailed';
            alert("Login Failed " + isSuccessful)

        }
    }



    const Login = () => {
        if (email === "admin@admin.com" & pass === "pass") {
            isSuccessful = true;
            emojiLogin = "🔓";
            alert("Login Successfull")

        } else {
            isSuccessful = false;
            emojiLogin = "🔒";
            alert("Login Failed")
        }
    }




    return (
        <div className="auth-form-container">
            <h1>Shopping List 🛒</h1>
            <p id="emojiloginid" className="emoji">{emojiLogin}</p>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button id="loginbutton" type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
              
    )
}

