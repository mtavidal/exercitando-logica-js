//6. Você deve criar um loop usando o for, que exibe no console a sequência de números do 0
//ao 20.

// function repeticao() {
//     for (let i = 0; i<=20; i++){
//         console.log(i)
//     }
// }

// repeticao()
    

//personalizando

const prompt = require("prompt-sync")()

let numInicio = Number(prompt("Digite o número para iniciar a contagem: "))
let numFinal = Number(prompt("Digite o número para encerrar a contagem: "))

function repeticaoPersonalizada(numInicio, numFinal){
    console.log("============== INICIANDO CONTAGEM ===============")
    if (numInicio < numFinal) {
        for (let i = numInicio; i <= numFinal; i++) {
            console.log(i)
        }
    } else if (numInicio > numFinal) {
        for (let i = numInicio; i >= numFinal; i--) {
            console.log(i)
        }
    } else {
        console.log ("Numeros iguais, não é possível realizar contagem")
    }
    console.log("============== FIM DA CONTAGEM ===============")
}

repeticaoPersonalizada(numInicio,numFinal)
  
