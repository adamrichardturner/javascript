function hasUniqueChars(str) {
  /*
    Write a program to determine if a string contains only unique characters. 
    
    Return true if it does and false otherwise.

    The string may contain any of the 128 ASCII characters. 

    Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
  */
  // Store in seen our chars as we iterate over str
  let seen = ''
  for (let i = 0; i < str.length; i++) {
    seen += str[i]
    if (seen.includes(str[i + 1])) {
      return false
    }
  }
  return true
}

console.log(hasUniqueChars('  nAa')) // false
console.log(hasUniqueChars('abcdef')) // true
console.log(hasUniqueChars('aA')) // true
console.log(hasUniqueChars('++-')) // false
