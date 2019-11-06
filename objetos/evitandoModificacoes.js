// funcoes para evitar a modificação de codigos e objetos


// nao permite adicionar novos atributos em um objeto 
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99 , tag: 'Promoçao'
})

console.log('extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Boracha branca'
delete produto.tag
console.log(produto)

// Object.seal  ( nao permite adicionar e )
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// object.freeze = selado + valores constantes
