function getCount(str) {
    /*
    Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

    The input string will only consist of lower case letters and/or spaces.
    */

    // Store our vowels here
    const vowels = 'aeiou';
    // Store our count of vowels here
    let count = 0;
    // For each char in str
    for(let i in str) {
        // If that char is in vowels
        if(vowels.includes(str[i])) {
            // Increment count
            count++;
        }
    }
    return count;
}

console.log(getCount('abracadabra')); // 5