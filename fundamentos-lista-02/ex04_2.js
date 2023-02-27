//4. Você foi convidado para criar o algoritmo de cálculo do custo de frete do
//e-commerce Missouri para uma determinada cidade brasileira. Para cada bairro
//existirá um valor para a entrega das encomendas. Desenvolva uma função que
//dado o nome do bairro imprime no console, do terminal, o custo do frete
//associado

const prompt = require ('prompt-sync') ({sigint: true})

function frete() {
    let bairro = (prompt("Digite o nome do bairro: ")).toLowerCase()
    
    switch (bairro) {
        case 'pituba':
            console.log(`O custo do frete para o bairro ${bairro} é R$ 5,00`);
            break;
        case 'barra':
            console.log(`O custo do frete para o bairro ${bairro} é R$ 8,00`);
            break;
        case 'ondina':
            console.log(`O custo do frete para o bairro ${bairro} é R$ 7,00`);
            break;
        case 'amaralina':
            console.log(`O custo do frete para o bairro ${bairro} é R$ 3,00`);
            break;    
        default:
            console.log(`O bairro ${bairro}, não está cadastro, insira outro bairro.`);
            frete()
    }
}

frete()
