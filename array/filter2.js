Array.prototype.filter2 = function(callback){
    const newArray= []
    for (let i = 0; i< this.length; i++){
        if(callback(this[i], i , this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: "Borracha", preco:3.45, fragil: true},
    {nome:"Caderno", preco:13.90, fragil: true},
    {nome:"Kit de Lápis", preco:41.22, fragil: true},
    {nome:"Caneta", preco:7.50, fragil: false}
]
const caro = function(p){  // exemplo de função atribida 
    return p.preco < 10 
}
const caro2 = p => p.preco < 10  // funcao arrow

const fragil = function(p){
    return p.fragil
}

console.log(produtos.filter2(caro2).filter2(fragil))