// Write a JavaScript program that prints all prime numbers between 1 and 100 using nested for loops.

for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
