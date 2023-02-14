const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="password"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(inputEmail.value === '' || inputPassword.value === '') {
        alert('All fields must be filled');
    } else console.log({
        email: inputEmail.value,
        password: inputPassword.value,
    });
    event.currentTarget.reset();
});

