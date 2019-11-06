function MeuObjeto(){}
console.log(MeuObjeto.prototype) 
console.log(Object.__proto__ === MeuObjeto.prototype)  // false
console.log(Object === MeuObjeto.prototype)  // false


const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MeuObjeto.prototype === obj1.__proto__)  // true

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Objeto 2'
obj2.falar()

console.log(obj2)  // objeto em si
console.log(obj2.__proto__) // objeto em nivelo de prototipo

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

console.log(obj3)  // objeto em si
console.log(obj3.__proto__) // objeto em nivelo de prototipo

// Resumindo  a loucura....

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) // True -> Object . maximo
console.log(Function.prototype === Object.__proto__ )
console.log(Function.prototype.__proto__ === Function.prototype)


console.log(Object.prototype.__proto__)
console.log(Function.prototype.__proto__ )
console.log(Object.prototype)
console.log(Function.prototype)
console.log(Object.__proto__ )


console.log(new MeuObjeto)
console.log(MeuObjeto.__proto__)
