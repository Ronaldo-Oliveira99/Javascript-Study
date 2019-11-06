function imprimirSoma(a,b){     // criacao de uma funcao sem retorno
console.log(a + b)
console.log(a * b)
console.log(a / b)
}

imprimirSoma(3,3) 

// Funcao com retorno 

function soma(a, b=0){  // b=0 tratamento de erro, se caso nao digitar nenhum numero
    return(a*b)
}

console.log(soma(3,3))