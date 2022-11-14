function between(a, b) {
    /*
    Complete the function that takes two integers (a, b, where a < b) and 
    return an array of all integers between the input parameters, including them.

    For example:

    a = 1
    b = 4
    --> [1, 2, 3, 4]
    */
    return Array.from({ length: (b - a) / 1 + 1}, (_, i) => a + (i * 1));
}

console.log(between(1, 4)); // [ 1, 2, 3, 4 ]