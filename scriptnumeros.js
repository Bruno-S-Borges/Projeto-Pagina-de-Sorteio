let elementoInputMax = document.querySelector("input#max"); //usamos # quando for id e . quando for classe
let elementoInputMin = document.querySelector("input#min");

function sortearNumero(){
    let min = Math.ceil(elementoInputMin.value); //pegando o valor do input, pegando o 
    let max = Math.floor(elementoInputMax.value);
    //ceil arredonda pra cima
    //floor arredonda pra baixo
    
    let elementoSorteado = Math.floor(Math.random() * (max - min)) + min;
    // Ele pega um numero aleatorio entre a diferença de numero do  menor e do maior e depois soma com o menor valor e arredoanda pra baixo, 

    document.getElementById("nsorteado").innerHTML = elementoSorteado
}

function limparNumero(){
    elementoInputMax.value = ''
    elementoInputMin.value = ''
}