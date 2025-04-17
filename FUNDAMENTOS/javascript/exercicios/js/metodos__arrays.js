// METODOS DE ARRAYS
/*
  1) values() – Retorna um iterador que fornece os valores de 
  cada índice no array. Não recebe argumentos.
*/

const alunos = [
  { nome: "Eduardo Rojas", curso: "Prog Web" },
  { nome: "Sabrina Soares", curso: "Estética e Beleza" },
  { nome: "Betty", curso: "Admininstração"}
]
const iterador = alunos.values()

function iterForOf() {
  for(const value of iterador){
    const { nome, curso } = value
    console.log(`Aluno: ${nome} - cursando ${curso}`)
  }
}

function iterComMap() {
  console.log("\n === com método Map ===")
  alunos.map((aluno) => {
    const { nome, curso } = aluno
    console.log(`Aluno: ${nome} - cursando ${curso}`)
  })
}

iterForOf()
iterComMap()