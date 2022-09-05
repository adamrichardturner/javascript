function isPrime(num) {
    /*
    Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

    Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

    Requirements
    You can assume you will be given an integer input.
    You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
    NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
    Example
    is_prime(1) false
    is_prime(2) true
    is_prime(-1) false
    */

    // Anything less than 2 is not a Prime Number.
    if (num <= 1) {
        return false;
    } else {
        // Store in factors our factors of num.
        const factors = [];
        // It's enough to loop up to sqrt(num) to get the factors
        // of a given number...
        for (let i = 0; i <= Math.sqrt(num); i++) {
            if (factors.length >= 2) {
                // If factors are greater than or equal to 2, return false.
                return false;
            } else {
                if (num % i == 0) {
                    // If num is divisible by i without remainder, it is a factor.
                    factors.push(i);
                }
            }
        }
        // If prime, factors should contain the element 1 only
        // Anything else is not Prime.
        return factors.length == 1 ? true : false;
    }
}

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(-1)); // false
console.log(isPrime(73)); // true
console.log(isPrime(75)); // false