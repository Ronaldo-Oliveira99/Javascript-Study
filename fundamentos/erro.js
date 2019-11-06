function tratarErroELancar(erro){
    throw{
        nome: erro.name,
        msg:erro.menssage,
        date: new Date
    }
}


function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(b) {  // se acontecert um erro 
        tratarErroELancar(b)  // ira chamar essa funcao
        
    } finally{
        console.log('final')
    }
}
const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)