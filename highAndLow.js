function highAndLow(numbers) {
    /*
    In this little assignment you are given a string of space 
    separated numbers, and have to return the highest and lowest number.

    Examples
    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
    Notes
    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
    */
    
    // Store our min and max values by finding them after splitting, and mapping elements to 
    // number form in an array...
    const min = Math.min.apply(0, numbers.split(' ').map(e => Number(e)));
    const max = Math.max.apply(0, numbers.split(' ').map(e => Number(e)));
    // Return max and min as a string with a space between
    return String(max) + ' ' + String(min);
}

console.log(highAndLow("1 2 3 4 5")); // '5 1'