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

// Exercise 3: Array Manipulation
console.log("Exercise 3")
// Declare an array of numbers representing different expenses. Modify the array and print it.
let expenses = [200, 150, 300, 50, 100];
expenses.push(250); // Add new expense
expenses.shift(); // Remove the first expense
expenses.sort((a, b) => a - b); // Sort the array in ascending order
console.log("Modified expenses:", expenses); // [50, 100, 150, 250, 300]

// Calculate the total expenses by summing all elements in the array and print the total.
let totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);
console.log("Total expenses:", totalExpenses); // 850

// Find the highest and lowest expenses in the array and print them.
let highestExpense = Math.max(...expenses);
let lowestExpense = Math.min(...expenses);
console.log("Highest expense:", highestExpense); // 300
console.log("Lowest expense:", lowestExpense); // 50

// Filter out expenses that are above a certain threshold (e.g., 100) and print the filtered array.
let threshold = 100;
let filteredExpenses = expenses.filter(expense => expense > threshold);
console.log("Filtered expenses:", filteredExpenses); // [150, 250, 300]

// Exercise 4: Dynamic Computation
console.log("Exercise 4");
// Create an array of objects representing products and calculate the total price of all products
let products = [
    {name: "Shirt", price: 20},
    {name: "Pants", price: 40},
    {name: "Shoes", price: 60}
];
  
let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total Price:", totalPrice); // 120
  
// Add a new product to the array and print the updated list of products
let newProduct = {name: "Hat", price: 25};
products.push(newProduct);
console.log("Updated products:", products);
// [{name: "Shirt", price: 20}, {name: "Pants", price: 40}, {name: "Shoes", price: 60}, 
// {name: "Hat", price: 25}]
  
// Remove a product by its name and print the updated list of products
let productNameToRemove = "Pants";
products = products.filter(product => product.name !== productNameToRemove);
console.log("Products after removal:", products);
// [{name: "Shirt", price: 20}, {name: "Shoes", price: 60}, {name: "Hat", price: 25}]
  
// Calculate the average price of the products and print it
let averagePrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
console.log("Average Price:", averagePrice); // 35
  
  
  
