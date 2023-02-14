const input = document.querySelector('input');

input.addEventListener('blur', (event) => {
    const enterLength = event.currentTarget.value.length;
    const eventLength = input.dataset.length;
    if(enterLength < eventLength || enterLength > eventLength) {
        input.classList.add('invalid');
    } else input.classList.add('valid');
})