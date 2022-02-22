//Data do Evento
let data = 25/03/2022
if (data< 02/02/2022) {
    console.log("Data Invalida A data do Evento deve ser posterior a data atua")
} else {
    console.log("A Data está Valida")
}
//Palestrantes do Evento    
var listaDePalestrantes = ["Caique ","Yashmin"]
if(listaDePalestrantes.length < 3){
    console.log("O Palestrante pode ser cadastrado")
} else {
    console.log("O número de Palestrantes já foi excedido")
}
//Nomes do palestrante
let nomePalestrante = "Michael"
if(nomePalestrante.length > 5){
    console.log("O nome está adequando para o cadastro")
} else{
    console.log("Nome Invalido, O nome deve conter pelo menos 5 caracteres")
}
//Informação da Idade do participante
let idadeParticipante = "18"
if(idadeParticipante.length < "28"){
    console.log("Idade apropriada para o Evento")
} else {
    console.log("Menor de Idade, só pode criar, palestrar e participar do Evento maiores de 18 anos")
}
//quantidades/nome de participantes
var quantidadesDeParticipante = ['Emilia','Naruto','Son-Goku','Mario','Yoshi',"Simon",'David','Izaky','karuzo','Merry','Micasa','Gabriela','Jhully','Israel']
if(quantidadesDeParticipante.length < 100){
    console.log('Ainda a vagas para o Evento')
}else{
    console.log("O limite de participantes ja foi atingido, cadastro cancelado")
}
let nomeDoParticipante = "Ednaldo"
if(nomeDoParticipante.length > 5){
    console.log("O nome foi cadastrado com sucesso!!!")
} else{
    console.log("Nome Invalido, O nome deve conter pelo menos 5 caracteres")
}