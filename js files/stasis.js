// Dynamic content loading for Stasis Page
document.addEventListener('DOMContentLoaded', () => {
    const dynamicContentContainer = document.getElementById('dynamicContent');

    // Simulate fetching dynamic content from a server
    setTimeout(() => {
        const dynamicContent = document.createElement('p');
        dynamicContent.textContent = 'Dynamic content for Stasis Page';
        dynamicContentContainer.appendChild(dynamicContent);
    }, 2000); // Delay for demonstration purposes (2 seconds)
});

// Example of event listener for Stasis Page
document.getElementById('stasisButton').addEventListener('click', () => {
    // Example action when button is clicked
    alert('Button clicked on Stasis Page!');
});
