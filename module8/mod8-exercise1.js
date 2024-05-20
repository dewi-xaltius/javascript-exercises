// Exercise 1: Show/hide an element
document.addEventListener('DOMContentLoaded', function() {
    function toggleParagraphVisibility() {
        var paragraph = document.getElementById('paragraph');
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';
        } else {
            paragraph.style.display = 'none';
        }
    }

    var toggleIcon = document.getElementById('toggleParagraph');
    toggleIcon.addEventListener('click', toggleParagraphVisibility);
});

// Exercise 2
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input field, button, grocery list, and empty message
    let inputField = document.getElementById('groceryItem');
    let addButton = document.getElementById('addItemButton');
    let groceryList = document.getElementById('groceryList');
    let emptyMessage = document.getElementById('emptyMessage');

    // Function to add a new item to the grocery list
    function addItem() {
        let itemText = inputField.value.trim();

        if (itemText !== "") {
            let listItem = document.createElement('li');
            listItem.textContent = itemText;
            groceryList.appendChild(listItem);
            inputField.value = "";
            checkEmptyMessage();
        }
    }

    // Function to check if the grocery list is empty and show/hide the empty message
    function checkEmptyMessage() {
        if (groceryList.children.length === 0) {
            emptyMessage.style.display = 'block';
        } else {
            emptyMessage.style.display = 'none';
        }
    }

    // Add an event listener to the button to call addItem when clicked
    addButton.addEventListener('click', addItem);

    // Initialize by checking the empty message on page load
    checkEmptyMessage();
});
