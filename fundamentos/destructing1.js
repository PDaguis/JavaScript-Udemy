const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco:{
        logradouro: "Rua ABC",
        numero: 239,
        complemento: "Casa"
    }
} 

// AS CHAVES REPRESENTAR O OPERADOR DE DESESTRUTURAÇÃO(DESTRUCTURING), SERVE PARA TIRAR ALGO DENTRO DA ESTRUTURA
//TIRA DE DENTRO DO OBJETO PESSOA, OS ATRIBUTOS NOME E IDADE
const { nome, idade } = pessoa

console.log(nome, idade)

const {nome: n, idade: i} = pessoa

console.log(n, i)

const {endereco: {logradouro, numero, cep}} = pessoa

console.log(logradouro, numero, cep)