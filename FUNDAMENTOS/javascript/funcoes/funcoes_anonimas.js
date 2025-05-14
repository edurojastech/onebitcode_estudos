// funcao normal - declarada
function somar (a, b) {
  return a + b
}

// funcao op como anonima que faz referencia a função 'somar'
const op = somar
console.log(op(2,6))

// funcao anonima
const sayMsg = function (msg) {
  return msg
}

console.log(sayMsg('ThunderBolts*'))