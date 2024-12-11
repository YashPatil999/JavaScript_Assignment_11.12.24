// Write a JavaScript program that takes a grade (A, B, C, D, F) as input and prints a description using a switch statement: A: Excellent B: Good C: Average D: Poor F: Fail

let grade = prompt("Enter the grade (A, B, C, D, F):").toUpperCase();

switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    case 'D':
        console.log("Poor");
        break;
    case 'F':
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade entered. Please enter A, B, C, D, or F.");
}
