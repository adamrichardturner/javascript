function isIsogram(str) {
    /*
    An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
    Implement a function that determines whether a string that contains only letters is 
    an isogram. Assume the empty string is an isogram. Ignore letter case.

    Example: (Input --> Output)

    "Dermatoglyphics" --> true
    "aba" --> false
    "moOse" --> false (ignore letter case)
    */
   
   // Store our chars here...
   const arr = [];
   // For each char in str...
   for(let char in str) {
       // If arr includes that char, return false (as it is repeated)
       if(arr.includes(str[char].toLowerCase())) {
           return false;
       } else {
           // Else add the char to arr
           arr.push(str[char])
       }
   }
   return true;
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('aba')); // false
console.log(isIsogram('moOse')); // false