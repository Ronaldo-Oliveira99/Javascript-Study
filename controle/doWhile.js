function getNumeroRandom(min , max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -2

do{    // executa o bloco primeiro para depois verificar a negacao 
    opcao = getNumeroRandom(-2 , 10)
    console.log(`A opcao escolhida foi ${opcao}.`)
}while( opcao != -2)

console.log('Intéé')