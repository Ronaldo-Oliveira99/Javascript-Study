function  rand ([min=0, max=10]){
    if (min > max) [min, max] = [max, min]
    valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([5,7]))
console.log(rand([7]))
console.log(rand([,10]))

String.fromCharCode()