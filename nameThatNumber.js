function nameThatNumber(num) {
    /*
    In this kata, you'll be given an integer of range 0 <= x <= 99 and have to 
    return that number spelt out in English. A few examples:

    nameThatNumber(4)   // returns "four"
    nameThatNumber(19)  // returns "nineteen"
    nameThatNumber(99)  // returns "ninety nine"
    Words should be separated by only spaces and not hyphens. No need to validate 
    parameters, they will always be in the range [0, 99]. Make sure that the 
    returned String has no leading of trailing spaces. Good luck!
    */

    // Store in firstDigit and lastDigit the first and last digit of our two digit
    // num input...
    const firstDigit = num.toString()[0]
    const lastDigit = num.toString()[num.toString().length-1]
    // Store in numberNames all the numberNames from 0 to 19 inclusive...
    const numberNames = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    // Store in decades the 'decade' term for the first part of our final
    // string representation of the numbers above 19 and below 99...
    const decades = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    // Any num below 20 is just corresponding to the numberNames object key
    if (num < 20) {
        return numberNames[num];
    // Else if num is > 20 and isn't a decade number (20, 30 etc) - return 
    // the string as represented in the return statement...
    } else if (num > 20 && Number(lastDigit) !== 0) {
        return decades[firstDigit] + ' ' + numberNames[lastDigit]
    } else {
        // Else just return the decade.
        return decades[firstDigit];
    }
}

console.log(nameThatNumber(48)); // forty eight
console.log(nameThatNumber(33)); // thirty three