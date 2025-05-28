
const btnAdicionar = document.querySelector('#adicionar');
const conteudo = document.querySelector('#conteudo');

// Adiciona novo elemento ao DOM
btnAdicionar.addEventListener('click', () => {
  const novo = document.createElement('p');
  const btn = document.createElement('button')
  novo.textContent = 'Novo parágrafo ' + new Date().toLocaleTimeString() + ' ';
  novo.id = 'parágrafo ' + Math.random().toFixed(3)
  btn.textContent = "Deletar"
  novo.appendChild(btn)
  conteudo.appendChild(novo);
  RemoverElemento(btn, novo)
});