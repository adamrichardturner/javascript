function translatePigLatin(str) {
  /*
    Pig Latin is a way of altering English Words. The rules are as follows:
    - If a word begins with a consonant, take the first consonant or consonant cluster,
    move it to the end of the word, and add ay to it.
    - If a word begins with a vowel, just add way at the end.
  */

  const vowels = 'aeiouAEIOU'
  if (vowels.includes(str[0])) {
    return str + 'way'
  }
  return str.slice(1) + str[0] + 'ay'
}

console.log(translatePigLatin('california')) // aliforniacay
console.log(translatePigLatin('paragraphs')) // aragraphspay
console.log(translatePigLatin('glove')) // oveglay
console.log(translatePigLatin('algorithm')) // algorithmway
