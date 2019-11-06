console.log(Math.ceil(7.1))

const obj1= {}       // com notacao ponto
obj1.nome = 'bola'

const obj2 = {}     // sem notacao ponto
obj2['nome']= 'bola8'

console.log(obj1.nome)
console.log(obj2.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Executando...')
    }
    this.calculo = (a,b) =>{
       console.log(a+b)
    }
}

var obj3 = new Obj('Cadeira')
var obj5 = new Obj ('Ronaldo Luiz')
console.log(obj3.nome)
console.log(obj3)
obj5.exec()
obj3.exec()
obj5.calculo(6,9)
