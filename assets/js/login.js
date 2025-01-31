function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');
    
    emailError.textContent = '';
    passwordError.textContent = '';
    
    if (email === '') {
        emailError.textContent = 'Email is required';
    }
    
    if (password === '') {
        passwordError.textContent = 'Password is required';
    }

    if (email && password) {
        // Proceed with login functionality (e.g., validate credentials)
        window.location.href = 'home.html'; // Redirect to another page after login
    }
}

function signUp() {
    let email = document.getElementById('email-signup').value;
    let password = document.getElementById('password-signup').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    
    let emailError = document.getElementById('email-signup-error');
    let passwordError = document.getElementById('password-signup-error');
    let confirmPasswordError = document.getElementById('confirm-password-error');
    
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    
    if (email === '') {
        emailError.textContent = 'Email is required';
    }
    
    if (password === '') {
        passwordError.textContent = 'Password is required';
    }
    
    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
    }

    if (email && password && confirmPassword === password) {
        // Proceed with signup functionality
        window.location.href = 'home.html'; // Redirect after successful signup
    }
}

function togglePassword(id) {
    let passwordField = document.getElementById(id);
    let type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
}

function login() {
    // You can add validation or other checks here before redirecting
    window.location.href = "index.html"; // Redirects to 'nextpage.html'
}
