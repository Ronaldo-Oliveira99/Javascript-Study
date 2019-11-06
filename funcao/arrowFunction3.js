let comparaComThis = function (param){
    console.log (this === param)
}

comparaComThis(global)
comparaComThis(module.exports)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


// em funcoes arrow, o this tem referencia local
let comparaComThisArrow = param => console.log (this == param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
