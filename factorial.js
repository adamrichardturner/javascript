function factorial(n) {
    /*
    Factorial function
    */
    if (n < 0) return
    if (n === 0 || n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5)); // 120 s