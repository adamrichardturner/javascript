function reverseWords(str) {
    /*
    Complete the solution so that it reverses all of the words within the string passed in.
    */
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("yoda doesn't speak like this"));
// this like speak doesn't yoda