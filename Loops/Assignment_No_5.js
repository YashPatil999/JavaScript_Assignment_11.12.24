// Write a JavaScript program to reverse a number using a while loop.

let number = parseInt(prompt("Enter a number to reverse:"));
let reversed = 0;

while (number !== 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
}

console.log(`The reversed number is: ${reversed}`);
