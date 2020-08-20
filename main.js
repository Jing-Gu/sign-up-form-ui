//init DOM elements
const form = document.querySelectorAll(".form");
const formSignUp = document.getElementById("form-sign-up");
const name = document.getElementById("name");
const emailSignUp = document.getElementById("email-sign-up");
const passwordSignUp = document.getElementById("password-sign-up");
const alert = document.getElementById("alert");

const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const container = document.getElementById("container");

//Events
//click btns animation
signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

//listen for form submission

formSignUp.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  console.log("done");

  saveMessage(name, emailSignUp, passwordSignUp);

  alert.style.opacity = "1";
}

//save data to firebase
function saveMessage(name, emailSignUp, passwordSignUp) {
  let newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: emailSignUp,
    password: passwordSignUp
  });
}
