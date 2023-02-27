//2. Crie uma função que receba dois números e imprime no console do terminal: a
//soma, subtração, multiplicação, divisão e o resto da divisão entre entre eles. Milha
//extra: caso o resultado da divisão seja um número decimal formate a saída para
//uma determinada quantidade de casas decimais

const prompt = require ('prompt-sync') ({sigint: true})

function calcula(numA, numB){
    console.log(`A soma de ${numA} e ${numB} é: ${numA + numB}`)
    console.log(`A subtração de ${numA} e ${numB} é: ${numA - numB}`)
    console.log(`A multiplicação de ${numA} e ${numB} é: ${numA * numB}`)
    const divisao = numA / numB
    if (Number.isInteger(divisao)){
        console.log(`A divisão de ${numA} e ${numB} é: ${divisao}`)
    }else {
        console.log(`A divisão de ${numA} e ${numB} é: ${divisao.toFixed(2)}`)
    }
    console.log(`O resto da divisão de ${numA} e ${numB} é: ${numA % numB}`)
}

const numA = Number(prompt('Digite o primeiro número: '))
const numB = Number(prompt('Digite o segundo número: '))
calcula(numA, numB)