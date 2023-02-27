function getCount(str) {
    /*
    Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

    The input string will only consist of lower case letters and/or spaces.
    */

    // Store our vowels here
    const vowels = 'aeiou';
    // Split str into an array, filter out all chars that are not in vowels
    // Return the length of this filtered array
    return str.split('').filter(e => vowels.includes(e.toLowerCase())).length;
}

console.log(getCount("abracadabra")); // 5