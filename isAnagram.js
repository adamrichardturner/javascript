var isAnagram = function(test, original) {
    /*
    An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

    Note: anagrams are case insensitive

    Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

    Examples
    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"
    */
    
    // Change each char in both test and original to lowercase after converting to array
    // Sort each char in both test and original
    // Join as string after sort, compare the strings - anagrams are the same.
    return test.split('').map(e => e.toLowerCase()).sort().join('') === original.split('').map(e => e.toLowerCase()).sort().join('');
};

console.log(isAnagram('foefet', 'toffee')); // true
console.log(isAnagram('Buckethead', 'toffee')); // false