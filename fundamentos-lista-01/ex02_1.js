//2. Você irá criar duas variáveis chamadas numeroA e numeroB atribuindo valores numéricos
//para ambas. Após isso crie uma terceira variável chamada resultado atribuindo a
//multiplicação das duas variáveis anteriores e imprima o valor do resultado no console.
const prompt = require("prompt-sync")()

let numeroA = Number(prompt("Digite o número A: "))
let numeroB = Number(prompt("Digite o número B: "))
let resultado = numeroA * numeroB

console.log("A multiplicação de ", numeroA," X ", numeroB,  " = ", resultado)