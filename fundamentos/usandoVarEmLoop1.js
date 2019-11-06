
for(var i=0; i<10;i++){
    console.log(i)
}

console.log('i=', i) // devido ao escopo global não acontecerá erros. 



// Utilizando o Let
for(let j = 0;j<10;j++){
    console.log(j)
}

console.log('j=', j) // Implicara em erro devido ao let ter escopo local 