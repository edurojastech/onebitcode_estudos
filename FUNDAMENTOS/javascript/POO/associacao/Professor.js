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

const account = {
  mail: 'edurojas@gmail.com',
  password: 450
}

const { mail, password } = account
const auth = new Auth(mail, password)
const validacao = auth.login( mail, 450)
console.log(validacao)
