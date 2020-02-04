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
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase()
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
  
    
   compareDNA(otherpAequor) {
     let identicalBases = [];
      for (let i = 0; i < this.dna.length; i++) {
         if (this.dna[i] === otherpAequor[i]) {
          identicalBases.push(this.dna[i]);
         };
        };
      const identicalPercent = (identicalBases.length / this.dna.length) * 100;
    console.log(`Specimen # ${this.specimenNum} and Specimen # ${otherpAequor.specimenNum} have ${identicalPercent} % DNA in common.`)  
      },
    
    willLikelySurvive() {
    let countCG = 0; 
    for (let i = 0; i < this.dna.length; i++) {
      if (this.dna[i] === 'C' || this.dna[i] === 'G') {
        countCG +=1;
      };
    };
    let countCGPerc = ( countCG / this.dna.length) * 100;
      if (countCGPerc >= 60) {
        return true;
      } else {
        return false;
      }
  }
 
 }
};     
 
const pAequor30Survivals = [];
let idCounter = 1;
while (pAequor30Survivals.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive() == true) {
    pAequor30Survivals.push(newOrg);
  };
  idCounter ++;
}
 
    

/*const specimen1 = pAequorFactory(2, mockUpStrand());
const specimen2 = pAequorFactory(2, mockUpStrand());
const specimen3 = pAequorFactory(3, mockUpStrand());

console.log(specimen1);
//console.log(specimen2);

console.log(specimen1.mutate());


//specimen1.compareDNA(mockUpStrand());

console.log(specimen2.willLikelySurvive());*/

console.log(pAequor30Survivals)
