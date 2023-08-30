function evenOrOdd(number) {
    /*
    Create a function that takes an integer as an argument 
    and returns "Even" for even numbers or "Odd" for odd numbers.
    */
    return number % 2 == 0 ? 'Even' : 'Odd'
}

console.log(evenOrOdd(2)) // Even
console.log(evenOrOdd(4)) // Odd
