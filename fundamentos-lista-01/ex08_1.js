//8. Crie uma função chamada tabuada que irá receber um número inteiro como parâmetro e
//exibir no console a tabuada desse número 1 ao 10


const prompt = require("prompt-sync")()

function tabuada (num) {
    console.log("================= Tabuada de " + num + " =================" )
    for (let i = 1; i<=10; i++){
        console.log( i +" X "+ num + " = " + i*num)
        //(`${i} X ${num} = ${i * num}`)
    }
    console.log("================================================" )
}

let num = prompt("Digite o número que deseja ver a tabuada: ")
tabuada(num)