document.addEventListener('DOMContentLoaded', () => {
    const searchFilterForm = document.getElementById('searchFilterForm');
    const searchResultsContainer = document.querySelector('.search-results'); // To interact with results area

    if (searchFilterForm) {
        searchFilterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            const formData = new FormData(this);
            const filters = {};
            const amenities = [];

            console.log('Search Filters Applied:');
            for (let [key, value] of formData.entries()) {
                if (key === 'amenities') { // Handle multiple checkboxes for amenities
                    amenities.push(value);
                } else if (value.trim() !== '') { // Only include non-empty filter values
                    filters[key] = value.trim();
                }
            }
            if (amenities.length > 0) {
                filters['amenities'] = amenities;
            }
            
            console.log(filters);

            // Simulate search action
            if (searchResultsContainer) {
                const resultsInfo = searchResultsContainer.querySelector('h3');
                if (resultsInfo) {
                    resultsInfo.textContent = 'Searching based on your filters... (Results would appear here)';
                }
                // Clear out old placeholder/static results (optional)
                const existingCards = searchResultsContainer.querySelectorAll('.property-listing-card');
                existingCards.forEach(card => card.style.display = 'none'); // Hide them
            }

            alert('Search filters captured! (See console for details). In a real application, these filters would be sent to a server to fetch results.');
        });
    }
});
