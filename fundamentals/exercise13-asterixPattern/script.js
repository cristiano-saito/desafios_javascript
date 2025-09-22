function asterixPattern(numberOfAsterix) {

  let phrase = "*";
  for (let index = 1; index <= numberOfAsterix; index++) {

    console.log(phrase);

    phrase = phrase + "*";
    
  }
}

function otherSolution(numberOfAsterix){
  for (let index = 1; index <= numberOfAsterix; index++) {
        console.log("*".repeat(index));

  }

}

  
  

  asterixPattern(20)

  otherSolution(20)

  



