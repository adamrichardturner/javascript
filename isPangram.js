function isPangram(string) {
    /*
    A pangram is a sentence that contains every single letter of the 
    alphabet at least once. For example, the sentence "The quick brown 
    fox jumps over the lazy dog" is a pangram, because it uses the letters 
    A-Z at least once (case is irrelevant).

    Given a string, detect whether or not it is a pangram. Return True if 
    it is, False if not. Ignore numbers and punctuation.
    */
   const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
   let alphaCount = [];
    string.toLowerCase().split('').forEach(i => {
        if(alpha.includes(i)) {
            alphaCount.push(i);
        }
    })
   return [...new Set(alphaCount)].length === 26 ? true : false;
}
console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'))