function anagramDifference(w1, w2) {
    const charCount = (word) => {
        const count = {}
        for (const char of word) {
            if (count[char]) {
                count[char]++
            } else {
                count[char] = 1
            }
        }
        return count
    }

    const count1 = charCount(w1)
    const count2 = charCount(w2)

    for (const char in count1) {
        if (count2[char]) {
            const minCount = Math.min(count1[char], count2[char])
            count1[char] -= minCount
            count2[char] -= minCount
        }
    }

    return (
        Object.values(count1).reduce((acc, curr) => acc + curr, 0) +
        Object.values(count2).reduce((acc, curr) => acc + curr, 0)
    )
}

console.log(anagramDifference('a', '')) // Expected output: 1
