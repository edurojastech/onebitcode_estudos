/*
  Escreva um programa em javascript que funcione como um cadastro de imóveis e 
  atenda aos seguintes requisitos:
    Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
    O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados. 
    O menu deve ter a opção de salvar um imóvel.
    O menu também deve ter a opção de mostrar todos os imóveis salvos.

    Para salvar um novo imóvel o programa deve pedir as seguintes informações:
      Nome do proprietário. 
      Quantidade de quartos. 
      Quantidade de banheiros. 
      Se possui garagem.
*/

let sair = false;
let opcao = null;
let imoveis = [];

do {
  opcao = prompt(`
    ========= CADASTRO DE IMOVEIS =========

    Quantidade já cadastrados: ${imoveis.length}
    Escolha uma opção: 
      1 => Cadastrar imovel
      2 => Mostrar os imoveis cadastrados
      3 => Sair do menu

  `)
  if (opcao == "3" || opcao == "" || opcao.length == 0) {
    alert("Saindo...");
    sair = true;
  } else if (opcao == 1) {
    cadastrar(imoveis);
  } else {
    imoveisRegistrados(imoveis);
    sair = true;
  }
} while (sair == false);
