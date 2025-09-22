   
    function ageGroup() {      
        const age = document.querySelector("#idade").value;
        const group = calculateAgeGroup(Number(age));
        console.log(group);
              
        const result = document.querySelector("#result");  
        result.innerHTML = "";

        const text = document.createTextNode(`Sua idade é ${age} anos. Você pertence a faixa etária: ${group}`);
        result.appendChild(text);

    }

    function calculateAgeGroup(age){
       let ageGroup;
    if (age <= 12) {
        ageGroup = "criança";
    } else if (age <= 18) {
        ageGroup = "adolescente";
    } else if (age <= 60) {
        ageGroup = "adulto";
    } else {
        ageGroup = "idoso";
    }
    return ageGroup;
    }
