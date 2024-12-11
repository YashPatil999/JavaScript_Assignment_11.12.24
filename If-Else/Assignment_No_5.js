// Write a JavaScript program to find the grade of a student based on marks entered by the user. Use the following conditions: Marks > 90: Grade A Marks > 75: Grade B Marks > 50: Grade C Marks <= 50: Grade D

let number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log(`${number} is a positive number.`);
} else if (number < 0) {
    console.log(`${number} is a negative number.`);
} else {
    console.log("The number is zero.");
}
