
    function calcularIMC() {
        
        var peso = document.getElementById("peso").value;
        var altura = document.getElementById("altura").value;
        var imc = peso / (altura * altura);
        var resultado = document.getElementById("resultado");  
        resultado.innerHTML = "";
 
        var text = document.createTextNode("IMC: "+imc.toFixed(2));
        //resultado.innerHTML=JSON.stringify(imc.toFixed(2));
        resultado.appendChild(text);
        
    }
