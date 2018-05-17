const a = {name:'Teste'}

console.log('A: '+a)

const b = a

console.log('B: '+ b)

b.name = 'Opa'

console.log('B após renomear o nome: '+ a.name)

//o resultado será UNDEFINED pq não foi nada atribuido à variavel, ou seja, não foi inicializada
let valor
console.log(valor)

//null significa que ela não tem nenhum valor e não aponta para nenhum endereço de memoria
valor = null

const produto = {}
console.log(produto.preco)