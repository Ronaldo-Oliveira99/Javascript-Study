// function declaration 
console.log(soma(3,3))
function soma(x , y){
    return x + y
}
// function expression
const sub = function( x, y){
    return x - y
}
// named function expression
const mult = function mult (x , y){
    return x * y
}

console.log(sub(3,3))
console.log(mult(3,3))