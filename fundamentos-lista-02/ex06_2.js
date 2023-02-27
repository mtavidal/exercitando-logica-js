//6. A entrada para um clube de pesca custa R$20,00 por pessoa e cada pessoa
//tem direito a levar um peixe. Peixes extras custam R$12,00. Elabore um programa
//que leia o número de pessoas de uma família que foram ao clube e o número de
//peixes obtidos na pescaria. Informe o total pago pela família

const prompt = require ('prompt-sync') ({sigint: true})

function totalPagar(numeroPessoas, numeroPeixes){
    const totalEntrada = numeroPessoas * 20
    
    if (numeroPessoas >= numeroPeixes) {
        return totalEntrada
    } else {
        const totalPeixes = (numeroPeixes - numeroPessoas) * 12
        return totalEntrada + totalPeixes
    }
}

const numeroPessoas = Number(prompt("Quantas pessoas foram pro Clube de pesca: "))
const numeroPeixes =  Number(prompt("Quantos peixes foram obtidos na pescaria: "))
const totalGasto = totalPagar(numeroPessoas, numeroPeixes)
console.log(`O total a ser pago pela familia é ${totalGasto}`)


