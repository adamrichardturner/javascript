function hamming(a, b) {
    let diff = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) diff++
    }
    return diff
}

console.log(hamming('I like turtles', 'I like turkeys'))
