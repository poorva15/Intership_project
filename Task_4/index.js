document.addEventListener('DOMContentLoaded', function () {
    // Extract username from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    // Display the username on the page
    const welcomeMessage = document.getElementById('welcomeMessage');
    const loginLink = document.getElementById('loginButton');
    const isAuthenticated = Boolean(username);
    const searchBox = document.getElementById('searchInput');

    if (username) {
        // User is authenticated, show the welcome message and hide the login link
        welcomeMessage.innerText = `Welcome, ${username}`;
        loginLink.style.display = 'none';
        searchBox.style.marginTop = "40px";
    } else {
        // User is not authenticated, hide the welcome message and show the login link
        welcomeMessage.style.display = 'none';
        // loginLink.style.display = 'block';
    }
});
