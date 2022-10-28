function isItANum(str) {
    /*
    Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

    However, something strange has happened and now all of the phone numbers contain lots of random characters, 
    whitespace and some are not phone numbers at all!

    For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more 
    lines that we need to check.

    The Task
    Given a string, you must decide whether or not it contains a valid phone number. If it does, return the 
    corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else 
    return "Not a phone number".
    */

    // Store in nums available digits...
    const nums = '0123456789';
    // Store in count our count of valid nums...
    let count = 0;
    // Store in newNum only the valid nums in str, increment count to keep track of valid nums...
    const newNum = str.split('').filter(e => {
        if(nums.includes(e)) {
            count++;
            return e;
        } 
    }).join('');
    // If count is 11 digits (valid) and first char of newNum is '0' - return newNum, otherwise invalid
    return count === 11 && newNum[0] === '0' ? newNum : 'Not a phone number';
}

console.log(isItANum('efRFS:)0207ERGQREG88349F82!'));