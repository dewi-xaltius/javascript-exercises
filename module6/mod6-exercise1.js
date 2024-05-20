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

// Exercise 4: switch Statement
console.log("Exercise 4")
const num1 = 5;
const num2 = 3;
const operator = '+'; // User's input for operator

switch (operator) {
  case '+':
    console.log(num1 + num2);
    break;
  case '-':
    console.log(num1 - num2);
    break;
  case '*':
    console.log(num1 * num2);
    break;
  case '/':
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid operator");
}

// Exercise 5: for Loop
console.log("Exercise 5");
let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum); // 2550

// Exercise 6: while loop
console.log("Exercise 6: while loop")
let countdown = 10; // Starting number for the countdown

while (countdown >= 0) {
  if (countdown === 0) {
    console.log("Time's up!");
  } else {
    console.log(countdown);
  }
  countdown--;
}

// Exercise 6 :do while loop
console.log("do while loop")
countdown = 10;

do {
  if (countdown === 0) {
    console.log("Time's up!");
  } else {
    console.log(countdown);
  }
  countdown--;
} while (countdown >= 0);
