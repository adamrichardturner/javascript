function anagrams(word, words) {
    /*
    What is an anagram? Well, two words are anagrams of each other if they 
    both contain the same letters. For example:
    
    'abba' & 'baab' == true
    'abba' & 'bbaa' == true
    'abba' & 'abbba' == false
    'abba' & 'abca' == false
    
    Write a function that will find all the anagrams of a word from a list. 
    
    You will be given two inputs a word and an array with words. You should 
    return an array of all the anagrams or an empty array if there are none. 
    
    For example:
    anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
    anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
    anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
    */

    // // // 1. Sort word into alphabetical order and store as a string
    // const wordSorted = word.split('').sort().join()

    // // // 2. Filter out every word in words (sorted) that is not equal to wordSorted
    // const result = words.filter(word => word.split('').sort().join() === wordSorted)

    // return result
    return words.filter(w => w.split('').sort().join() === word.split('').sort().join())
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))