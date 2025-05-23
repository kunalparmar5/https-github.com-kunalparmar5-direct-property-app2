document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            // Basic validation (can be expanded)
            const email = loginForm.querySelector('#email').value;
            const password = loginForm.querySelector('#password').value;

            if (!email || !password) {
                alert('Please enter both email and password.');
                return;
            }

            // Simulate successful login
            console.log('Login attempt:', email);
            localStorage.setItem('isLoggedIn', 'true');
            alert('Login successful! Redirecting...');
            window.location.href = 'property_search.html'; // Redirect to a main page after login
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            const passwordInput = signupForm.querySelector('#password');
            const confirmPasswordInput = signupForm.querySelector('#confirmPassword');
            
            if (!passwordInput || !confirmPasswordInput) {
                // Should not happen if HTML is correct, but good for robustness
                alert('Password fields not found.');
                event.preventDefault();
                return;
            }

            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                event.preventDefault(); // Prevent form submission
            } else {
                // Simulate successful signup
                event.preventDefault(); // Prevent actual submission as it's frontend only
                alert('Signup successful! Please login.');
                window.location.href = 'index.html'; // Redirect to login page after signup
            }
        });
    }
});
