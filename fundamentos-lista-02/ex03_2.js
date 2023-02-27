//3. Crie uma função que dada a idade de um usuário indique se ele pode ou não
//realizar a compra de um game. Considere: pessoas com idade superior a 16 anos
//podem efetuar a compra.

const prompt = require ('prompt-sync') ({sigint: true})


function comprarGame(idade) {
    if (idade>16){
        console.log(`Você tem ${idade} anos e pode comprar esse Game!`)
    } else {
        console.log(`Você tem ${idade} anos e ainda NÃO pode comprar esse Game!`)
    }
}

const idade = prompt("Digite a idade: ")
comprarGame(idade)