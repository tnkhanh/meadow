var loginBtn = document.getElementById("login-btn"),
    signupBtn = document.getElementById("signup-btn"),
    noBtn = document.getElementById("no-btn"),
    loginForm = document.getElementById("log-in"),
    signupForm = document.getElementById("sign-up");

loginBtn.onclick = function() {
    loginForm.style.display="block";
    signupForm.style.display="none";
}

signupBtn.onclick = function() {
    loginForm.style.display="none";
    signupForm.style.display="block";
}

noBtn.onclick = function() {
    loginForm.style.display="none";
    signupForm.style.display="none";
}
