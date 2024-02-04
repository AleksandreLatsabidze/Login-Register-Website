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
