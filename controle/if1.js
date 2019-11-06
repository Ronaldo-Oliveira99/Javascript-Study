function soBoaNoticia(nota){
    if (nota >= 7){
        console.log('Aprovado com ', nota)
    } 
}

soBoaNoticia(6.0)

function seForVerdadeEuFalo(valor){
    if (valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()  // nao retorna false
seForVerdadeEuFalo('?') // faz retorno de valor true
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(5)