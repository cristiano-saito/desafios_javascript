
    function calcularAreaEPerimetro() {        
        var largura = document.getElementById("largura").value;
        var altura = document.getElementById("altura").value;
       
        var area = calculaArea(altura,largura);
        var perimetro = calculaPerimetro(altura,largura);
        var resultadoArea = document.getElementById("resultadoArea");  
        var resultadoPerimetro = document.getElementById("resultadoPerimetro");  
        resultadoArea.innerHTML = "";
        resultadoPerimetro.innerHTML = "";

 
        var text1 = document.createTextNode("Área: "+area);
        var text2 = document.createTextNode("Perímetro: "+perimetro);
        resultadoArea.appendChild(text1);
        resultadoPerimetro.appendChild(text2);

    }

    function calculaArea(altura,largura){
        return altura * largura;
    }

    function calculaPerimetro(altura,largura){
        return ((Number(largura)) + (Number(altura))) * 2;
    }
