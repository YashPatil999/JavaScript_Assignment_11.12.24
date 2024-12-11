// Write a JavaScript program to check if a number entered by the user is divisible by both 3 and 7 using if-else.

let number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0 && number % 7 === 0) {
    console.log(`${number} is divisible by both 3 and 7.`);
} else {
    console.log(`${number} is not divisible by both 3 and 7.`);
}
