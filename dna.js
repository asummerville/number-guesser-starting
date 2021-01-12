// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (num, array) => {
    return {
      _specimenNum: num,
      _dna: array,
      mutate() {
        const randIndex = Math.floor(Math.random()*15)
        if (this._dna[randIndex] === 'A') {
          const dnaBasesA = ['T', 'C', 'G']
          this._dna[randIndex] = dnaBasesA[Math.floor(Math.random() * 3)] 
        } else if (this._dna[randIndex] === 'T') {
          const dnaBasesA = ['A', 'C', 'G']
          this._dna[randIndex] = dnaBasesA[Math.floor(Math.random() * 3)] 
        } else if (this._dna[randIndex] === 'C') {
          const dnaBasesA = ['A', 'T', 'G']
          this._dna[randIndex] = dnaBasesA[Math.floor(Math.random() * 3)] 
        } else if (this._dna[randIndex] === 'G') {
          const dnaBasesA = ['A', 'C', 'T']
          this._dna[randIndex] = dnaBasesA[Math.floor(Math.random() * 3)] 
        }
        return this._dna
      },
      compareDNA(obj) {
        let dna1 = this._dna
        let dna2 = obj.dna
        let count = 0
        for (i = 0; i < dna1.length; i++) {
          if (dna1[i] === dna2[i]) {
            count += 1
          } else {
            count = count
          }
        }
        let perc = Math.floor((count/15)*100)
        return `Specimen ${this._specimenNum} and specimen ${obj.specimenNum} have ${perc} DNA in common`
      }
    }
  }
  
  let q = pAequorFactory(1, ['T', 'T', 'C', 'G', 'A', 'T', 'C', 'G','A', 'T', 'C', 'G','A', 'T', 'C']) 
  
  let comp = {
    specimenNum: 2,
    dna: ['A', 'T', 'C', 'C', 'T', 'T', 'T', 'C','C', 'C', 'C', 'C','C', 'C', 'C']
  }
  
  console.log(q.compareDNA(comp))