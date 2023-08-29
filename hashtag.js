function generateHashtag(str) {
    if (!str.trim()) {
        console.log('Its empty')
        return false
    }
    let arr = str
        .split(' ')
        .filter((e) => e !== '')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join('')
    return arr
}

console.log(generateHashtag(''))
console.log(generateHashtag(' Hello there thanks for trying my Kata'))
console.log(generateHashtag('    Hello     World   '))
