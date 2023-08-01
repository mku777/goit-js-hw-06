// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.map(el => {
  console.log(el);
  const liItemEL = document.createElement('li');
  console.log(liItemEL);
  liItemEL.className = 'item';
  liItemEL.textContent = el;
document.body.append(liItemEL);
})
