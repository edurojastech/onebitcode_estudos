// Array
const listaFrutas = [
  "Uva",
  "Banana",
  "Morango",
  "Abacaxi",
  "Laranja",
  "Ameixa",
];

// push() adiciona no final do array
listaFrutas.push("Kiwi", "Manga");
console.log(listaFrutas);

// unshift() adiciona no iníncio do array
listaFrutas.unshift("Cereja");
console.log(listaFrutas);

// pop() remove ultimo item
listaFrutas.pop();
console.log(listaFrutas);

// shift remove primeiro item
listaFrutas.shift();
console.log(listaFrutas);

// slice faz uma cópia de um pedaço do array original
const selecionados = listaFrutas.slice(0, 4);
console.log(selecionados);

// isArray() para validar se é um array - retorna um bolean true ou false
const validarArray = Array.isArray(listaFrutas) && "\nArray confirmado!\n";
console.log(validarArray);

// array.of(...) pra criar um array por meio de argumentos
const listaNomes = Array.of("Eduardo", "Sabrina", "Maisa", "Ace")
console.log(listaNomes)

// sort() ordena de forma alfabeticamente
listaNomes.sort()
console.log("\n", listaNomes)

// reverse() inverte a ordem dos elementos
listaNomes.reverse()
console.log("\n", listaNomes, "\n")

// join(separador) - junta elementos em uma string
const numeros = Array.of(1,2,3,4,5)
console.log(numeros.join(" + "))
