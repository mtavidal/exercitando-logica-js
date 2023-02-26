//7. Você deve criar um loop usando o for, que exibe no console apenas os números ímpares
//da sequência de números do 0 ao 20
// function repeticao() {
//     for (let i = 1; i<=20; i = i+2){
//         console.log(i)
//     }
// }

// repeticao()
    

//personalizando

const prompt = require("prompt-sync")()

let numInicio = Number(prompt("Digite o número para iniciar a contagem: "))
let numFinal = Number(prompt("Digite o número para encerrar a contagem: "))

console.log("============== INICIANDO CONTAGEM APENAS ÍMPARES===============")
if (numInicio < numFinal) {
    for (let i = numInicio; i <= numFinal; i++) {
        if(i%2 != 0){
            console.log(i)
        } 
    }
} else if (numInicio > numFinal) {
    for (let i = numInicio; i >= numFinal; i--) {
        if(i%2 != 0){
            console.log(i)
        } 
    }
} else {
    console.log ("Numeros iguais, não é possível realizar contagem")
}


console.log("============== FIM DA CONTAGEM ===============")