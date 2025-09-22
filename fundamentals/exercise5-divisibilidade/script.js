
    function isDividedBy() {      
        var number1 = document.querySelector("#number1").value;
        var number2 = document.querySelector("#number2").value;
        var isDivided = rest(number1, number2);
        var result = document.querySelector("#result");  
        result.innerHTML = "";

        var text = document.createTextNode(`${number1} é divisível por ${number2}: ${isDivided}`);
        result.appendChild(text);

    }

    function rest(number1, number2){

        return Boolean(!(number1 % number2));


    }
