//filter -> filtrar alguns elementos do total do array

const produtos = [
    {nome: "Borracha", preco:3.45, fragil: true},
    {nome:"Caderno", preco:13.90, fragil: true},
    {nome:"Kit de Lápis", preco:41.22, fragil: true},
    {nome:"Caneta", preco:7.50, fragil: false}
]

//const caro = produto => produto.preco >= 10
const caro = function(p){
    return p.preco < 10 
}
const fragil = function(p){
    return p.fragil
}

console.log(produtos.filter(caro).filter(fragil))