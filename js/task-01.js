const items = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${items.length}`);
const childrenArr = [...items].map(item => console.log(`Category: ${item.children[0].textContent} 
Elements: ${item.children[1].children.length}`));