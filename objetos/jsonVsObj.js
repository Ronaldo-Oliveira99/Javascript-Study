const obj = {a:1, b:2, c:3 , soma (){return a + b + C } }
console.log(JSON.stringify(obj))  // passar um objeto para um formato JSON

console.log(JSON.parse('{"a":1, "b":2, "c":3}')) // passando para um objeto em JS
console.log(JSON.parse('{"a":1, "b":"string", "c":true, "d": {},"e": []}'))