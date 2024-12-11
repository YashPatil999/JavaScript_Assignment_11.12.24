// Write a JavaScript program to print the Fibonacci series up to a certain number entered by the user using a for loop.

let limit = parseInt(prompt("Enter a number to generate the Fibonacci series up to:"));
let a = 0, b = 1;

console.log("Fibonacci series:");
console.log(a);
if (limit > 0) console.log(b);

for (let i = 2; a + b <= limit; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}
