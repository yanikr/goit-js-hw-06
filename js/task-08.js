const form = document.querySelector(".login-form");
const email = document.querySelector("[name='email']");
const password = document.querySelector("[name='password']");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Please fill in all the fields");
  }
  const user = { email: `${email.value}`, password: `${password.value}` };
  console.log(user);
  event.currentTarget.reset();
}
