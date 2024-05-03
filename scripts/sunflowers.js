// Array containing at least 7 CSS color values
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "cyan"];

// Create an unordered list element and store it in a variable
const unorderedList = document.createElement("ul");

// Loop through the colors array to create list items
colors.forEach(color => {
    // Create a new list item element
    const listItem = document.createElement("li");
    
    // Set the innerText property of the list item to be the color string
    listItem.innerText = color;
    
    // Set the color CSS property of the list item
    listItem.style.color = color;
    
    // Add the list item to the end of the unordered list
    unorderedList.appendChild(listItem);
});

// Add the whole unordered list to the end of the body of the webpage
document.body.appendChild(unorderedList);
