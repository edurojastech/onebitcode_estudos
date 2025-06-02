import { elementos } from './objElementos.js'
import { criarElement, setEstilos} from './arrow_function.js'

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