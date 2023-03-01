function disemvowel(str) {
    /*
    Trolls are attacking your comment section!

    A common way to deal with this situation is to 
    remove all of the vowels from the trolls' comments, 
    neutralizing the threat.

    Your task is to write a function that takes a string 
    and return a new string with all vowels removed.

    For example, the string "This website is for losers 
    LOL!" would become "Ths wbst s fr lsrs LL!".

    Note: for this kata y isn't considered a vowel.
    */

    // Split str into an array, iterate with map, if the element
    // is included in the vowels string return nothing, else
    // return the element and join the array
    return str.split('')
              .map(
                e => 'aeiou'.includes(e.toLowerCase()) ? '' : e)
              .join('');
}

console.log(disemvowel("This website is for losers LOL!"));
// Ths wbst s fr lsrs LL!