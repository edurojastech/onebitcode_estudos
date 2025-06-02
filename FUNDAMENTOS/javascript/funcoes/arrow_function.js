import { elementos, estilos } from "./objElementos.js"

// ==== Exemplos com arrow function (função seta) ====
// apenas um retorno ou linha pode removar as chaves {}
// 

// em bloco com mais de uma linha de codigo e função com parâmetro padrão
const sayName = (name = 'Fulano') => {
  let msg = `Hello my friend ${name}!`
  return msg
}

const criarElement = (parent, typeElement, contentElement, idElement) => {
  const element = document.createElement(typeElement)
  element.innerHTML = contentElement
  element.id = idElement
  parent.appendChild(element)
}

const addStyleElement = (idElement, style, styleDesc) => {
  return document.getElementById(idElement).style[style] = styleDesc
}

const setEstilos = (id, styles) => {
  for (const key in styles) {
    addStyleElement(id, key, styles[key])
  }
}

elementos.forEach(objElemento => {
  criarElement(
    objElemento.parent,
    objElemento.typeElement,
    objElemento.contentElement,
    objElemento.idElement
  )
});

setEstilos('titulo', estilos)
setEstilos('texto', estilos)
setEstilos('lista', estilos)