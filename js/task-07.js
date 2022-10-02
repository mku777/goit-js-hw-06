// напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const fontSizeRange = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function changeFontSize(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
 }

fontSizeRange.addEventListener('input', changeFontSize) 
 textEl.style.fontSize = `${fontSizeRange.value}px`;









