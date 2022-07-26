var countBits = function(n) {
    /*
    Write a function that takes an integer as input, and returns the number 
    of bits that are equal to one in the binary representation of that number. 
    You can guarantee that input is non-negative.

    Example: The binary representation of 1234 is 10011010010, so the function 
    should return 5 in this case
    */

   let binary = n.toString(2).split('');
   let count = [];
   for(let i = 0; i < binary.length; i++) {
       if(Number(binary[i]) === 1) {
           count.push(binary[i])
       }
   }
   return count.length;
};

console.log(countBits(5840226131)); // 17