document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');
    const uploadPropertyLink = document.getElementById('uploadPropertyLink');
    const loginLink = document.getElementById('loginLink'); 

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        if (uploadPropertyLink) uploadPropertyLink.style.display = 'inline'; // Or 'inline-block' based on li display
        if (logoutButton) logoutButton.style.display = 'inline';
        if (loginLink) loginLink.style.display = 'none';
    } else {
        if (uploadPropertyLink) uploadPropertyLink.style.display = 'none';
        if (logoutButton) logoutButton.style.display = 'none';
        if (loginLink) loginLink.style.display = 'inline';
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem('isLoggedIn');
            alert('You have been logged out.');
            window.location.href = 'index.html'; // Redirect to login page
        });
    }
});
