const readline = require("readline-sync");


console.log("Compare two numbers!");
console.log("Please enter the first number");

const number1 = Number(readline.question());

console.log("Please enter the first number");

const number2 = Number(readline.question());

if (number1 > number2 ) {
  
  console.log(`${number1} is greater than ${number2}`);
} else if (number1 < number2) {

  console.log(`${number1} is smaller than ${number2}`);
} else if(number1 == number2){
  
    console.log(`${number1} is equal ${number2}`);

}


