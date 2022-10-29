function minMax(arr) {
    /*
    Write a function that returns both the minimum and maximum number of the given list/array.

    Examples (Input --> Output)
    [1,2,3,4,5] --> [1,5]
    [2334454,5] --> [5,2334454]
    [1]         --> [1,1]
    */
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}

console.log(minMax([1,2,3,4,5])); // [ 1, 5 ]