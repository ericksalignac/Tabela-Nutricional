var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela de nutrição"

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if(!pesoEhValido){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-inválido")
    }

    if(!alturaEhValida){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-inválido")
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc
    }    

    function calculaImc(peso,altura) {
        var imc = 0;
        imc = peso / ( altura * altura);

        return imc.toFixed(2);
    }

    function validaPeso(peso){
        if(peso >= 0 && peso < 1000){
            return true;
        }else{
            return false;
        }
    } 

    function validaAltura(altura) {
        if (altura >= 0 && altura <= 3.00) {
            return true;
        } else {
            return false;
        }
    }
    
};