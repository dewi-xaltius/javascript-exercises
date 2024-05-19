// Module 4 - Learning Exercise 4.1

// Exercise 1 - Declare three variables: one to store your name, 
// one to store your age, and one to store whether you are a student.
console.log("Exercise 1")
let studentName = "John Doe";
let age = 11;
let isStudent = true;

console.log("Student Name: ", studentName);
console.log("Student Age: ", age);
console.log("Is this student enrolled: ", isStudent);

// Exercise 2 - Create two variables to store numbers and 
// then create a third variable that stores the sum of 
// the first two variables. Print the result to the console.
console.log("Exercise 2")
let num1 = 5;
let num2 = 10;
let result = num1 + num2;
console.log("The result is: ", result);

// Exercise 3 - Declare two string variables and concatenate 
// them into a third variable. Print the concatenated string 
// to the console. 
console.log("Exercise 3")
let firstName = "Jane";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Exercise 4 - Declare a variable with a number as a string. 
// Convert the string to a number and add it to another number 
// variable. Print the result to the console.
console.log("Exercise 4");
let strNumber = "42";
let number = 8;
let sum = Number(strNumber) + number;
console.log(sum);

// Exercise 5 - Declare variables for a person's name, age, and 
// occupation. Use template literals to create a sentence that 
// includes these variables. Print the sentence to the console.
console.log("Exercise 5");
let employeeName = "Alice";
let employeeAge = 38;
let occupation = "engineer";
let sentence = `${employeeName} is a ${employeeAge} years old ${occupation}`;
console.log(sentence);

// Exercise 6 - Declare an array with five numbers. Add a new 
// number to the end of the array, remove the first number, and 
// print the modified array to the console.
console.log("Exercise 6");
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.shift();
console.log(numbers);

// Exercise 7 - Create an object to store information about a book 
// (title, author, and year published). Add a new property for the 
// genre. Print the entire object to the console.
console.log("Exercise 7");
let book = {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1940
};
book.genre = "Dystopian";
console.log(book);