const decrement = document.querySelector('[data-action="decrement"]');
const number = document.querySelector('span');
const increment = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrement.addEventListener('click', () => {
    counterValue -= 1;
    number.textContent = counterValue;
});

increment.addEventListener('click', () => {
    counterValue += 1;
    number.textContent = counterValue;
});