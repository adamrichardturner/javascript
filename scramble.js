function scramble(str1, str2) {
    /*
    Complete the function scramble(str1, str2) that returns true if a portion 
    of str1 characters can be rearranged to match str2, otherwise returns false.

    Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.

    Examples
    scramble('rkqodlw', 'world') ==> True
    scramble('cedewaraaossoqqyt', 'codewars') ==> True
    scramble('katas', 'steak') ==> False
    */

    // Store in count an object containing chars that match in both str1 & str2
    const count = {};
    // Total is our test against whether str1 can be re-arranged to match str2
    let total = 0;
    // For each element in str1...
    str1.split('').forEach(e => {
        // If str2 includes that element...
        if(str2.includes(e)) {
            // Assign it as a key : value pair, with number of occurences of
            // that element as the value
            count[e] = (count[e] || 0) + 1;
        }
    });
    // For each element in str2...
    for(let i in str2) {
        // If the element in str2 is in count and quantity is not 0...
        if(str2[i] in count && count[str2[i]] !== 0) {
            // Increment total, decrement the quantity in count for that element
            total++;
            count[str2[i]] -= 1;
        }
    }
    // Test total, if a match, it should match length of str2
    return total === str2.length;
}

console.log(scramble('rkqodlw', 'world')); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true
console.log(scramble('katas', 'steak')); // false 
console.log(scramble('scriptjavx', 'javascript')); // false