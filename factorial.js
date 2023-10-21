function factorial(n) {
    /*
    Factorial function
    */
    if (n < 0) return; // Factorial for negative numbers doesn't exist
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
