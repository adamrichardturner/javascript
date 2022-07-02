const dogFactory = (name, breed, weight) => {
    /*
    Factory function which creates dog objects and includes a number of properties and methods.
    */
    return {
        _name: name,
        _breed: breed,
        _weight: weight,

        get name() {
            return this._name;
        },
        get breed() {
            return this._breed;
        },
        get weight() {
            return this._weight;
        },
        set name(newName) {
            if (typeof newName === 'string') {
                this._name = newName;
            } else {
                console.log('Invalid format');
            }
        },
        set breed(newBreed) {
            if (typeof newBreed === 'string') {
                this._breed = newBreed;
            } else {
                console.log('Invalid format');
            }
        },
        set weight(newWeight) {
            if (typeof newWeight === 'number') {
                this._weight = newWeight;
            } else {
                console.log('Invalid format');
            }
        },
        bark() {
            return 'ruff! ruff!';
        },
        eatTooManyTreats() {
            this._weight += 1;
        }
    }
}