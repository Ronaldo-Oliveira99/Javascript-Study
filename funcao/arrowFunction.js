let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito 
console.log(dobro(Math.PI))
console.log(dobro(9))

let ola1 = function(){
    return 'Olá 1'
}
ola2 = () => 'Olá 2'
ola3 = _ => 'Olá 3'   // possui param _

console.log(ola1())
console.log(ola2())
console.log(ola3())
