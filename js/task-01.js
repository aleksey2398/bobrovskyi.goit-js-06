const categories = document.querySelector("#categories");
const categoriesList = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${categoriesList.length}`);


categoriesList.forEach((item) => {
    const titleItems = item.querySelector(".item h2");
    console.log("Category: ", titleItems.textContent);
    const itemsLength = item.querySelectorAll(".item >ul >li");
    console.log("Elements: ", itemsLength.length);
});