const categories = document.querySelector('#categories');
const categoriesItem = document.querySelectorAll('.item');
const list = document.querySelectorAll('.item ul');

console.log('Number of categories: ', categories.children.length);

categoriesItem.forEach((el, idx) => {
    console.log('Category:', el.firstElementChild.textContent);
    console.log('Elements:', list[idx].children.length);
});