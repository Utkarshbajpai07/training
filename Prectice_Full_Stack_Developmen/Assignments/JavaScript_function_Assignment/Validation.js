
const form = document.getElementById('nameForm');

const usernameInput = document.getElementById('username');

const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
    errorMessage.textContent = '';

    if (usernameInput.value.trim() === '') {
        event.preventDefault();

        errorMessage.textContent = 'Please enter your name.';
    }
});
