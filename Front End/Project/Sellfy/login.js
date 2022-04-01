//register
let usernameS = 'manish@gmail.com';
let passwordS = '12345';

let username2 = 'manish2@gmail.com';
let password2 = 'password';

const loginErrorMsg = document.getElementById("login-error-msg");


//login
function login() {
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;

    if (uname == '') {
        alert("please enter user name.");
    }
    else if (pwd == '') {
        alert("enter the password");
    }
    else if(uname === usernameS && pwd === passwordS){
        window.location = "index.html";
    }
    else if(uname === username2 && pwd === password2){
        window.location = "index.html";
    }
    else
    {
        loginErrorMsg.style.opacity = 1;
    }
}


function register() {
    var uname = document.getElementById("email-field").value;
    var pwd = document.getElementById("password-field").value;
    var cpwd = document.getElementById("c-password-field").value;

    if (uname == '') {
        alert("please enter user name.");
    }
    else if (pwd == '') {
        alert("enter the password");
    }
    else if ( pwd.length > 10) {
        alert("Password length cannot be greater than 10.");
    }
    else if(pwd != cpwd)
    {
        alert("Password dosen't match.");
    }
    else if(uname === usernameS){
        alert("User is already registerd.");
    }
    else
    {
        usernameS = uname;
        passwordS = pwd;
        alert("Successfully registerd.");
        window.location = "index.html";
    }
}







// const registerForm = document.getElementById("register-form");
// const registerButton = document.getElementById("register-form-submit");
// const registerErrorMsg = document.getElementById("register-error-msg");




// //login
// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = loginForm.email.value;
//     const password = loginForm.password.value;

//     if (username === usernameS && password === passwordS) {
//         self.location.href = "index.html";
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })




// registerButton.addEventListener("click", (f) => {
//     f.preventDefault();
//     if (  registerForm.password.value ===  registerForm.cpassword.value) {
//         self.location.href = "index.html";

//         usernameS = registerForm.email.value;
//         passwordS = registerForm.password.value;
//     } else {
//         registerErrorMsg.style.opacity = 1;
//     }
// })