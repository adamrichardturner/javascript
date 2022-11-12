function high(x) {
    /*
    Given a string of words, you need to find the highest scoring word.

    Each letter of a word scores points according to its position 
    in the alphabet: a = 1, b = 2, c = 3 etc.

    You need to return the highest scoring word as a string.

    If two words score the same, return the word that appears 
    earliest in the original string.

    All letters will be lowercase and all inputs will be valid.
    */

    // Store in alpha our alphabet as an array
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // Store in scores an object which represents each letters value
    const scores = {};
    // For each letter in alpha, add its place value as key value pairs
    // to scores...
    alpha.forEach((e, i) => {
        scores[e] = i + 1; 
    });
    // Store in totals nested arrays representing the word and it's score
    const totals = [];
    // For each word, add to totals the word paired with 0 in nested arrays
    x.split(' ').forEach(e => totals.push([e, 0]));
    // For each word in totals...
    totals.forEach(e => {
        // Keep our count of letter scores here in each word
        let count = 0;
        // Loop through eahc letter and using the scores object, add it's 
        // value to count
        e[0].split('').forEach(e => count += scores[e]);
        // Assign the final word value to the 2nd element in the totals nested
        // arrays
        e[1] = count;
    });
    // Sort the totals based on the word value from lowest to highest...
    totals.sort((a, b) => {
        if(a[1] < b[1]) {
            return -1;
        }
        if(a[1] > b[1]) {
            return 1;
        }
        return 0;
    });
    // Return the last element's word in the totals array if it isn't the same as the second to last, otherwise return
    // second to last, as that is the word with the same score that appeared earlier in x
    return totals[totals.length-1][1] === totals[totals.length-2][1] ? totals[totals.length-2][0] : totals[totals.length-1][0];
}

console.log(high('man i need a taxi up to ubud')); // taxi