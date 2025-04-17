/*
  ======== E (AND) operador "&&" ========
  Só é verdadeiro se ambas as partes foram verdadeiras
  p ==== q ==== p^q
  T ==== T ==== T   => true && true === true    
  T ==== F ==== T   => true && false === false
  F ==== T ==== T   => false && true === false
  F ==== F ==== F   => false && false === false
*/

console.log("Usando Operador Lógico &&")
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(8 < 10 && 5 >= 5)
console.log("ana" == "ana" && 9 === '9')

/*
  ======== Ou (OR) operador "||" ========
  Só é false se ambas as partes foram falsas
  p ==== q ==== p^q
  T ==== T ==== T   => true || true === true    
  T ==== F ==== T   => true || false === true
  F ==== T ==== T   => false || true === true
  F ==== F ==== F   => false || false === false
*/
console.log("Usando Operador Lógico ||")
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(8 < 120 || 22 >= 5)
console.log("oi" == "tim" || 9 === '9')