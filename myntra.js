const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

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

// script.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    
    if (username === 'anuragpatel' && password === '123456') {
      window.location.href = 'Daily-Cart/myntra.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  