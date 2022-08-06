const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const ingredient of ingredients) {
  const ingridientsId = document.querySelector("#ingredients");
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liItem.classList.add("item");
  ingridientsId.after(liItem);
}
