// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum,
        dna,
        // Mutate changes one base in the DNA
        mutate() {
            // Random base location on DNA
            let i = Math.floor(Math.random() * this.dna.length);
            // Target base to change
            let oldBase = this.dna[i];
            // Index of the old base
            let oldBaseIndex = this.dna.indexOf(oldBase);
            // Swap old base with new base
            let dnaBases = ['A', 'T', 'C', 'G'];
            // Remove from dnaBases the old/target base
            dnaBases.splice(dnaBases.indexOf(oldBase), 1);
            // Random choice of remaining base letters, less the target
            let mutatedBase = dnaBases[Math.floor(Math.random() * 3)];
            // Replace the old/target base with the mutated base.
            this.dna.splice(oldBaseIndex, 1, mutatedBase)
            return this.dna
        },
        compareDNA(pAequor) {
            // Compares current pAequor dna with passed in dna and returns
            // percentage of how many bases are identical in the same places.
            // Prints a message with the % similarity.
            let source = this.dna;
            let target = pAequor.dna;
            let matched = [];
            for(let i in source) {
                if(source[i] === target[i]) {
                    matched.push(source[i])
                }
            }
            let percent = (matched.length / (source.length + target.length) * 100).toFixed(2);
            console.log(`\nspecimen #1 and specimen #2 have ${percent}% DNA in common`);
        },
        // Tests whether 60% of the DNA is made up of C or G bases, returns true if so.
        willLikelySurvive() {
            let goodDna = 0;
            this.dna.forEach(base => {
                if(base === 'C' || base === 'G') {
                    goodDna++;
                }
            })
            if(goodDna >= 9) {
                return true;
            } else {
                return false;
            }
        }
    };
};

let pAequorInstances = [];
let specimenNumber = 1;
// Make 30 specimens of pAequor but only if they are likely to survive.
while(pAequorInstances.length < 30) {
    let sample = pAequorFactory(specimenNumber, mockUpStrand());
    if(sample.willLikelySurvive()) {
        pAequorInstances.push(sample.dna);
    }
    specimenNumber++;
}

console.log(pAequorInstances);