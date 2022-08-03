const countCategories = document.querySelectorAll(".item");
console.log("Number of categories:", countCategories.length);
[countCategories].forEach.call(countCategories, (element) => {
  const listTitle = element.querySelector("h2").textContent;
  const listItems = element.querySelectorAll("li").length;
  console.log(`Category: ${listTitle}
Elements: ${listItems}`);
});
