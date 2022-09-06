function factorial(n) {
    /*
    Factorial function
    */
    let nums = [];
    for(let i = n; i > 0; i--) {
        nums.push(i);
    }
    return n > 1 ? nums.reduce((a, b) => a * b) : 1;
}

console.log(factorial(5)); // 120