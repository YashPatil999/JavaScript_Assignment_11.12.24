// Write a JavaScript program to find the largest of three numbers entered by the user using if-else statements.

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is the largest number.`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is the largest number.`);
} else {
    console.log(`${num3} is the largest number.`);
}
