// Write a JavaScript program to check whether a year is a leap year or not using if-else.

let year = parseInt(prompt("Enter a year to check if it's a leap year:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
