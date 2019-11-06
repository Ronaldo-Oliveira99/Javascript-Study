function teste(num) {
    if(num > 7) // sem chaves, somente lê uma linha de sentenca
    console.log(num)
    console.log('final') // esta linha nao vai pertencer ao if
}

// teste(6)
// teste(8)

function teste2(num2){
    if(num2 > 7);{  // cuidado com o';', nao usar comestruturar de controle
        console.log(num2) 
    }
}

teste2(6)
teste2(8)