//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//CRIANDO UMA  LISTA DE AMIGOS SECRETOS
let nomesAmigosSecretos = []

//Criando UMA FUNÇÃO DE ADICIONAR AMIGO
function adicionarAmigo(){
    

    
    nome = document.getElementById("amigo")
    
    if (nome.value == ""){
        alert("Por favor, insira um nome.")
    }else{
        nomesAmigosSecretos.unshift(nome.value)
        listaAmigosSecretos(nome)
        nome.value = ""
}}


function listaAmigosSecretos(nome){
    listaAmigos = document.getElementById("listaAmigos")
    listaAmigos.innerHTML += "<li>"+ nome.value +"</li>"
}


function sortearAmigo(){

    
    amigoSorteado = Math.floor(Math.random() * nomesAmigosSecretos.length) 

    listaAmigos = document.getElementById("listaAmigos")
    listaAmigos.innerHTML = ""
    sorteado = nomesAmigosSecretos[amigoSorteado]
    if(sorteado === undefined){
        alert("Ainda não adicionou nomes")
    }else{
        resultado = document.getElementById("resultado")
        console.log(sorteado)
        resultado.innerHTML = "<li>O amigo secreto sorteado é: " + sorteado  + "</li>"
        nomesAmigosSecretos = []
    }
}