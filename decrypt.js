function decrypt(encryption) {
    /*
    You'll be given a string of random characters (numbers, letters, and symbols). 
    To decode this string into the key we're searching for:

    (1) count the number occurences of each ascii lowercase letter, and

    (2) return an ordered string, 26 places long, corresponding to the number of occurences for each corresponding letter in the alphabet.

    For example:

    '$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
    ^    ^   ^  ^  ^         ^^^  ^                   ^
    [4]  [3] [2][3][1]        abc  f                   z
    
    'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
    ^  ^   ^   ^                    ^ ^ ^                    ^
    [1][3] [3] [3]                   a c e                    z
    Remember, the string returned should always be 26 characters long, and only count lowercase letters.

    Note: You can assume that each lowercase letter will appears a maximum of 9 times in the input string.
    */
    // Store in alpha an array representation of the alphabet
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // Store in counts our frequency of each alphabetical char in encryption
    const counts = {};
    // Loop through encryption and add each char and its frequency as key value pairs to counts
    encryption.split('').forEach(x => counts[x] = (counts[x] || 0) + 1);
    // Return string representation of alpha iterated...
    // If the element is in counts, return the value (frequency) or 0
    return alpha.map(e => e in counts ? counts[e] : 0).join('');
}

console.log(decrypt('$aaaa#bbb*cc^fff!z')); // 43200300000000000000000001
console.log(decrypt('z$aaa#ccc%eee1234567890')); // 30303000000000000000000001