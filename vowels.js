const countVowels = word => {
    const vowels = 'aeiou';
    return word.split('').filter(e => vowels.includes(e)).join('').length;
}

console.log(countVowels('bootcamp')); // 3