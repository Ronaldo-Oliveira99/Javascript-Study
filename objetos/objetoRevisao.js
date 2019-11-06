//// Objeto é uma coleção dinamica de pares chave /valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220 

console.log(produto)
delete produto.preco // deleta um atributo 
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Ronaldo Luiz',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 19
    },{
        nome: 'Angelina',
        idade: 42
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

console.log(carro)
carro.proprietario.endereco.numero = 1010
carro['proprietario']['endereco']['logradouro'] = 'Rua do rocio'

delete carro.proprietario.endereco   // deletando um atributo 
delete carro.calcularValorSeguro
delete carro.condutores
console.log(carro)