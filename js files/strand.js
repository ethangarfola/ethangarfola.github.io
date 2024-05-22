// Dynamic content loading for Strand Page
document.addEventListener('DOMContentLoaded', () => {
    const dynamicContentContainer = document.getElementById('dynamicContent');

    // Simulate fetching dynamic content from a server
    setTimeout(() => {
        const dynamicContent = document.createElement('p');
        dynamicContent.textContent = 'Dynamic content for Strand Page';
        dynamicContentContainer.appendChild(dynamicContent);
    }, 2000); // Delay for demonstration purposes (2 seconds)
});

// Example of event listener for Strand Page
document.getElementById('strandButton').addEventListener('click', () => {
    // Example action when button is clicked
    alert('Button clicked on Strand Page!');
});
