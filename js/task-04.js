let counterValue = 0;
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueId = document.querySelector("#value");
const decrementClick = () => {
  counterValue -= 1;
  valueId.textContent = counterValue;
};
decrementBtn.addEventListener("click", decrementClick);
const incrementClick = () => {
  counterValue += 1;
  valueId.textContent = counterValue;
};
incrementBtn.addEventListener("click", incrementClick);
