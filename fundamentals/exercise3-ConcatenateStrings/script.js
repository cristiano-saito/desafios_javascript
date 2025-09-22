
    function concatenarStrings() {
        
        
        var string1 = document.getElementById("string1").value;
        var string2 = document.getElementById("string2").value;
        var string3 = document.getElementById("string3").value;
        var stringConcatenated = `${string1} ${string2} ${string3}`;
        var resultado = document.getElementById("resultado");  
        resultado.innerHTML = "";
 
        var text = document.createTextNode("string concatenada: "+stringConcatenated);
        resultado.appendChild(text);
        
    }
