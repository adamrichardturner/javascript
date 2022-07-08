function grow(x) {
    /*
    Given a non-empty array of integers, return the result of multiplying 
    the values together in order. 
    
    Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
    */
   return x.reduce((a, b) => a * b)
}

console.log(grow([1, 2, 3, 4]));