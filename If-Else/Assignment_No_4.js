// Write a JavaScript program to check whether a number entered by the user is positive, negative, or zero using if-else. 

let number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log(`${number} is a positive number.`);
} else if (number < 0) {
    console.log(`${number} is a negative number.`);
} else {
    console.log("The number is zero.");
}
