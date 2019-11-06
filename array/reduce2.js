
const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
    ]


    console.log("Desafio 1 : Todos os alunos são bolsistas ?")
    const bolsavf = (result,bolsista) => result && bolsista
    console.log(alunos.map(a => a.bolsista).reduce(bolsavf))

    console.log("Desafio 2 : Algum aluno é bolsista ?")
    const algumBolsista = (result, bolsistas) => result || bolsistas
    console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

    console.log("Quais alunos são bolsistas?")
    const bolsa1 = a => a.bolsista
    const nomeB = a => a.nome
    const nomeBolsista = alunos.filter(bolsa1).map(nomeB)
    console.log(`Alunos Bolsistas: ${nomeBolsista}`)
