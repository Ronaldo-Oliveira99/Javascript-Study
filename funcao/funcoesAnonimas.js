// exemplos de criação de funções aninimas. 
const soma = function (x,y){
    return x + y 
}

const imprimirResultado = function (a, b, operacao1 = soma){
    console.log(operacao1(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
// definindo uma funcao dentro de uma chamadaq de uma funcao. 
imprimirResultado(3,4, function(x,y){  
    return x - y
})
//difinindo uma funcao arrow dentro de uma chamada de funcao.
imprimirResultado(3,4,(x,y)=> x*y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
pessoa.falar()