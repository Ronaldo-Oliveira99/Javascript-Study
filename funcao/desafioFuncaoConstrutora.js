// mudar para uma funcao construtora
function Pessoa(nome){
    this.nome = nome
    
    this.falar = function(){ console.log(`meu nome ${nome}`)
    }
}
const p1 = new Pessoa('jao')
p1.falar()

