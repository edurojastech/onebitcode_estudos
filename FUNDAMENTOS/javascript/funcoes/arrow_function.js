// ==== Exemplos com arrow function (função seta) ====

// apenas um retorno ou linha pode removar as chaves {}
const fomatarPalavra = (palavra = 'HELLO!') => palavra.toLowerCase()
console.log(fomatarPalavra())

// em bloco com mais de uma linha de codigo e função com parâmetro padrão
export const sayName = (name = 'Fulano') => {
  let msg = `Hello my friend ${name}!`
  return msg
}

