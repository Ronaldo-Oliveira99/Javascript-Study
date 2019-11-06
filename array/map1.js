const nums = [1,2,3,4,5]

let resultado = nums.map(function(e) {
    return e + 2
})
console.log(resultado)

let resultado2 = nums.map(e => e * 3)
console.log(resultado2)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2)}`
const resultado3 = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado3)