let valor // não inicializar

valor = null
console.log(valor)
// console.log(valor.toString()) // Erro 


const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)


produto.preco = undefined // evite atribuir undefined
console.log (!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preco 
console.log(!!produto.preco) // teste: se produto.preco esta setado? irá dar falso
console.log(produto)