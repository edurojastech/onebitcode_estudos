const x = 10
const z = "10"
const y = 10

const compara1 = x == y   // true - compara valores iguais menos o tipo
const compara2 = x === y  // true - compara valores iguais e o tipo são iguais
const compara3 = x == z   // true - compara valores iguais menos o tipo
const compara4 = x === z  // false - compara valores iguais e o tipo são iguais

console.log(compara1)
console.log(compara2)
console.log(compara3)
console.log(compara4)