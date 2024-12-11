// Write a JavaScript program to perform basic arithmetic operations (addition, subtraction, multiplication, division) based on the user's choice using a switch statement.

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /):");

switch (operation) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case '/':
        if (num2 !== 0) {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;
    default:
        console.log("Invalid operation. Please enter +, -, *, or /.");
}
