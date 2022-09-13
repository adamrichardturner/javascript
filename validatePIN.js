function validatePIN(pin) {
  /*
    ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

    If the function is passed a valid PIN string, return true, else return false.

    Examples (Input --> Output)
    "1234"   -->  true
    "12345"  -->  false
    "a234"   -->  false
  */
  
  // If pin length is 4 or 6...
  if (pin.length == 4 || pin.length == 6) {
    // Store in isValid our validated chars
    let isValid = "";
    // For each char in pin...
    for (let i in pin) {
      // If the char is a digit add to isValid
      if (/^\d+$/.test(pin[i])) {
        isValid += pin[i];
      }
    }
    // Return true if isValid is same as pin length and is 4 or 5 chars
    return (
      (isValid.length === pin.length && isValid.length == 4) ||
      isValid.length == 6
    );
  } else {
    return false;
  }
}

console.log(validatePIN("1234")); // true
console.log(validatePIN("12345")); // false
console.log(validatePIN("123456")); // true 
console.log(validatePIN("-1.234")); // false
console.log(validatePIN("123456x")); // false
