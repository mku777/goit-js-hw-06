// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');


input.addEventListener('input', (event) => {
    if (input.value === "") {
     return nameLabel.textContent = 'Anonymous';
    }
    nameLabel.textContent = event.currentTarget.value;
});