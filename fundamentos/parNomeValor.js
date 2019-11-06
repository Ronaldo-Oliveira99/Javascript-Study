// par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec(){
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
}

var exec2 = function(){             // outra criacao de funcao
    const saudacao2 =  'Epaaa'
    return saudacao2
}

exec3 = (saudacao3 ='oxxii')=> {  // exemplo do tipo de funcao arrow
    return saudacao3
} 


// Objetos são grupos aninhados de  pares nome//valor
const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito bom',
        numero: 123

    }
}

console.log(saudacao)
console.log(exec3())
console.log(cliente)