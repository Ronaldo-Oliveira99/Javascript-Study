// novo recurso do ES2015

const pessoa = {
    nome: 'Ronaldo',
    idade: 35,
    endereco:{
        logradouro:'Rua Bela Vista',
        numero: 96
    }
}

const {nome, idade} = pessoa
console.log(idade, nome)

const{nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, estadocivil = 'solteiro'} = pessoa
console.log(sobrenome, estadocivil)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const {conta:{ag, num} = pessoa}
console.log(ag, num)