function rot13(str) {
  /*
    How can you tell an extrovert from an introvert at NSA?
    Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

    I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
    According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

    For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

    Test examples:
    "EBG13 rknzcyr." -> "ROT13 example."
    "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
  */

  let plain = ''
  for (let char of str) {
    if (char.match(/[a-z]/i)) {
      // Check if the character is in alphabet
      // Get the Unicode of the char and shift it by 13
      let code = char.charCodeAt(0) + 13
      // If the character is a lowercase letter and the code goes beyond 'z'
      if (char.match(/[a-z]/) && code > 122) {
        // Wrap around to 'a' by calculating the remainder and adding 97
        code = (code % 123) + 97
        // If the character is an uppercase letter and the code goes beyond 'Z'
      } else if (char.match(/[A-Z]/) && code > 90) {
        // Wrap around to 'A' by calculating the remainder and adding 65
        code = (code % 91) + 65
      }
      // Convert the modified code back to a character and add to plain
      plain += String.fromCharCode(code)
    } else {
      // Concat to plain non-alphabetical chars as they were
      plain += char
    }
  }
  return plain
}

console.log(rot13('EBG13 rknzcyr.')) // ROT13 example.
console.log(rot13('This is my first ROT13 excercise!')) // Guvf vf zl svefg EBG13 rkprepvfr!
