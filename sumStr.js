function sumStr(a,b) {
    /*
    Create a function that takes 2 integers in form of a string as an input, 
    and outputs the sum (also as a string):

    Example: (Input1, Input2 -->Output)

    "4",  "5" --> "9"
    "34", "5" --> "39"
    "", "" --> "0"
    "2", "" --> "2"
    "-5", "3" --> "-2"
    Notes:

    If either input is an empty string, consider it as zero.

    Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
    */

    // If a and b are empty, return '0'
    if(a === '' && b === '') {
        return '0';
    // Else if a is empty, return just 'b'
    } else if (a === '') {
        return b;
    // Else if b is empty, return just 'a'
    } else if (b === '') {
        return a;
    // Else return the sum of a & b as a string
    } else {
        return String(parseInt(a) + parseInt(b));
    }
}

console.log(sumStr('4', '5')); // '9'
console.log(sumStr('', '8')); // '8'