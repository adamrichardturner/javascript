function toCamelCase(str) {
  /*
    Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
    The first word within the output should be capitalized only if the original word was capitalized 
    (known as Upper Camel Case, also often referred to as Pascal case).

    Examples
    "the-stealth-warrior" gets converted to "theStealthWarrior"
    "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
  */
 
  // If str isn't empty...
  if (str.length > 0) {
    // Split str on the possible delimiters
    const str1 = str.split(/[-_]+/);
    // Store in chars our modified string representation
    const chars = [];
    for (let i = 0; i < str1.length; i++) {
        // Loop through each word and push the uppercase first letter + rest of str to chars
        chars.push(str1[i].charAt(0).toUpperCase() + str1[i].slice(1));
      }
    // If first letter was uppercase, simply join chars and return it
    // Else convert first letter of chars to lowercase + add rest of chars
    return str[0].toUpperCase() === str[0]
      ? chars.join("")
      : chars[0].toLowerCase() + chars.slice(1).join("");
  } else {
    // Otherwise, str was empty so we return an empty string
    return '';
  }
}

console.log(toCamelCase("the-stealth-warrior")); // theStealthWarrior
console.log(toCamelCase("The_Stealth_Warrior")); // TheStealthWarrior