const inputId = document.querySelector("#name-input");
const outputId = document.querySelector("#name-output");
// const outputLength = outputId.value;
// console.log(outputLength);
// inputId.addEventListener("input", (event) => {
//   outputId.textContent = event.currentTarget.value;
// });
inputId.addEventListener("input", (evt) => {
  const value = inputId.value;
  if (value) {
    outputId.textContent = evt.currentTarget.value;
  } else {
    outputId.textContent = "Anonymous";
  }
});
