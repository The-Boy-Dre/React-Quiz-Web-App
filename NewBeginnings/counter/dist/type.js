"use strict";
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        // target is the element that triggered the event (e.g., the user clicked on)
        // currentTarget is the element that the event listener is attached to.
        const operation = e.currentTarget.classList;
        if (operation.contains('decrease')) {
            count--;
        }
        else if (operation.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = '#222';
        }
        value.textContent = count;
    });
});
