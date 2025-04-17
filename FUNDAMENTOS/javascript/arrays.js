// trabalhando com arrays ou vetores - JS
const alunos = ["Ronaldo", "João", "Sabrina", "Sabrina"];
adicionarNoInicio("Eduardo", "Rafael", "Betty")

const busca = "Eduardo";
const inclui = alunos.includes(busca);
inclui ? pesquisa() : console.log("Dado nao encontrado!");

const alunosSelecionados = Array.of(...alunos.slice(0,3))

// ====== FUNCOES ======
function pesquisa() {
  let achados = [];
  alunos.forEach((element) => element == busca && achados.push(element));
  console.log(`
    Foram encontrados ${achados.length} registros!
    Informação de busca foi: ${busca}
    Resultado: ${!achados.length == 0 ? achados : "Sem dados!"}
  `);
}

function adicionarNoInicio(...novosAlunos) {
  novosAlunos.forEach((alunoNovo) => {
    alunos.unshift(alunoNovo);
  });
  console.log(alunos);
}

console.log(alunosSelecionados)