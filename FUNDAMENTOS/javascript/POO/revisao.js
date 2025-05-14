// Forma atual de criar objetos
class Pessoa {
  constructor(nome, idade = 10, sexo = 'M', pj = false) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.pj = pj
  }

  apresentar() {
    console.log(`Oi meu nome é ${this.nome} e tenho ${this.idade}`);
  }
}

// Forma antiga de criar Objetos com JS
function Livro(nome, pages, autor, tags) {
  this.nome = nome;
  this.pages = pages;
  this.autor = autor;
  this.tags = tags;
  this.qtdeEstoque = 0;
  this.addEstoque = (qtde) => {
    this.qtdeEstoque += qtde;
  };
}

const tags = [
  "Desenvolvimento Pessoal",
  "Autoconhecimento",
  "Inteligencia Emocional",
]
const pessoaTeste = new Pessoa("Eduardo Rojas", 22);
const livroTeste = new Livro("Mais Esperto que o Diabo", 345, "Napoleon Hill", tags);
livroTeste.addEstoque(34)
livroTeste.addEstoque(100)
console.log(pessoaTeste);
console.log(livroTeste);
