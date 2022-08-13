const uniqueInOrder = iterable => {
    /*
    Implement the function unique_in_order which takes as argument 
    a sequence and returns a list of items without any elements with 
    the same value next to each other and preserving the original 
    order of elements.

    For example:

    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
    */

   // Store in unique our unique values in order
   const unique = [];
   // seen stores whether the item has been iterated over already...
   let seen;
   // For each item in iterable...
   for(let i = 0; i < iterable.length; i++) {
       // if seen is the item, skip adding to unique
       if(seen === iterable[i]) {
           continue;
       } else {
           // else add to unique and reset seen to the item
           unique.push(iterable[i]);
           seen = iterable[i];
       }
   }
   return unique;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));