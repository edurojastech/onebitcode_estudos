class Veiculo {
  constructor(tipo, marca, cor) {
    this.tipo ??= tipo,
    this.marca ??= marca,
    this.cor ??= cor
  }

  info() {
    console.log(this)
  }

  move() {
    console.log(`
      O veiculo da marca ${this.marca} 
      e cor ${this.cor} se movendo...`
    )
  }
}


class Bike extends Veiculo {
  constructor(tipo, marca, cor, aro) {
    super(tipo, marca, cor)
    this.aro = aro
  }

  move() {
    console.log(`
      A bike de aro ${this.aro} da marca ${this.marca} 
      e cor ${this.cor} se move somente com 
      duas rodas e pedalando...`
    )
  }
}





const veiculoTest = new Veiculo('Carro', 'Fiat', 'Vermelho')
const bicicleta = new Bike('Bike', 'Caloi', 'Verde', 29)
veiculoTest.info()
veiculoTest.move()
bicicleta.info()
bicicleta.move()