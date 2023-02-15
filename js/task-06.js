const input = document.querySelector('input');

input.addEventListener('blur', (event) => {
    const userValue = event.currentTarget.value.length;
    const eventLength = Number(input.dataset.length);
    console.log(eventLength)
    if(eventLength !== userValue) {
        input.classList.add('invalid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
});