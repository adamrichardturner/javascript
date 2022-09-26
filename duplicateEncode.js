function duplicateEncode(word) {
    /*
    The goal of this exercise is to convert a string to a new string where each 
    character in the new string is "(" if that character appears only once in the 
    original string, or ")" if that character appears more than once in the original string. 
    
    Ignore capitalization when determining if a character is a duplicate.

    Examples
    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 
    Notes
    Assertion messages may be unclear about what they display in some languages. 
    If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
    */
    
    // Store in str our final string representation
    let str = '';
    // Store in counts an object of char + quantity pairs
    const counts = {};
    // Store in chars the chars of word all in lowercase as an array
    const chars = word.split('').map(e => e.toLowerCase());
    // For each char in chars...
    for(const char of chars) {
        // If they key/value pair exists, increment by 1
        if(counts[char]) {
            counts[char] += 1;
        } else {
            // Else add the key value pair with 1 as the value
            counts[char] = 1;
        }
    }
    // For each char in chars...
    for(const char in chars) {
        // If the count of chars is above 1...
        if (counts[chars[char]] > 1) {
            // Add ')' to str
            str += ')';
        } else {
            // Else add '(' to str
            str += '(';
        }
    }
    return str;
}

console.log(duplicateEncode('din')); // (((
console.log(duplicateEncode('recede')); // ()()()
console.log(duplicateEncode('Success')) // )())())
console.log(duplicateEncode('(( @')); // ))((
console.log(duplicateEncode('Supralapsarian')) // )()))()))))()(