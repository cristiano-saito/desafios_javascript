function primeNumbers(number) {
  let isPrime = true

  for (let index = 2; index < number; index++) {

    if(number%index==0){
      isPrime = false
      break
    }
   
  }
  isPrime?console.log(`${number} is Prime `):"";

  
  
}

for (let index = 0; index < 100; index++) {

  primeNumbers(index)

  
}



