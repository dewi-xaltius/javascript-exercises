// Exercise 1: Basic Arithmetic Operations
console.log("Exercise 1")
// Declare two variables to store numbers
let num1 = 10;
let num2 = 5;

// Compute and print basic arithmetic operations
console.log("Sum:", num1 + num2); // 15
console.log("Difference:", num1 - num2); // 5
console.log("Product:", num1 * num2); // 50
console.log("Quotient:", num1 / num2); // 2

// Compute and print the remainder (modulus)
console.log("Remainder:", num1 % num2); // 0

// Declare variables for length and width, calculate and print the area
let length = 7;
let width = 3;
let area = length * width;
console.log("Area of the rectangle:", area); // 21

// Exercise 2: Comparison Operators
// Declare two variables and compare them using ==, ===, !=, and !==
console.log("Exercise 2");
let a = 5;
let b = "5";
console.log(a == b);  // true
console.log(a === b); // false
console.log(a != b);  // false
console.log(a !== b); // true

// Declare two additional variables with different numeric values and compare them
let num3 = 10;
let num4 = 20;
console.log(num3 < num4);  // true
console.log(num3 > num4);  // false
console.log(num3 <= num4); // true
console.log(num3 >= num4); // false



// Check if the passwords match
let password = "mypassword123";
let confirmPassword = "mypassword123";
if (password === confirmPassword) {
  console.log("Passwords match.");
} else {
  console.log("Passwords do not match.");
}
