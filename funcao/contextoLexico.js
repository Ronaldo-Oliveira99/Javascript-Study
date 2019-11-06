// contexto lexico refere-se ao contexrto onde as funcoes foram originadas

const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()  // execulta os valores declarados no contexto mais abrangente.