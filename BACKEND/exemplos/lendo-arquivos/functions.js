const fs = require("fs")
const path = require("path")

function lerDiretorio (src) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(src)
      arquivos.map(arquivo => path.join(src, arquivo))
      resolve(arquivos)
    } 
    catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  lerDiretorio
}