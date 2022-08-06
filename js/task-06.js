const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  if (input.getAttribute("data-length") == input.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
