function cadastrar (imoveis) {
  alert('Abrindo programa de cadastro...')
  imoveis.push(
    {
      nomeDono: prompt('Nome do dono(a): '),
      qtdeQuartos: prompt('Quantidade quartos: '),
      qtdeBanheiro: prompt('Quantidade banheiros: '),
      possuiGaragem: prompt('Possui garagem S-Sim N-Não') == 'S' ? 'Sim' : 'Não',
    }
  )
}