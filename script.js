//your JS code here. If required.
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
    showExistingUserButton();
});

function showExistingUserButton() {
    const existingUserButton = document.getElementById('existing');
    const storedUsername = localStorage.getItem('username');

    if (storedUsername) {
        existingUserButton.style.display = 'block';
        existingUserButton.addEventListener('click', function() {
            alert(`Logged in as ${storedUsername}`);
        });
    } else {
        existingUserButton.style.display = 'none';
    }
}

window.onload = function() {
    showExistingUserButton();
};
