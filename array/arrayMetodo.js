const pilotos = ['Vettel' , 'Alonso' , 'Raikkonem' , 'Massa']
pilotos.pop() // retira o ultima posição
console.log(pilotos)

pilotos.push('Verstappen') // adiciona em elemento na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)

// spilce pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // primeiro atributo adiciona, segundo remove
console.log(pilotos)

pilotos.splice(3, 1) // sai a 3 indice (massa) e sai apenas 1
console.log(pilotos)

// slice faz um novo array
const algunsPiloto1 = pilotos.slice(2) // novo array apartir a 2 posicao
console.log(algunsPiloto1)

const algunsPiloto2 = pilotos.slice(1, 4) // novo array de 1 ate a 3 (4limite)
console.log(algunsPiloto2)
