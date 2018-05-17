const valores = [7, 8, 9, 10]

console.log(valores[1])
console.log(valores[0])

//verifica quantos elementos existem no array (LENGTH)
console.log('Qtd de elementos: '+valores.length)

//adiciona elementos no array (PUSH)
valores.push(25)
valores.push(false, null, 'teste')
console.log(valores)

//função que traz o último elemento do array
console.log(valores.pop())

//função (delete) que exclui um elemento do array com base no indice
console.log(valores)
delete valores[0]
console.log(valores)

//mostra o tipo de dado 
console.log(typeof valores)