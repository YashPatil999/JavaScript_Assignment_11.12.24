// Write a JavaScript program to find the factorial of a number entered by the user using a while loop.

let number = parseInt(prompt("Enter a number to find its factorial:"));

if (number < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else {
    let factorial = 1;
    let i = number;

    while (i > 0) { 
        factorial *= i; 
        i--; 
    }

    console.log(`The factorial of ${number} is: ${factorial}`);
}
