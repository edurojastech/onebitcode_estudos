// const getPosts = localStorage.getItem('Postagens')
const autorEdu = new Author('Eduardo Rojas')
const autorSabrina = new Author('Sabrina')
const post01 = new Post(
  'O que é SQL para Banco de Dados',
  'https://url-img.com',
  autorEdu.nome  
)
post01.addComents(new Comment('Juan', 'Comentario teste 01'))
post01.addComents(new Comment('Ana', 'Comentario teste 02'))

const post02 = new Post(
  'POO com JS',
  'https://url-img2.com',
  autorSabrina.nome
)
post02.addComents(new Comment('Ana', 'Comentario do post02'))


function InserirDados() {
  const form = document.forms.namedItem('postForm')
  const { nameAuthor, descPost } = form.elements
  const author = new Author(nameAuthor.value)
  const post = new Post(
    descPost.value,
    'https://url-img.com',
    author.nome  
  )

  author.addPosts(post)
  author.savePosts()
}
