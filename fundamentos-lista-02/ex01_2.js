//1. Crie uma função que imprime no console do terminal o seu nome

const prompt = require ('prompt-sync') ({sigint: true})

function imprimirNome (nome) {
    console.log(`Seu nome é ${nome}`)
}

const nome = prompt('Digite seu nome: ')
imprimirNome(nome)