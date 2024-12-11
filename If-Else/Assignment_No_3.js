// Write a JavaScript program to check whether a character entered by the user is a vowel or a consonant using if-else.

let char = prompt("Enter a character:").toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(`${char} is a vowel.`);
} else if (char >= 'a' && char <= 'z') {
    console.log(`${char} is a consonant.`);
} else {
    console.log("Please enter a valid alphabetic character.");
}
