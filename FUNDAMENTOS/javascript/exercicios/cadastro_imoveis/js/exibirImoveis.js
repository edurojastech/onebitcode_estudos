// MOSTRAR IMOVEIS
function imoveisRegistrados (imoveis) {
  let listarImoveis = ''
  imoveis.forEach(element => {
    const {nomeDono, qtdeQuartos, qtdeBanheiro, possuiGaragem} = element
    listarImoveis += `
      ==============================
      Dono: ${nomeDono}, 
      Quartos: ${qtdeQuartos},
      Banheiros: ${qtdeBanheiro},
      Tem Garagem: ${possuiGaragem}
      ==============================
    `
  })

  document.getElementById('imoveis').innerText = `
    ========= IMOVEIS CADASTRADOS =========
    ${listarImoveis}
  ` 
}