   
    function calculator() {      
        const number1 = document.querySelector("#number1").value;
        const number2 = document.querySelector("#number2").value;
        const operation = document.querySelector("#operation").value;
        const calculus = calculate(Number(number1), Number(number2),operation);
             
        const result = document.querySelector("#result");  
        result.innerHTML = "";

        const text = document.createTextNode(`${number1} ${operation} ${number2} = ${calculus}`);
        result.appendChild(text);

    }

    function calculate(number1, number2,operation){

        switch (operation) {
            case "+":
                return number1 + number2;
            case "-":
                return number1 - number2;
            case "*":
                return number1 * number2;
            case "/":
                return number1 / number2;
            default:
                // It's good practice to handle the default case,
                // for example, by returning an error or a default value.
                return "Operação inválida";
        }
      
    }
