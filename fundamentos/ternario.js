// um operador constituido de 3 partes:
// Uma expressao que vai retornar V ou F 
// Retorno caso for V
// Retorno caso for F

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))