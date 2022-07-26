var countBits = function(n) {
    /*
    Write a function that takes an integer as input, and returns the number 
    of bits that are equal to one in the binary representation of that number. 
    You can guarantee that input is non-negative.

    Example: The binary representation of 1234 is 10011010010, so the function 
    should return 5 in this case
    */

   // Convert n to an unsigned binary string representation
   // Convert to array and run reduce to add all bits equal to one
   return (n >>> 0).toString(2).split('').reduce((a, b) => Number(a) + Number(b));
};

console.log(countBits(1234)); // 5