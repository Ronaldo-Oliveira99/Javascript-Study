const pessoa = {
    saudacao: "Bom dia !",
    falar (){
        console.log(this.saudacao)
        console.log("Bom dia com falar() ")
    }
}

pessoa.falar() // depende de (pessoa) para mostrar
const dizer = pessoa.falar
dizer()  // retorna undefined pq o this não está resolvido

const agoraFala = pessoa.falar.bind(pessoa) // o bind resolve o this para o objeto(pessoa)
agoraFala()
