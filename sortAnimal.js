function sortAnimal(animal) {
    if (!animal) return []
    return animal.sort((a, b) => {
        return a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
    })
}

// Sample animal data.
var animal = [
    { name: 'Cat', numberOfLegs: 4 },
    { name: 'Snake', numberOfLegs: 0 },
    { name: 'Dog', numberOfLegs: 4 },
    { name: 'Pig', numberOfLegs: 4 },
    { name: 'Human', numberOfLegs: 2 },
    { name: 'Bird', numberOfLegs: 2 },
]

// Log the result of the sort operation.
console.log(sortAnimal(animal))
