const input = document.querySelector("input");
const text = document.querySelector("#text");

input.addEventListener("input", () => {
  const value = input.value;
  text.style.fontSize = value + "px";
});
