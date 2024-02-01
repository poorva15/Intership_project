// Common functions for both login and signup pages
function redirectToLogin() {
    window.location.href = 'login.html';
}

function redirectToSignup() {
    window.location.href = 'signup.html';
}

// Authentication logic for login page
function submitLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const authenticatedUser = users.find(user => user.username === username && user.password === password);
    
    if(username == ''){
        alert('Please enter the password');
        return;
    }
    if(password == ''){
        alert('Please enter the password');
        return;
    }

    if (authenticatedUser) {
        alert('Login successful!');
        // Redirect or perform other actions after successful login
    } else {
        alert('Invalid username or password');
    }
    window.location.href = `index.html?username=${encodeURIComponent(username)}`;
}

// Authentication logic for signup page
function submitSignup() {
    const newUsername = document.getElementById('signupUsername').value;
    const newPassword = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if(newUsername == ''){
        alert('Please enter the password');
        return;
    }
    if(newPassword == ''){
        alert('Please enter the password');
        return;
    }
    if(confirmPassword == ''){
        alert('Please enter the password');
        return;
    }
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Check if the username already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.username === newUsername);

    if (existingUser) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    // Save user to localStorage
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign Up successful! You can now login.');
    window.location.href = `index.html?username=${encodeURIComponent(newUsername)}`;
}

