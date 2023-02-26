const prompt = require ('prompt-sync') ({sigint: true});

const nomeEmpresa = 'OMMA'
const receitas  = []
let identificador = 0

//classes


class Receita {
    constructor(titulo, dificuldade, ingredientes, modoPreparo, video, isVegana) {
        this.id = ++identificador
        this.titulo = titulo
        this.dificuldade = dificuldade
        this.ingredientes = ingredientes //array
        this.modoPreparo = modoPreparo
        this.video = video
        this.isVegana = isVegana
    }
}

//funções

function headerOmma() {
    console.log('---------------- '+ nomeEmpresa +' ----------------')
}
function cadastrarReceita(titulo, dificuldade, ingredientes, modoPreparo, video, isVegana) {
    const receita = new Receita(titulo, dificuldade, ingredientes, modoPreparo, video, isVegana)
    receitas.push(receita)
    console.log('Receita ->'+ receita.titulo + ' - ID: ' + receita.id + '<- cadastrada com sucesso!\n')
}
function exibirReceitas() {
    console.log('-------- Exibindo Receitas -----------')
    for (let index = 0; index < receitas.length; index++) {
        const receita = receitas[index];
        console.log('-------------- ID: '+ receita.id +' -----------------')
        console.log(receita.titulo)
        console.log(receita.ingredientes)
        console.log(receita.isVegana ? "É vegana": "Não é vegana")
        console.log('--------------------------------------\n')
    }
}
function deletarReceita(id) {
    for (let index = 0; index < receitas.length; index++) {
        const receita = receitas[index];
        if (receita.id == id){
            receitas.splice(index,1)
            console.log('A receita ID: '+ receita.id +' foi deletada com sucesso!')
            return
        } 
    }
    console.log('A receita ID: '+ id +' não foi encontrada!')
}

function menuCadastrarReceita() {
    const titulo = prompt("Digite o título da sua receita: ")
    const dificuldade = prompt("Digite a dificuldade da sua receita: ")
    const ingredientes = prompt("Digite os ingredientes da sua receita(separados por vírgula): ")
    const modoPreparo = prompt("Digite o modo de preparo da sua receita: ")
    const video = prompt("Digite o link para o vídeo da sua receita: ")
    const ehVegana = prompt("Sua receita é vegana (s/n): ")
    console.log(" ")
    
    const ingredientesArray = ingredientes.split(",");
    const isVegana = ehVegana == 's' ? true: false
    cadastrarReceita(titulo, dificuldade, ingredientesArray, modoPreparo, video, isVegana)
}

//programa principal

let menu = 0
do {
    headerOmma()
    console.log('[1] - Cadastrar nova receita')
    console.log('[2] - Exibir Receitas cadastradas')
    console.log('[3] - Deletar receita por ID')
    console.log('[0] - Finalizar programa')
    console.log(" ")
    menu = prompt("Digite a opção que deseja realizar: ")
    console.log(" ")
    console.log('--------------------------------------\n')
    switch(menu) {
        case '1':
            menuCadastrarReceita()
            break;
        case '2':
            exibirReceitas()
            break;
        case '3':
            const id = prompt('Qual receita deseja excluir (ID): ')
            deletarReceita(id)
            break;
        case '0':
            console.log('-------- PROGRAMA FINALIZADO ---------')
            break;
        default:
            console.log('Opção inválida. Tente novamente')
      }
    
} while (menu != 0)


// cadastrarReceita('Bolo de Chocolate', 'Fácil', ['01 ovo', '500gr farinha'], 'mistura tudo', 'www.youtube.com', false)
// cadastrarReceita('Bolo de Cenoura', 'Fácil', ['01 cenoura', '500gr farinha'], 'mistura tudo', 'www.youtube.com', true)
// exibirReceitas()
// deletarReceita(1)
// exibirReceitas()