   
    function calculateFee() {      
        const type = document.querySelector("#tarifaOptions").value;

        const normalFee= 2.5
       
        let fee;

        if (type == "idade" ) {
            fee = 0
        }else if(type == "estudante"){
            fee = normalFee *50 /100
        }else if(type == "idoso"){
            fee = normalFee *60 /100
        }else{
            fee = normalFee
        }
             
        const result = document.querySelector("#result");  
        result.innerHTML = "";

        const text = document.createTextNode(`Valor da tarifa: R$ ${fee.toFixed(2)}`);
        result.appendChild(text);

    }
