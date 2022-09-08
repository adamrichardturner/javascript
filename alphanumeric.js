function alphanumeric(string) {
    /*
    In this example you have to validate if a user input string is alphanumeric. 
    The given string is not nil/null/NULL/None, so you don't have to check that.

    The string has the following conditions to be alphanumeric:

    At least one character ("" is not valid)
    Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
    No whitespaces / underscore
    */
    if (string.length > 0) {
        if (string.match(/^[a-z0-9]+$/gi) !== null) {
            return true;
        } 
    }
    return false;
}

console.log(alphanumeric("Mazinkaiser")); // true
console.log(alphanumeric("hello world_")); // false
console.log(alphanumeric("PassW0rd")); // true
console.log(alphanumeric("     ")); // false