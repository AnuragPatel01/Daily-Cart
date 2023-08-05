const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const loginTab = document.getElementById('loginTab');
const logoutTab = document.getElementById('logoutTab');
const cartTab = document.getElementById('lg-bag');
// const content = document.getElementById('content'); // Assuming you have an element with this ID

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

let loggedIn = false;

function toggleTabs() {
    if (loggedIn) {
        loginTab.style.display = 'none';
        logoutTab.style.display = 'block';
        cartTab.style.display = 'block';
    } else {
        loginTab.style.display = 'block';
        logoutTab.style.display = 'none';
        cartTab.style.display = 'none';
    }
}

loginTab.addEventListener('click', () => {
    loggedIn = true;
    toggleTabs();
    content.innerHTML = '<p>Welcome, user!</p>';
});

logoutTab.addEventListener('click', () => {
    loggedIn = false;
    toggleTabs();
    content.innerHTML = '';
});

toggleTabs();

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'anuragpatel' && password === '123456') {
        window.location.href = '/index.html'; // Redirect to the correct path
    } else {
        alert('Invalid username or password. Please try again.');
    }
});