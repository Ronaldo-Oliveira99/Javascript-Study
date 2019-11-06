function getInteirooEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -2) {
    opcao = getInteirooEntre(-2, 10)
    console.log( `Opcao escolhida foi ${opcao}.`)
}
console.log('Ate a Proxima')
