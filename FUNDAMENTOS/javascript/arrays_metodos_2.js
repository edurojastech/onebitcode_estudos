// Array
const listaFrutas = [
  "Uva",
  "Banana",
  "Morango",
  "Abacaxi",
  "Laranja",
  "Uva",
  "Ameixa",
];

// Métodos de iteração e transformação

// forEach() - Itera sobre cada item.
listaFrutas.forEach(fruta => {
  console.log(fruta)
})

// filter() Cria novo array apenas com itens que passam na validação.
const filtrado = listaFrutas.filter(fruta => fruta == "Uva")
console.log(filtrado)


const usuarios = [
  { nome: "Eduardo", idade: 25 },
  { nome: "Carlos", idade: 30 },
  { nome: "Ana", idade: 22 }
]
/*  
  map()  cria um novo array com os resultados da 
  função que você passa pra cada elemento do array original. 
*/
const usuariosNomes = usuarios.map(usuario => usuario.nome) // usando arrow function
console.log(usuariosNomes)

// concat() junta dois arrays
const arrays = listaFrutas.concat(usuariosNomes)
console.log(arrays)