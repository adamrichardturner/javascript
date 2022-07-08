function powersOfTwo(n) {
    /*
    Complete the function that takes a non-negative integer n as 
    input, and returns a list of all the powers of 2 with the exponent 
    ranging from 0 to n ( inclusive ).

    Examples
    n = 0  ==> [1]        # [2^0]
    n = 1  ==> [1, 2]     # [2^0, 2^1]
    n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
    */

    // Return an array iterating over all nums upto n - map each value 
    // as a power of 2.
    return [...Array(n+1).keys()].map(i => 2 ** i);
}

console.log(powersOfTwo(2)) // [ 1, 2, 4 ]