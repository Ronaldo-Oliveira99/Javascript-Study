// variaveis tipo VAR declaradas dentro de blocos sao globais

var numero = 1

{
    var numero = 2
    console.log('dentro=', numero)
}
// variavel numero dentro do bloco ira sobreescrever unsando tipo VAR
console.log('fora=', numero)