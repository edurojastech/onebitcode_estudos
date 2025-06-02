const fomatarPalavra = palavra => palavra ? palavra.toUpperCase() : 'Sem dado!'

const elementTexto = {
  contentElement: fomatarPalavra('VeroVero recusandae cum accusantiumua.Vero recusandae cum accusantiumua.Vero recusandae cum accusantiumua.  recusandae cum accusantiumua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae cum accusantiumua.'),
  parent: document.body,
  typeElement: 'p',
  idElement: 'texto'
}

const elementLista = {
  contentElement: fomatarPalavra('Item01 <br /> Item02 <br /> Item03 <br />'),
  parent: document.body,
  typeElement: 'p',
  idElement: 'lista'
}

const elementTitle = {
  contentElement: fomatarPalavra('Criando elementos com JS'),
  parent: document.body,
  typeElement: 'h1',
  idElement: 'titulo'
}

// objeto de estilos
const estilos = {
  backgroundColor: 'tomato',
  width: '50%',
  height: 'auto',
  borderRadius: '10px',
  padding: "30px 10px",
  color: '#fff',
  fontFamily: 'Arial',
  textAlign: 'center',
  margin: '20px auto',
}

const elementos = [elementTitle, elementTexto, elementLista]
export {
  elementos,
  estilos
}