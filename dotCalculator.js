function dotCalculator (equation) {
    /*
    You have to write a calculator that receives strings for input. 
    The dots will represent the number in the equation. There will 
    be dots on one side, an operator, and dots again after the operator. 
    
    The dots and the operator will be separated by one space.

    Here are the following valid operators :

    + Addition
    - Subtraction
    * Multiplication
    // Integer Division
    Your Work (Task)
    You'll have to return a string that contains dots, as many the equation returns. 
    If the result is 0, return the empty string. When it comes to subtraction, the 
    first number will always be greater than or equal to the second number.

    */
   const countLeft = dots => {
       // Counts dots to the left of the operand
       let count = 0;
       for(let dot in dots) {
           if(dots[dot] === ' ') {
               break;
           } else {
               count++;
           }
       }
       return count;
   }

   const countRight = dots => {
       // Counts dots to the right of the operand
       let count = 0;
       let reversed = dots.split('').reverse();
       for(let dot in reversed) {
           if(reversed[dot] === ' ') {
               break;
           } else {
               count++;
           }
       }
       return count;
   }
   // Depending on the operand, return '.' repeated by the operation
   // required
   if(equation.includes('+')) {
       return '.'.repeat(countLeft(equation) + countRight(equation));
   } else if (equation.includes('-')) {
       return '.'.repeat(countLeft(equation) - countRight(equation));
   } else if (equation.includes('*')) {
       return '.'.repeat(countLeft(equation) * countRight(equation));
   } else if (equation.includes('/')) {
       return '.'.repeat(countLeft(equation) / countRight(equation));
   }
}

console.log(dotCalculator("..... + ...............")) 
// ....................