/*
Write a function subLength() that takes 2 parameters, a string and a single character. 
The function should search the string for the two occurrences of the character and return 
the length between them including the 2 characters. If there are less than 2 or more than 
2 occurrences of the character the function should return 0.
*/

const subLength = (str, char) => {
    // First we test if the string contains more than or less than 2 occurances of the char.
    let count = 0;
    // Split the str and loop through each char, if the character is equal to param char, 
    // we increment count.
    str.split('').forEach(c => {
        if(c === char) {
            count++;
        }
    });
    // If count greater or less than 2, return 0... 
    if(count > 2 || count < 2) {
        return 0;
    // Else, new count variable - loop through the chars between a and b inclusive....
    } else {
        let count = 0;
        let a = str.indexOf(char);
        let b = str.indexOf(char, a + 1);
        for(let i = a; i <= b; i++) {
            count++;
        }
        // Return count
        return count;
    }
}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')) // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0