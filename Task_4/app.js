
function redirectToLogin() {
    window.location.href = 'login.html';
}

function redirectToSignup() {
    window.location.href = 'signup.html';
}

    function submitLogin() {
    console.log('submitLogin function is executing');
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

// cards sliders

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})

const movies = [
    "Bhediya",
    "Loki",
    "Wanda Vision",
    "Raya and the Last Dragon",
    "Luca",
    "Mrs.Chatterjee Vs Norway",
    "Tu Jhooti Main Makkar",
    "creater",
    "The Mother",
    "Moving",
    "My demon",
    "Advengers",
    "Squid Game",
    "Jawan",
    "Pathaan",
    "Animal",
    "Gadar 2",
    "The Kerala Story",
    "The Outlaws 2",
    "The Witch: Part 2",
    "Seobok",
    "Avatar 2",
    "Guardians of the Galaxy Vol. 3",
    "Fantastic Beasts and Where to Find Them 3"
];

const searchInput = document.getElementById('searchInput');
const movieContainer = document.getElementById('movieContainer');

searchInput.addEventListener('input', handleSearch);
searchInput.addEventListener('keydown', handleKeyPress);

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
}

function displayMovies(moviesToShow) {
    movieContainer.innerHTML = '';

    moviesToShow.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = movie;

        movieContainer.appendChild(card);
    });
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        handleSearch();
        console.log('Hello');
    }
}