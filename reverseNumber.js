function reverseNumber(n) {
    /*
    Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

    Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

    Examples
    123 ->  321
    -456 -> -654
    1000 ->    1
    */

   // If n is positive...
   if(n > 0) {
       // Convert n to string, split to array, reverse and join as string, convert str to Number
       return Number(n.toString().split('').reverse().join(''));
   } else {
       // If n is negative, convert to string and store in value the string without the negative sign
       let value = n.toString().substring(1);
       // Return the value split as array, reversed, joined and multiplied by -1 to return reverse negative
       // value
       return Number(value.split('').reverse().join('')) * -1;
   }
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456))

