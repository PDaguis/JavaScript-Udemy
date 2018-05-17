//FUNÇÃO SEM RETORNO
//EM FUNÇÃO NÃO PRECISA DECLARAR VAR, LET, CONST NO PARAMETRO
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//COM RETORNO
function soma(a, b = 0){
    return a + b
}

console.log(soma(10, 5))
console.log(soma(2))