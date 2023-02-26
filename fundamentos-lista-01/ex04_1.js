//4. Crie uma função chamada multiplica que recebe dois parâmetros numéricos. Ela deverá
//exibir a multiplicação desses dois parâmetros no console

const prompt = require("prompt-sync")()

function multiplica(num1, num2) {
    return num1 * num2
}

let numeroA = Number(prompt("Digite o número A: "))
let numeroB = Number(prompt("Digite o número B: "))
let resultado = multiplica(numeroA, numeroB)

console.log("Resultado: ", resultado)

