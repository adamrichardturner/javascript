function fakeBin(x) {
    /*
    Given a string of digits, you should replace any digit 
    below 5 with '0' and any digit 5 and above with '1'. 
    Return the resulting string.

    Note: input will never be an empty string
    */
    return x.split('').map(e => Number(e) < 5 ? '0' : '1').join('');
}

console.log(fakeBin('45385593107843568')); // 01011110001100111