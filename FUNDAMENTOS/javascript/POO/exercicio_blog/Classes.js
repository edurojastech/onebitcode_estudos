/*
Simulando um Blog com Classes

Crie uma aplicação javascript que simule um funcionamento básico de blog 
utilizando classes e associações.

Você deverá criar uma classe Post e uma classe Comment, onde uma instância de 
Post poderá receber vários comentários. As instâncias de Post também devem ter 
um método específico para adição de comentários nelas.

Você também deverá criar uma classe Author, e os objetos da classe Post também 
devem possuir um objeto da classe Author, que é o autor do post. Além disso, os 
objetos da classe Author também devem possuir um array de posts (objetos da classe Post) 
e um método específico para criação de posts, 
que deverá criar uma instância utilizando aquele próprio autor, incluir o post 
no array e então retornar o post criado.
*/

class Post {
  constructor(description, imgUrl, author) {
    this.author = author
    this.description = description
    this.imgUrl = imgUrl
    this.comments = []
  }

  addComents(comment) {
    this.comments.push(comment)
  }
}

class Comment {
  constructor(author, comment) {
    this.author = author
    this.comment = comment
  }
}

class Author {
  constructor(nome) {
    this.AllPosts = JSON.parse(localStorage.getItem('Postagens'))
    this.nome = nome
    this.posts = []
  }

  addPosts(post) {
    this.AllPosts?.length > 0
    ? this.posts.push(...this.AllPosts)
    : this.posts.push(post)
  }

  savePosts(){
    SaveLocalPosts(this.posts)
  }
}