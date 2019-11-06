// forjar uma metodo para concatenar com MAP
const escola = [{
    nome: ' Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.1
    },{ nome: 'Ana',
        nota:  9.3
    }]
},{
    nome:'Turma M2',
    alunos:[{
        nome:' Rebeca',
        nota: 8.9
    },{
        nome: ' Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNOtasdaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNOtasdaTurma)
console.log(notas1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMAp = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMAp(getNOtasdaTurma)
console.log(notas2)