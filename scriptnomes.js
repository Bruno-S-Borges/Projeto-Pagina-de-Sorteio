let elementoInput = document.querySelector("input"); // Query selector para buscar o elemento HTML
let elementoLista = document.querySelector("ul");
let elementoBotao = document.querySelector("button");

let pessoas = [] //Array vazio

function mostraNomes(){

    elementoLista.innerHTML = ''

    for(nome of pessoas){
        let elementoNome = document.createElement("li")
        let textoNome = document.createTextNode(nome)

        let elementoLink = document.createElement("a")
        let pos = pessoas.indexOf(nome)
        let linkText = document.createTextNode("X")

        elementoLink.setAttribute("onclick", `deletaNome(${pos})`)

        document.getElementById("quant").innerHTML = pessoas.length

        elementoNome.appendChild(textoNome)
        elementoLista.appendChild(elementoNome)
        elementoNome.appendChild(elementoLink)
        elementoLink.appendChild(linkText)
    }
}

function adicionar(){ //Função de adicionar valor ao Array
    let valor = elementoInput.value // colocando o valor na variavel
    pessoas.push(valor) //Adicionando ao Array
    elementoInput.value = '' //Limpando campo Input

    mostraNomes()
}


function sortear(){ //Função sortear

    let np = pessoas.length; //colocando na variavel np o tamanho do array

    let ns = Math.floor(Math.random() * np );//colocando na variavel ns um numero random vezes o tamanho do array e arredondando ele para baixo

    document.getElementById("sorteado").innerHTML = pessoas[ns] //mudando o nome conforme for escolhido no random
}

function deletaNome(pos){
    pessoas.splice(pos, 1)

    mostraNomes()
}

function limpar(){
    pessoas.splice(0, pessoas.length);
    document.getElementById("quant").innerHTML = 0
    document.getElementById("sorteado").innerHTML = "..."

    mostraNomes()
}
