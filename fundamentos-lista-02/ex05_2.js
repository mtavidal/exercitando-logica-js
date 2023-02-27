//5. Elaborar um programa para uma concessionária de veículos. O programa deve
//ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (30%)
//e o saldo em 12x.

const prompt = require ('prompt-sync') ({sigint: true})

function totalPagar(preco, modelo) {
    const entrada = (preco * 0.3).toFixed(2)
    const saldo = ((preco - entrada)/12).toFixed(2)
    console.log(`Para o carro ${modelo}, o total da entrada é R$${entrada} e o saldo em 12x é R$${saldo}.`)
    
}

const modelo = (prompt("Digite o modelo do carro: ")).toUpperCase()
const preco = Number(prompt("Digite o preço do carro: "))
totalPagar(preco, modelo)