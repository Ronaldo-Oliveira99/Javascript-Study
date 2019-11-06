class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar() {
        console.log(`Olá meu nome é ${this.nome}`)
    }

}
const p1 = new Pessoa('Ronaldo')
p1.falar()


const criarPessoa = (nome) => {
    return{
        falar: () => console.log(`Meu none é ${nome}`)
    }
}
const p2 = criarPessoa('Ronald ')
p2.falar()