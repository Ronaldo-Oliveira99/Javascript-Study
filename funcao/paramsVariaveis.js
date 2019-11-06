function soma() {
    var soma = 0
    for(i in arguments){
        soma += arguments[i]
    }return soma
}

console.log(soma(2,2))
console.log(soma(3,3))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1.1,1.1,"Teste"))
console.log(soma('a','b','c'))