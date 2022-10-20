function isPalindrome(x) {
    // Write a function that checks if a given string (case insensitive) is a palindrome.
    return x.split('').map(e => e.toLowerCase()).join('') === x.split('').map(e => e.toLowerCase()).reverse().join('');
}

console.log(isPalindrome('Abba')); // true
console.log(isPalindrome('boB')); // true
console.log(isPalindrome('hello')); // false