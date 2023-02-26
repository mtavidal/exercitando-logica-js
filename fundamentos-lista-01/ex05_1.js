//5. Crie uma função chamada podeDirigir que receba como parâmetro da idade em formato
//número, e exiba no console “Você pode dirigir” caso o valor seja maior ou igual a 18. Caso
//contrário irá exibir “Você não pode dirigir”.
const prompt = require("prompt-sync")()

let idade = Number(prompt("Digite sua idade: "))

podeDirigir(idade);

function podeDirigir (idade) {
    if (idade>= 18) {
        return console.log("Você pode dirigir")
    } else {
        return console.log("Você não pode dirigir")
    }
}