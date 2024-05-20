// Exercise 1: Check for minimum age requirements
// Check if the user meets the age requirement to register on the website
console.log("Exercise 1")
let userAge = 17;
let minAge = 18;
if (userAge >= minAge) {
  console.log("User is old enough to register.");
} else {
  console.log("User is too young to register.");
}

// Exercise 2: Check user login
console.log("Exercise 2")
const correctPassword = "javascript123";
const userInput = "javascript123"; 

if (userInput === correctPassword) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Exercise 3: else if Statement
console.log("Exercise 3")
const score = 85; // Student's score

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

  