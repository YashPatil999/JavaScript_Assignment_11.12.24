// Write a JavaScript program to check whether a given string is a palindrome using if-else statements.

let str = prompt("Enter a string:");

let reversedStr = str.split('').reverse().join('');

if (str === reversedStr) {
    console.log(`${str} is a palindrome.`);
} else {
    console.log(`${str} is not a palindrome.`);
}
