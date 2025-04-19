let minhaNamorada = null;
minhaNamorada = "Sabrina";

if (!minhaNamorada) {
  console.log("Sem namorada!");
} else if (minhaNamorada == "Sabrina") {
  console.log("Namoro a Sabrina, mulher mais linda desse mundo :) \n");
}

// if else ternário
const promocao = true;
const estaEmPromocao = promocao ? "TUDO EM PROMOÇÃO!" : "SEM PROMOÇÃO!";
console.log(estaEmPromocao);

const pizzas = [
  "Italiana",
  "Portuguesa",
  "4 Queijos",
  "Doce - chocholate",
  "Strognof",
];

const pizza = "Strognof"

// if simplificado &&
for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i] == pizza ) {
      console.log(`\n Voce escolheu a pizza: ${pizza} \n`)
      break
    }
      
}

const idade = 34

if(idade > 18) {
  console.log('Adulto')
}
else if (idade > 12) {
  console.log('Adolescente')
}
else if (idade > 4) {
  console.log('Criança')
}
else {
  console.log('Bebê')
}