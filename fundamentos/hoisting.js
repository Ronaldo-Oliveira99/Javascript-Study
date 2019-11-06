// utilizando VAR as variaveis nao declaradas , sao icadas para o top
console.log('a=', a) //retorna undefinied
var a = 2
console.log('a=', a)


// Com LET nao é possível fazer hoisting

console.log('b=', b)
let b = 3  // acarreta em erro deviso a utilizaçao do tip LET
console.log('b=', b)