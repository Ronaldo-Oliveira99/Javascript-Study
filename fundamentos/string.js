const escola = "Cod3r"

console.log(escola.charAt(0)) //
console.log(escola.charCodeAt(4)) // tabela unicode

console.log(escola.indexOf('4')) 

console.log(escola.substring(1))// imprim3 apartir do indice  
console.log(escola.substring(0,3))


console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3,'e'))
console.log(escola.replace(/\d/, 'e'))


console.log('Ana,Maria,Pedro')
console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/./))