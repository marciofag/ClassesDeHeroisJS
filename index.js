class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque surpresa";
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Exemplo de uso da classe
const mago = new Heroi("Merlin", 100, "mago");
const guerreiro = new Heroi("Arthur", 30, "guerreiro");
const monge = new Heroi("Li", 40, "monge");
const ninja = new Heroi("Hanzo", 25, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
