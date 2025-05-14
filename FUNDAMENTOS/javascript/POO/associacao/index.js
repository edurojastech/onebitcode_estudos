const Aluno = require('./Aluno')
const Curso = require('./Curso')
const Endereco = require('./Endereco')

const curso = new Curso('Desenvolvimento Web')
const endereco = new Endereco('Rua ABC', 23, 'Roosevelt', 'Ubá', 'SP')
const eduardo = new Aluno('Eduardo', curso, endereco)

console.log(eduardo)
console.log(eduardo.curso)
console.log(eduardo.endereco)