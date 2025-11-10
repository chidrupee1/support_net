document.addEventListener("DOMContentLoaded", () => {
    const loginBox = document.querySelector(".login-box");
    const signupBox = document.querySelector(".signup-box");
    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");

    showSignup.addEventListener("click", () => {
        loginBox.classList.remove("active");
        signupBox.classList.add("active");
    });

    showLogin.addEventListener("click", () => {
        signupBox.classList.remove("active");
        loginBox.classList.add("active");
    });

    signupBtn.addEventListener("click", () => {
        signupBox.classList.add("active");
        loginBox.classList.remove("active");
    });

    loginBtn.addEventListener("click", () => {
        loginBox.classList.add("active");
        signupBox.classList.remove("active");
    });
});
