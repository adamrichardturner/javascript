const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = arr => {
    /*
    Function that takes an array as input and prints a string greeting
    the array element (alien names).
    */
   
   // Loop through the array elements and log to console a greeting message
   // for each element.

    for (let i = 0; i < arr.length; i++) {
        console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    }
}

greetAliens(aliens);