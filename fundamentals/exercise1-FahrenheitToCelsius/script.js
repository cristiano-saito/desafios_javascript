const readline = require("readline-sync");


function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32)*5/9; 
}

console.log("Welcome to the temperature converter!");
console.log("Please enter the temperature you want to convert");

let temperature = Number(readline.question());

console.log("Choose F to Fahrenheit or C to Celsius");

let type = readline.question();

if (type == "F") {
  
  console.log(`${temperature}°C is equal to ${fahrenheitToCelsius(temperature)}°F`);
} else if (type == "C") {
  
  console.log(`${temperature}°C is equal to ${celsiusToFahrenheit(temperature)}°F`);
}


