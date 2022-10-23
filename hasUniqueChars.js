function hasUniqueChars(str) {
    /*
    Write a program to determine if a string contains only unique characters. 
    
    Return true if it does and false otherwise.

    The string may contain any of the 128 ASCII characters. 

    Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
    */

    // Store in seen our unique values
    let seen = '';
    // For each char in str...
    for(let i = 0; i <= str.length - 1; i++) {
        // Concatenate the char to seen
        seen += str[i];
        // If the next char is already in seen...
        if(seen.includes(str[i+1])) {
            // It's not unique, return false
            return false;
        }
    }
    // Otherwise, if the loop runs through without returning false, all chars are unique
    return true;
}

console.log(hasUniqueChars('  nAa')); // false
console.log(hasUniqueChars('abcdef')); // true
console.log(hasUniqueChars('aA')); // true
console.log(hasUniqueChars('++-')); // false