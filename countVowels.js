const countVowels = string => {
    // Store in vowels our vowels to test
    const vowels = 'aeiouAEIOU'
    // Store our count of vowels here to return
    let count = 0
    // Iterate over string and if char is in vowels, increment count by 1
    for(let i = 0; i < string.length; i++) {
        if(vowels.indexOf(string[i]) !== -1) {
            count++
        }
    }
    return count
}

console.log(countVowels('aeiou')) // 5
console.log(countVowels('AEIOU')) // 5
console.log(countVowels('The quick brown fox jumps over the lazy dog')) // 11