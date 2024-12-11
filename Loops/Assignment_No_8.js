// Write a JavaScript program to count the number of digits in a given number using a while loop.

let number = Math.abs(parseInt(prompt("Enter a number to count its digits:")));
let count = 0;

if (number === 0) {
    count = 1;
} else {
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
}

console.log(`The number of digits is: ${count}`);
