//8. O minimercado Ferreirinha necessita de um programa que leia o total de uma
//compra. Exiba como resposta o nº máximo de vezes que o cliente pode parcelar
//essa compra e o valor de cada parcela. Considere as seguintes condições: a) cada
//parcela deve ser de, no mínimo, R$ 20,00; b) o número máximo de parcelas
//permitido é 6.

const prompt = require ('prompt-sync') ({sigint: true})

function quantidadeParcelas(totalCompra) {
    
   for (let i = 6; i>= 1; i--){
    if(totalCompra/i >=20){
        return `O número máximo de parcela(s) é ${i}X e o seu valor é de ${(totalCompra/i).toFixed(2)}`
    }
   }

}

const totalCompra = Number(prompt("Qual o valor total da compra: "))
console.log(quantidadeParcelas(totalCompra))