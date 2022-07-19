function digital_root(n) {
    /*
    Digital root is the recursive sum of all the digits in a number.

    Given n, take the sum of the digits of n. If that value has more 
    than one digit, continue reducing in this way until a single-digit 
    number is produced. The input will be a non-negative integer.

    Examples
    16  -->  1 + 6 = 7
    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
    132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
    493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
    */

   // Store in roots our number split in string form in an array e.g. [1, 6]
   let roots = n.toString().split('').map(n => n)
   let sum = 0; // Store our sum total here for adding each digit in above array
   for(num in roots) { // Loop through each digit
       sum += Number(roots[num]); // Sum up each digit
   }
   return roots.length > 1 ? digital_root(sum) : sum; // If the length of roots is
   // greater than 1, recursively run function until broken down to 1 digit length
}
console.log(digital_root(16)); // 7
console.log(digital_root(942)); // 6
console.log(digital_root(132189)); // 6
console.log(digital_root(493193)); // 2