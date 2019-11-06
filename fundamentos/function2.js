// armazenando uma função em uma variável 

const imprimirSoma = function(a,b){

    console.log(a+b)
    console.log(a*b)
}

imprimirSoma(3,3)

// Armazenando uma funcao arrow wm uma variável 
const soma = (a,b) => {
    return (a+b)}
console.log(soma(3,12))

// retorno implicito 
const soma2 = (a,b) => (a+b)
console.log(soma(12,12))

const impimir = a => console.log(a)
impimir("Legalll!!!!")