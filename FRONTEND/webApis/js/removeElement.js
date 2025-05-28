function RemoverElemento (btn, elemento){
  btn.onclick = () => {
    document.getElementById(elemento.id).remove()
  }
}