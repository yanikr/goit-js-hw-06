function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bod = document.querySelector("body");
const btnClr = document.querySelector(".change-color");
const ClrId = document.querySelector(".color");
btnClr.addEventListener("click", () => {
  bod.style.backgroundColor = getRandomHexColor();
  ClrId.textContent = getRandomHexColor();
});
