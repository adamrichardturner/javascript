function isValidIP(str) {
    /*
    Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
    IPs should be considered valid if they consist of four octets, with values 
    between 0 and 255, inclusive.

    Valid inputs examples:
    Examples of valid inputs:
    1.2.3.4
    123.45.67.89
    Invalid input examples:
    1.2.3
    1.2.3.4.5
    123.456.78.90
    123.045.067.089
    Notes:
    Leading zeros (e.g. 01.02.03.04) are considered invalid
    Inputs are guaranteed to be a single string
    */
   return str.split('.').length === 4 ? str.split('.')
                                           .every(o => o >= 0 
                                           && o <= 255 
                                           && o
                                           && !/^0[0-9].*$/g.test(o) 
                                           && !/[\r\n\sa-zA-Z!@#\$%\^\&*\)\(+=._-]/.test(o)) : false;
}

console.log(isValidIP("0.0.0.0")); // true
console.log(isValidIP("12.255.56.1")); // true
console.log(isValidIP("123.045.067.089")); // false
console.log(isValidIP('.228.63.73')); // false