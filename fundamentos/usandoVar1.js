{{{{var sera = 'Será?'}}}}  // blocos fora de funçoes são de escopo global.

// pode ser imprimido (chamado) fora da funcao
console.log(sera)


// variaveis tipo VAR dentro de um escopo de funcao nao podem ser alterados fora de ste escopo
function teste(){
    var local = 123
    console.log(local)
}

teste()
