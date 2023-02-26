//9. Crie uma função chamada converterEmHoras que receba um número em minutos como
//parâmetro e irá exibir a quantidade em horas
const prompt = require("prompt-sync")()

function converterEmHoras (minutos) {
    let horas = minutos/60
    let restoMinuto = minutos%60
    if (restoMinuto==0) {
        return minutos + " minutos = " + parseInt(horas) + " horas"
    } else{
        return minutos + " minutos = " + parseInt(horas) + " horas, e sobram " + restoMinuto +" minutos"
    }
}

let minutos = Number(prompt("Digite a quantidade de minutos que deseja transformar em horas: "))
console.log(converterEmHoras(minutos))

//.toFixed(2) - casa decimais
//Number.isInteger(variavel) - é inteiro? retorna true or false 