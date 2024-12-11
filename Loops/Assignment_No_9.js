// Write a JavaScript program to calculate the power of a number using a for loop.

let base = parseFloat(prompt("Enter the base number:"));
let exponent = parseInt(prompt("Enter the exponent:"));
let result = 1;

for (let i = 1; i <= Math.abs(exponent); i++) {
    result *= base;
}

if (exponent < 0) {
    result = 1 / result;
}

console.log(`${base} raised to the power of ${exponent} is: ${result}`);
