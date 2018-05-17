//OBJETO JAVASCRIPT NÃO É A MESMA COISA QUE JSON
//JSON É UM FORMATO TEXTUAL
// O PAR DE CHAVES {} REPRESENTA UM OBJETO
//UM OBJETO EM JS É UMA COLEÇÃO DE CHAVE E VALOR 

//criação de objeto
const prod1 = {}

//atribui dados ao objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4900

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

//EXEMPLO DE JSON (É TEXTO)-> NÃO É A MESMA COISA QUE OBJETO
'{ "nome": "Camisa Polo", "preco": 79.90"}'
