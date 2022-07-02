const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    /* 
    Logs a polite decline message for each element in the array.
    */
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
    /* 
    Declines each element in the array calling politelyDecline as a higher order
    function
    */
    arr.forEach(politelyDecline);
}

const acceptEverything = foods => {
    /*
    Prints a message for each element in the given array.
    */
    foods.forEach(food => console.log(`Ok, I guess I will eat some ${food}.`))
}

declineEverything(veggies);
acceptEverything(veggies);