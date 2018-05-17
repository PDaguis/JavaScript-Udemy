//ARMAZENANDO UM FUNÇÃO NUMA VARIAVEL
const imprimirSoma = function(a, b){
    console.log(a+b)
}
imprimirSoma(5, 5)

//ARMAZENANDO UMA FUNÇÃO ARROW NUMA VARIAVEL. (=>) SUBSTITUI A PALAVRA FUNCTION
const soma = (a, b) =>{
    return a + b
}
console.log(soma(2, 3))

//RETORNO IMPLÍCITO
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))