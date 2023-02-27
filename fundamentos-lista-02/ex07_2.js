//7. Elaborar um programa para uma veterinária, que leia o peso de uma ração em
//Kg e o quanto um cachorro consome por dia da ração, em gramas. Informe
//quantos dias irá durar a ração e o quanto sobra da ração (em gramas)

const prompt = require ('prompt-sync') ({sigint: true})


function duracaoDias(pesoRacao, consumoDiario) {
    const totalDia = Math.floor((pesoRacao*1000)/consumoDiario)
    const resto = (pesoRacao*1000)%consumoDiario
    console.log(`A ração irá durar ${totalDia} dia(s).`)
    console.log(`Sobrará ${resto} gramas de ração.`)
}

const pesoRacao = Number(prompt("Qual o peso total da ração em Kg: "))
const consumoDiario = Number(prompt("Quantas gramas o cachorro consome por dia da ração: "))
duracaoDias(pesoRacao, consumoDiario)