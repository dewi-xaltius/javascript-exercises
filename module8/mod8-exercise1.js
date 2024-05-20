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

// Exercise 3
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input field and validate button
    let inputField = document.getElementById('inputField');
    let validateButton = document.getElementById('validateButton');

    // Function to validate the form input
    function validateInput() {
        let inputText = inputField.value.trim();

        // Check if the input is empty
        if (inputText === "") {
            // Show an alert if the input is empty
            alert("Input cannot be empty!");
        } else {
            // Show a success message if the input is not empty
            alert("Input is valid!");
        }
    }

    // Add an event listener to the button to call validateInput when clicked
    validateButton.addEventListener('click', validateInput);
});

// Exercise 4: Interactive Table
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input fields, button, and table body
    let inputName = document.getElementById('inputName');
    let inputAge = document.getElementById('inputAge');
    let addButton = document.getElementById('addRowButton');
    let tableBody = document.getElementById('tableBody');

    // Function to add a new row to the table
    function addRow() {
        let name = inputName.value.trim();
        let age = inputAge.value.trim();

        // Check if both inputs are filled
        if (name !== "" && age !== "") {
            // Create a new row and cells
            let newRow = document.createElement('tr');
            let nameCell = document.createElement('td');
            let ageCell = document.createElement('td');

            // Set the cell values
            nameCell.textContent = name;
            ageCell.textContent = age;

            // Append cells to the row
            newRow.appendChild(nameCell);
            newRow.appendChild(ageCell);

            // Append the row to the table body
            tableBody.appendChild(newRow);

            // Clear the input fields
            inputName.value = "";
            inputAge.value = "";
        } else {
            // Show an alert if either input is empty
            alert("Both fields must be filled out!");
        }
    }

    // Add an event listener to the button to call addRow when clicked
    addButton.addEventListener('click', addRow);
});

