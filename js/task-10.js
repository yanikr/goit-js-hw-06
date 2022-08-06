function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createDiv = document.querySelector("[data-create]");
const input = document.querySelector("input");
const reset = document.querySelector("[data-destroy]");
const bxs = document.querySelector("#boxes");
createDiv.addEventListener("click", addDivs);
reset.addEventListener("click", resetPage);
input.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter") {
    evt.preventDefault();
    createDiv.click();
  }
});
function addDivs() {
  const numberOfDivs = Number(document.querySelector("input").value);
  let singleDiv = document.createDocumentFragment();
  for (let i = 0; i < numberOfDivs; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.height = `${i * 10 + 30}px`;
    newDiv.style.width = `${i * 10 + 30}px`;
    newDiv.style.display = "inline-block";
    newDiv.style.marginRight = "5px";
    singleDiv.appendChild(newDiv);
  }
  bxs.appendChild(singleDiv);
}

function resetPage() {
  bxs.innerHTML = "";
}
