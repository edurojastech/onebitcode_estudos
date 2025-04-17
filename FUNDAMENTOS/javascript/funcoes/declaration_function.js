// ============ Exemplos de Function declaration - declaração de função =======
function ItemDate(item) { // com parâmetro
  if(item){
    return item < 10 ? "0" + item : item;
  }else{
    return '00'
  }
}

function DataHoje() {
  let date = new Date();
  let dia = date.getDate();
  let mes = date.getMonth() + 1;
  let ano = date.getFullYear();

  // usando a função ItemData para retornar um dado da data formatada
  console.log(`${ItemDate(dia)}/${ItemDate(mes)}/${ano}`);
}

DataHoje();
//==================================== END ====================================