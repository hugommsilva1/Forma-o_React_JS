import React from 'react'

function LoginPage(){

const titleLogin = "LOGIN";
const errorLogin = "Invalid username or password";
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        window.location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


return(
    <>

    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{titleLogin.toLowerCase}</title>
        <link rel="stylesheet" href="login-page.css"/>
        <script defer src="login-page.js"></script>
    </head>

    <body>
        <main id="main-holder">
            <h1 id="login-header">{titleLogin}</h1>
    
            <div id="login-error-msg-holder">
                <p id="login-error-msg"><span>{errorLogin}</span></p>
            </div>
    
            <form id="login-form">
                <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username"/>
                <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password"/>
                <input type="submit" value="Login" id="login-form-submit"/>
            </form>
        </main>
    </body>
    </html>
    
    
    </>
)
}

export default LoginPage