document.addEventListener('DOMContentLoaded', () => {
    // Authentication Check
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        alert('You must be logged in to upload a property. Redirecting to login page...');
        window.location.href = 'index.html'; // Redirect to login page
        return; // Stop further script execution for this page
    }

    const propertyUploadForm = document.getElementById('propertyUploadForm');

    if (propertyUploadForm) {
        propertyUploadForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission for now

            // Basic validation (HTML 'required' already handles most)
            const title = document.getElementById('title').value;
            if (!title.trim()) {
                alert('Please enter a title for the property.');
                return;
            }

            // Collect form data
            const formData = new FormData(this);
            
            // Log FormData entries to console (for demonstration)
            console.log('Property Upload Form Data:');
            for (let [key, value] of formData.entries()) {
                if (value instanceof File) {
                    console.log(`${key}: ${value.name} (type: ${value.type}, size: ${value.size} bytes)`);
                } else {
                    console.log(`${key}: ${value}`);
                }
            }

            // Placeholder for actual backend submission
            alert('Property data captured! (See console for details). In a real application, this would now be sent to the server.');

            // Optionally, reset the form after "submission"
            // this.reset(); 
        });
    }
});
