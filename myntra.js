const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const loginTab = document.getElementById('loginTab');
const logoutTab = document.getElementById('logoutTab');
const cartTab = document.getElementById('lg-bag');


if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

let loggedIn = false;


// Function to toggle login/logout tabs
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

// Event listener for login button
loginTab.addEventListener('click', () => {
    loggedIn = true;
    toggleTabs();
    
      
      
    // You can also perform additional actions like showing user-specific content
    content.innerHTML = '<p>Welcome, user!</p>';
});


// Event listener for logout button
logoutTab.addEventListener('click', () => {
    loggedIn = false;
    toggleTabs();
    // Clear user-specific content
    content.innerHTML = '';
    
});

// Initialize tabs based on login status
toggleTabs();




document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    
    if (username === 'anuragpatel' && password === '123456') {
      window.location.href = '/index.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });

