// Estilos de escritas de códigos 
// Imperativos 
alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]
totalNotas = 0
for (var i = 0 ;i < alunos.length; i++){
    totalNotas += alunos[i].nota
}
console.log( totalNotas / alunos.length)

// declarativo  
const getNota = a => a.nota
const soma = (nota1 , nota2) => nota1 + nota2
const totalNotas2 = alunos.map(getNota).reduce(soma)

console.log(totalNotas2 / alunos.length)
