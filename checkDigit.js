function checkDigit(number, index1, index2, digit) {
    /*
    In this Kata, you will be given a number, two indexes (index1 and index2) 
    and a digit to look for. Your task will be to check if the digit exists 
    in the number, within the indexes given.

    Be careful, the index2 is not necessarily more than the index1.
    */
    const check = (num, a, b, d) => {
        if (num.toString().slice(a, b).indexOf(d) > -1) {
            return true;
        } else {
            return index1, index2
        }
    }
    if(index1 < index2) {
        return check(number, index1, index2, digit)
    } else {
        return check(number, index2, index1, digit)
    }
};

console.log(checkDigit(12345678912345, 1, 0, 1))
console.log(checkDigit(1234567, 0, 1, 2))