"use strict";
const word = document.querySelector('#words');
const btn = document.querySelector('#fBtn');
const cColor = document.querySelector('#change');
const sColor = document.querySelector('#pause');
btn.addEventListener('click', myFunction);
cColor.addEventListener('click', changeColor);
sColor.addEventListener('click', stopColor);
function myFunction() {
    word.textContent = 'I don\'t care about you!'; // changes text content
    setTimeout(() => word.textContent = 'Hello World', 3000); // resets text content to before (makes a change after a period of milliseconds)
}
let intervalID;
function changeColor() {
    // VARIABLE form exists so that it can be called back later to be cleared
    if (!intervalID) {
        intervalID = setInterval(flashText, 1000);
    }
}
function flashText() {
    //word.id = word.id === 'go' ? 'stop' : 'go';
    word.style.color = word.style.color === 'green' ? 'red' : 'green';
    // let textColors = ['red', 'green', 'purple', 'orange'];
    // let it: number;
    // while(!intervalID == null){
    //   word.style.color = textColors[it];
    // }
}
function stopColor() {
    clearInterval(intervalID);
    intervalID = null;
}
//! ===============================================================================================
console.log('yas');
let x;
x = (x, xx) => x(x(xx));
x = x(x => x * x, 3);
console.log(x);
