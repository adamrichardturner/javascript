function reverse(str) {
    /*
    Reverse every other word in a given string, then return the string. 
    Throw away any leading or trailing whitespace, while ensuring there 
    is exactly one space between each word. Punctuation marks should be 
    treated as if they are a part of the word in this kata.
    */

    // Trim string for whitespace, split and map - on each index which is not even
    // split, reverse and join the word, otherwise just return the word. Then join the array 
    // as a string and return it...
    return str.trim().split(' ').map((e, i) => i % 2 != 0 ? e.split('').reverse().join('') : e).join(' ');
}

console.log(reverse("Reverse this string, please!")); // Reverse siht string, !esaelp
console.log(reverse("I really don't like reversing strings!")); // I yllaer don't ekil reversing !sgnirts