function persistence(num) {
    /*
    Write a function, persistence, that takes in a positive parameter num 
    and returns its multiplicative persistence, which is the number of times 
    you must multiply the digits in num until you reach a single digit.

    For example (Input --> Output):

    39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
    999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
    4 --> 0 (because 4 is already a one-digit number)
    */
   const calc = (i) => i.toString().split('').reduce((a, b) => a * b);
   const solutions = [];
   while(num.toString().length > 1) {
       let solved = calc(num);
       solutions.push(solved);
       num = solved;
   }
   return solutions.length;
}

console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
console.log(persistence(4)); // 0