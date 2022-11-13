function removeExclamationMarks(s) {
    /* Write function RemoveExclamationMarks which 
    removes all exclamation marks from a given string.
    */
    return s.replace(/!/g, '');
}

console.log(removeExclamationMarks('Hello World!')); // Hello World
console.log(removeExclamationMarks('Hello World!!!')); // Hello World