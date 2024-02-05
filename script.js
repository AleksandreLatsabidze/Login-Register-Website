let wrapper = document.querySelector(".wrapper");
let loginLink = document.querySelector(".login-link");
let registerLink = document.querySelector(".register-link");
let showRegistr = document.querySelector(".btnLogin");
let hideRegistr = document.querySelector(".close-icon");
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

showRegistr.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});
hideRegistr.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

let inputUp = document.getElementById("inputUp");
let emailUp = document.getElementById("emailUp");
let inputBox = document.getElementById("input-box");

var email = document.getElementById("inputUp").value;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

inputUp.addEventListener("keydown", function () {
  if (inputUp.value != "") {
    emailUp.classList.add("doneUp");
  } else {
    emailUp.classList.remove("doneUp");
    // inputBox.classList.remove("error");
  }
  if (!emailRegex.test(email)) {
    inputBox.classList.add("error");
  } else {
    inputBox.classList.remove("error");
  }
});
