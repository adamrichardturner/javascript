function inAscOrder(arr) {
    /*
    Are the numbers in order?
    In this Kata, your function receives an array of 
    integers as input. Your task is to determine whether 
    the numbers are in ascending order. An array is said 
    to be in ascending order if there are no two adjacent 
    integers where the left integer exceeds the right 
    integer in value.

    For the purposes of this Kata, you may assume that all 
    inputs are valid, i.e. arrays containing only integers.

    Note that an array of 0 or 1 integer(s) is automatically 
    considered to be sorted in ascending order since all (zero) 
    adjacent pairs of integers satisfy the condition that the 
    left integer does not exceed the right integer in value.
    */
   let flag = true;
   for(let i = 0; i < arr.length; i++) {
       if(arr[i] > arr[i+1]) {
           flag = false;
       } 
   }
   return flag;
}

console.log(inAscOrder([1,2,4,7,19])); // returns true
console.log(inAscOrder([1,2,3,4,5])); // returns true
console.log(inAscOrder([1,6,10,18,2,4,20])); // returns false
console.log(inAscOrder([9,8,7,6,5,4,3,2,1])); // returns false because the numbers are in DESCENDING order