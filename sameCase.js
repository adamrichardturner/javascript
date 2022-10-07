function sameCase(a, b){
    /*
    Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0
    */

    // Store our alphabet to test with here
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    // If either of the characters is not in alphabet, return -1
    if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) {
        return -1;
    // If both characters are same case, return 1
    } else if (a.toUpperCase() === a && b.toUpperCase() === b || a.toLowerCase() === a && b.toLowerCase() === b) {
        return 1;
    // If both characters are letters, return 0
    } else if (alpha.includes(a) || alpha.includes(b)) {
        return 0;
    }
}

console.log(sameCase('a', 'g')); // 1
console.log(sameCase('A', 'C')); // 1 
console.log(sameCase('B', 'g')); // 0
console.log(sameCase('0', '?')); // -1