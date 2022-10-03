// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const navItemsEl = document.querySelectorAll(".item")
// console.log (`Number of categories: ${navItemsEl.length}`)

// const allTittleEl = document.querySelectorAll("h2")

// console.log('')
// const animalsEl = navItemsEl[0].querySelectorAll("li")
// console.log(`Category : ${allTittleEl[0].textContent}`)
// console.log(`Elements : ${animalsEl.length}`);

// console.log('')
// const productsEl = navItemsEl[1].querySelectorAll("li")
// console.log(`Category : ${allTittleEl[1].textContent}`)
// console.log(`Elements : ${productsEl.length}`);

// console.log('')
// const technologiesEl = navItemsEl[2].querySelectorAll("li")
// console.log(`Category : ${allTittleEl[2].textContent}`)
// console.log(`Elements : ${technologiesEl.length}`);


const navItemsEl = document.querySelectorAll(".item")
console.log (`Number of categories: ${navItemsEl.length}`)

navItemsEl.forEach((elem) => {
const allTittleEl = elem.querySelector("h2");
const productEl = elem.querySelectorAll("ul li");
console.log("");
console.log(`Category: ${allTittleEl.textContent}` );
console.log(`Elements: ${productEl.length}`);
});