function solution(str, ending){
    /*
    Complete the solution so that it returns true if the first argument(string) 
    passed in ends with the 2nd argument (also a string).

    Examples:

    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false
    */

   // Store in match the chars to the length of ending at end of str as a string.
   let match = str.split('').splice(str.length-ending.length, ending.length).join('');
   // If match is equal to ending, return true - false otherwise.
   return match == ending ? true : false;
   }
  
console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd')); // returns false