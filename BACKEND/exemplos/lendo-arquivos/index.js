const fn = require("./functions")
const path = require("path")
const srcPastas = [
  'legendas'
]

const setCaminhos = pasta => path.join("__dirname", "..", pasta)
srcPastas.forEach(item =>
  fn.lerDiretorio(setCaminhos(item))
    .then(resp => {
      console.log(resp)

      const tste = resp.filter(item => item.endsWith('.txt'))
      console.log(tste)
    })
)