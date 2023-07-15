function noBoringZeros(n) {
  // Numbers ending with zeros are boring.
  // They might be fun in your world, but not here.
  // Get rid of them. Only the ending ones.

  let isNeg = n < 0
  if (isNeg) n *= -1

  const filtered = Number(
    String(Number(n.toString().split('').reverse().join('')))
      .split('')
      .reverse()
      .join('')
  )
  return isNeg ? filtered * -1 : filtered
}

console.log(noBoringZeros(1450)) // 145
console.log(noBoringZeros(960000)) // 96
console.log(noBoringZeros(1050)) // 105
console.log(noBoringZeros(-1050)) // -105
