const pessoa ={
    nome: 'Rebeca',
    idade: 2, 
    peso: 13
}

console.log(Object.keys(pessoa)) // mostra apenas os atributos da chave
console.log(Object.values(pessoa)) // mostra os valores
console.log(Object.entries(pessoa)) // mostra as entradas em um array separado

Object.entries(pessoa).forEach(([chave, valor]) => { // destrutura a chave/valor
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa,'sexo',{ // adiciona um atributo ao objeto
    enumerable: true,  // listado 
    writable: false,   // sobreescrever
    value: 'Feminino'  // valor do atributo

})
pessoa.sexo = 'Masculino'
console.log(pessoa)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) // artibui valores de outros objetos

Object.freeze(obj) // congela o objeto 
obj.c = 1234
console.log(obj)