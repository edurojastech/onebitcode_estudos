// uso do reduce
const alunos = [
  { nome: "Eduardo Rojas", curso: "Programação Web", categoria: 'Tecnologo' },
  { nome: "Sabrina Soares", curso: "Estética e Beleza", categoria: 'Bacharelado' },
  { nome: "Betty Carolina", curso: "Admininstração", categoria: 'Licenciatura' } ,
  { nome: "Rafael Silva", curso: "Sistema da Informação", categoria: 'Licenciatura' }
]


const porCategorias = alunos.reduce((acumulador, aluno) =>{
  if(acumulador[aluno.categoria]){
    acumulador[aluno.categoria].push(aluno)
  } else {
    acumulador[aluno.categoria] = [aluno]
  }

  return acumulador
}, {})

console.log(porCategorias)
console.log(porCategorias.Tecnologo)
// console.log({
//   Bacharelado: alunos.filter(aluno => aluno.categoria === 'Bacharelado')
// })
