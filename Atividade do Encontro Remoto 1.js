var listaDePecas = ['Amortecedo', 'Motor', 'Filtro de Ar','Amortecedo', 'Motor', 'Filtro de Ar','Amortecedo', 'Motor', 'Filtro de Ar']

let peso = 200
if (peso < 100) {
 console.log('A peça deve pesar no minimo 100g')
} else {
    console.log('A peça tem o peso adequado')
}
//caixa suporta até 10
if(listaDePecas.length < 10){
 console.log('É possivel cadastrar mais peças')
} else {
    console.log('Não tem mais espaço na lista')
}   
//nome do produto
let nomePeca = "Disco de Freio"
if(nomePeca.length > 3){
 console.log("O nome está adequando ao cadastro")
}else if (nomePeca.length ==0){
    console.log("O produto não pode ter o nome vazio")
}else {
    console.log("O nome deve ter no minimo 3 caracteres, digiti um nome adequado")
}                                                                             