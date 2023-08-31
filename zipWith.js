function zipWith(fn, a0, a1) {
    /*
    zipWith ( or zip_with ) takes a function and two 
    arrays and zips the arrays together, applying the 
    function to every pair of values.
    The function value is one new array.

    If the arrays are of unequal length, the output will 
    only be as long as the shorter one.

    Values of the longer array are simply not used.

    Inputs should not be modified.
    */
    const minLength = Math.min(a0.length, a1.length)

    // Use the Array.from method to construct a new array.
    return Array.from(
        // Shape of new array
        { length: minLength },
        // Mapping function, we will only use the index (i)
        (_, i) =>
            // Apply the function 'fn' to the elements of a0 and
            // a1 at the current index 'i'.
            fn(a0[i], a1[i]),
    )
}

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]))
// [1,10,100,1000]
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]))
// [4,7,7,4,7,7]
