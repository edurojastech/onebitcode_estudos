/*
Treinando a Criação de Classes
um atributo fullname, atribuível na instanciação
um atributo email, atribuível na instanciação
um atributo password, atribuível na instanciação
um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros
com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não

um atributo name, atribuível na instanciação
um atributo description, atribuível na instanciação
um atributo price, atribuível na instanciação
um atributo inStock, inicializado sempre em 0
um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
um método calculateDiscount, que tem como parâmetro a percentagem 
de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado
*/

class User  {
  constructor(email, password, fullName) {
    this.email = email
    this.password = password
    this.fullName = fullName
    this.login = (email, password) => {
      if(email == this.email && password == this.password){
        console.log(`Login do ${this.fullName} Efetuado com Sucesso!`)
      } else{
        console.log('Erro, email ou senha incorretos!')
      }
    }
  }
}

class Product {
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
    this.valueDescount = 0
    this.addStock = (value) => {
      this.inStock += value
    }
    this.calculateDiscount = (discount) => {
      const value = price - (price * (discount / 100))
      this.valueDescount = `original: ${this.price} | Com desconto ${discount}%: ${value}`
    }
  }
}

const tv = new Product(
  'Smart Tv',
  'LG 84 Polegadas 4k',
  8500
)

tv.calculateDiscount(10)
tv.addStock(40)
console.log(`Em estoque: ${tv.inStock}`)

const pc = new Product(
  'VivoBook 16X',
  'Notebook Asus i5',
  4500
)
pc.calculateDiscount(15)
console.log(tv)
console.log(pc)

