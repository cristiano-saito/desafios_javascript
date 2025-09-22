function fibonacci(number) {

 let fibonaccis = [0,1]

 for (let index = 2; index < number; index++) { 
  fibonaccis.push(fibonaccis[index-1]+fibonaccis[index-2])

 }

 fibonaccis.forEach(element => {
  console.log(element)
 });

 console.log(`tamanho: ${fibonaccis.length}`)
}


  
  

  fibonacci(20)


  



