const signUpBtn = document.querySelector("#signUp");
const signInBtn = document.querySelector("#signIn");
const container = document.querySelector("#containerId");

signUpBtn.addEventListener("click", e => {
  e.preventDefault();
  container.classList.add("right_panel_active");
});

signInBtn.addEventListener("click", e => {
  e.preventDefault();
  container.classList.remove("right_panel_active");
});
