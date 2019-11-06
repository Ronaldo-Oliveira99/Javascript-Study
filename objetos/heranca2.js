// Cadei de protótipos (prototype chain)
Object.prototype.attr0 = '0'

const avo = {attr1:'A'}
const pai = {__proto__:avo, attr2:'B', attr3:'3'}
const filho = {__proto__:pai, attr3:'C'}
console.log(filho.attr, filho.attr1,filho.attr2,filho.attr3)

const carro = {
    velAtual: 0,
    velMax:220,
    acerelarMais(delta){
        if(this.velAtual + delta < this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari ={
    modelo: 'F450',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //super herda uma funcao do prototipo carro
    }
}

Object.setPrototypeOf(ferrari, carro)  // Define ferrari como um prototipo de carro 
Object.setPrototypeOf(volvo, carro)// Define volvo como um prototipo de carro 

console.log(ferrari)
console.log(volvo)

volvo.acerelarMais(100)
console.log(volvo.status())


ferrari.acerelarMais(300)
console.log(ferrari.status())