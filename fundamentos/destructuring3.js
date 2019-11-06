// criar funcao -> operador destructuring({intervalo}) -> variarl ->
// obj math -> funcao random -> (intervalo)
// retorna obj math floor da variavel


function rand ({min=0, max=1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50 , min:  40}
console.log(rand(obj))

console.log(rand({min:1990, max:2000}))

