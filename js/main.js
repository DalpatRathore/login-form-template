const signUpBtn = document.querySelector("#signUp");
const signInBtn = document.querySelector("#signIn");
const container = document.querySelector("#containerId");

signUpBtn.addEventListener("click", () => {
  container.classList.add("right_panel_active");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("right_panel_active");
});
