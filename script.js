const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const password = 'yourpassword'; // Set your password here

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (passwordInput.value === password) {
        window.location.href = 'welcome.html'; // Redirect to welcome page
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
});
