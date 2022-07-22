function twistedSum(n) {
    /*
    Find the sum of the digits of all the numbers from 1 to N (both ends included).

    Examples
    # N = 4
    1 + 2 + 3 + 4 = 10

    # N = 10
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

    # N = 12
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
    */
   // Store in toSum an array of all the digits from 0 to n
   const toSum = [...Array(n + 1).keys()];
   // Store in sum our total which we return at the end of function
   let sum = 0;
   // For each index in toSum
   for(let i in toSum) {
       // If the value converted to string is greater than 1 in length...
       if(toSum[i].toString().length > 1) {
           // Add to sum that value totalled using reduce
           sum += toSum[i].toString().split('').reduce((a , b) => Number(a) + Number(b));
       } else {
           // Else just as the digit to sum
           sum += toSum[i];
       }
   }
   return sum;
}

console.log(twistedSum(4)); // 10
console.log(twistedSum(10)); // 46 
console.log(twistedSum(12)); // 51