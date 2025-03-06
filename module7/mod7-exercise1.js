// Exercise 1 - Basic Calculator
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

// Exercise 2: Function with default parameters
function greet(name = 'Guest') {
    if (name.trim() === '') {
        name = 'Guest';
    }
    return `Hello, ${name}!`;
}

function displayGreeting() {
    const name = document.getElementById('name').value;
    const greeting = greet(name);
    document.getElementById('result2').innerText = greeting;
}

// Exercise 3: Function Scope
function createCounter() {
    let counter = 0;

    return function incrementCounter() {
        counter++;
        document.getElementById('count').innerText = `Counter: ${counter}`;
    };
}

const incrementCounter = createCounter();
