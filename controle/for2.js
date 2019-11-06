// aplicacao de FOR IN em array
const notas = [7.1, 7.7,8.3,8.9,9.5]
for (indice in notas){
    console.log(`Notas em Array: ${notas[indice]}`)
}

// aplicacao de FOR IN em objeto 
const pessoa = {
    nome: 'Ronaldo',
    sobrenome: 'Luiz',
    idade: 35,
    peso: 75

}

for( let atrib in pessoa){
    console.log(`${atrib} = ${pessoa[atrib]}`)
}