function sumArray(array) {
    /*
    Sum all the numbers of a given array ( cq. list ), except the highest and 
    the lowest element ( by value, not by index! ).

    The highest or lowest element respectively is a single element at each edge, 
    even if there are more than one with the same value.

    Mind the input validation.

    Example
    { 6, 2, 1, 8, 10 } => 16
    { 1, 1, 11, 2, 3 } => 6
    */

    // Input validation...
    if (array === null || array === undefined || !array) {
        return 0;
    } else {
        // Store in a and b the min and max index value of the first min and max elements found
        const a = array.indexOf(Math.min.apply(Math, array));
        const b = array.indexOf(Math.max.apply(Math, array));
        // Store in sum our final sum total
        let sum = 0;
        // For each element in array, if the index is a or b, return null, else add the element
        // to sum
        array.forEach((e, i) => i === a || i === b ? null : sum += e);
        return sum;
    }
}

console.log(sumArray([ 6, 2, 1, 8, 10 ])); // 16
console.log(sumArray(null)); // 0