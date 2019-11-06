let a = 3  // variavel let fica local , nao é exportada

global.b = 123   // global em node = window browser -> variavel no escopo global

this.c = 456
this.d = false
this.e = 'teste'

// this === module.exports -> retorna um objeto para fora do escopo
console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(this === module.exports) // equivalente

abc = 234   // sem var e let, variavael pode causar problemas no codigo
console.log(global.abc)  