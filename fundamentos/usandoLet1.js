// Variaveis do tipo LET tem escopo mais abrangente em bloco. (local) 
var numero = 1
{
    let numero = 2   // nao ira sobreescrever
    console.log('dentro=', numero)
}

console.log('fora=', numero)