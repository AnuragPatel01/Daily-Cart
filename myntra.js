

// script.js



  const nav = document.getElementById('navbar');
        const loginModal = document.getElementsByClassName('login-container');
        const close = document.getElementById('close');
        const loginForm = document.getElementById('login-form');
        const errorMessage = document.getElementById('error-message');

        // Open login modal
        document.getElementById('bar').addEventListener('click', () => {
            nav.classList.add('active');
            loginModal.style.display = 'block';
        });

        // Close login modal
        if (close) {
            close.addEventListener('click', () => {
                nav.classList.remove('active');
                loginModal.style.display = 'none';
                errorMessage.textContent = ''; // Clear error message
            });
        }

        // Handle login form submission
        
        if (loginForm) {
          loginForm.addEventListener('submit', (event) => {
              event.preventDefault();

              const username = document.getElementById('username').value;
              const password = document.getElementById('password').value;

              if (username === 'anuragpatel' && password === '123456') {
                  // Simulate successful login by displaying a message
                  errorMessage.textContent = 'Login successful. Redirecting...';
                  setTimeout(() => {
                      window.location.href = '/index.html'; // Redirect after a delay
                  }, 2000); // Delay in milliseconds
              } else {
                  errorMessage.textContent = 'Invalid username or password. Please try again.';
              }
            });
        }