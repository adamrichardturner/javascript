// complete the function
function solution(string) {
    /*
    Complete the solution so that the function will break up camel casing, 
    using a space between words.

    Example
    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""
    */

    // Split the string into an array, map over this array, if the element is uppercase
    // pre-pend with a space, else just append the element. Join together as a string
    return string.split('').map(e => e === e.toUpperCase() ? ' ' + e : e).join('');
}

console.log(solution('camelCasing')); // camel Casing