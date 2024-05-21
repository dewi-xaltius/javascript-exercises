// Get elements from the DOM
const choices = document.querySelectorAll('.choice'); // Buttons for user choices
const computerHand = document.getElementById('computer-hand'); // Display for computer's choice
const winsSpan = document.getElementById('wins'); // Display for wins
const lossesSpan = document.getElementById('losses'); // Display for losses
const drawsSpan = document.getElementById('draws'); // Display for draws
const rulesBtn = document.getElementById('rules-btn'); // Button to show rules
const rulesPopup = document.getElementById('rules-popup'); // Rules pop-up container
const closePopup = document.getElementById('close-popup'); // Close button for rules pop-up

let wins = 0;
let losses = 0;
let draws = 0;

// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ['✊', '✋', '✌']; // Array of possible choices
    const randomIndex = Math.floor(Math.random() * choices.length); // Random index
    return choices[randomIndex]; // Return random choice
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw'; // It's a draw if choices are the same
    } else if (
        (userChoice === '✊' && computerChoice === '✌') ||
        (userChoice === '✋' && computerChoice === '✊') ||
        (userChoice === '✌' && computerChoice === '✋')
    ) {
        return 'win'; // User wins if their choice beats the computer's choice
    } else {
        return 'lose'; // User loses otherwise
    }
}

// Function to update the score
function updateScore(result) {
    if (result === 'win') {
        wins++; // Increment wins
        winsSpan.textContent = wins; // Update wins display
    } else if (result === 'lose') {
        losses++; // Increment losses
        lossesSpan.textContent = losses; // Update losses display
    } else {
        draws++; // Increment draws
        drawsSpan.textContent = draws; // Update draws display
    }
}

// Function to reset computer's choice to question mark
function resetComputerChoice() {
    setTimeout(() => {
        computerHand.textContent = '❓'; // Reset computer's choice
    }, 1000); // 1-second delay
}

// Event listener for user choices
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.textContent; // Get user's choice
        const computerChoice = getComputerChoice(); // Get computer's choice
        computerHand.textContent = computerChoice; // Display computer's choice
        const result = determineWinner(userChoice, computerChoice); // Determine the result
        updateScore(result); // Update the score based on the result
        resetComputerChoice(); // Reset computer's choice after a delay
    });
});

// Event listener to show rules popup
rulesBtn.addEventListener('click', () => {
    rulesPopup.style.display = 'flex'; // Show the rules pop-up
});

// Event listener to close rules popup
closePopup.addEventListener('click', () => {
    rulesPopup.style.display = 'none'; // Hide the rules pop-up
});

// Close popup if user clicks outside the popup content
window.addEventListener('click', (event) => {
    if (event.target === rulesPopup) {
        rulesPopup.style.display = 'none'; // Hide the rules pop-up
    }
});
