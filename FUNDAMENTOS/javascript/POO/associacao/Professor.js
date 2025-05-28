class Auth {
  #email
  #senha
  #msg

  constructor(mail, password) {
    this.#email = mail
    this.#senha = password
    this.#msg = ''
  }

  #validaAuth(email, senha) {
    return email === this.#email && senha === this.#senha
  }

  login(email, senha) {
    this.#validaAuth(email, senha)
     ? this.#msg = "Autenticação realizada com Sucesso!"
     : this.#msg = "Erro na Autenticação!"

    return this.#msg
  }
}

const conta1 = new Auth('edurojas@gmail.com', 55)
const validacao = conta1.login('edurojas@gmail.com', 55)
console.log(validacao)
