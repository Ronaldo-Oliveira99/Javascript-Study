// Funãoo em JS First-Class Object (citizens)
// Higher-order function

// criar de forma literal 
function fun1(){ }

// Armazenae em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))


// Armazenar em umm atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log( obj.falar())

// Passar funçãoo como parametro

function run (minhaFuncao){
    minhaFuncao()
}

run (function(){return console.log("Estou aprendendo JvaScript")})

// Uma função pode retornar/conter uma função

function soma(a,b){
    return function(c){
         console.log(a+b+c)
     }
}
soma (2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)