const funcs = []

for (let i =0; i<10; i++){
    funcs.push(function(){
        console.log(i)

    })
}
// let tem um escopo de bloco , prevervando o seus valores locais

funcs[2]()  // imprimime o valor local da variavel em LET
funcs[8]()