function compras(trabalho1, trabalho2){
    // operador para satisfazer pelo menos uma condição
    const comprarSorvete = trabalho1 || trabalho2
    // operador para satisfazer as duas condições
    const comprarTV50 = trabalho1 && trabalho2
    // operador para satisfazer 1 condicao apenas
    const comprarTV32 = trabalho1 != trabalho2
    // operador para negar 2 condicoes(negacao logica) para satisafzer a condicao
    const manterSaudavel = !comprarSorvete
    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))