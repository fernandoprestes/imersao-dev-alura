var cartas = [
  {
    nome: "Bulbasauro",
    atributos: {
      ataque: 85,
      defesa: 87,
      vida: 157
    },
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    nome: "Charmander",
    atributos: {
      ataque: 95,
      defesa: 78,
      vida: 127
    },
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    nome: "Butterfree",
    atributos: {
      ataque: 80,
      defesa: 85,
      vida: 198
    },
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
  }
];

let cartaMaquina;
let cartaJogador;
let divResultado = document.querySelector("#resultado");

function sortearCarta() {
  divResultado.innerHTML = ''
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }

  cartaJogador = cartas[numeroCartaJogador];

  document.querySelector("#btnSortear").disabled = true;
  document.querySelector("#btnJogar").disabled = false;

  exibirCartaJogador()

}

function exibirCartaJogador(){
  var divCartaJogador = document.querySelector('#carta-jogador')
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = '<div id="opcoes" class="carta-status">'
  var opcoesTexto = "";
  for (let atributo in cartaJogador.atributos) {
    opcoesTexto +=
      '<input class="atributo" type="radio" name="atributo" value="' +
      atributo +
      '">' +
      atributo + " " + cartaJogador.atributos[atributo] + "<br />";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.querySelectorAll(".atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function exibirCartaMaquina(){
  var divCartaMaquina = document.querySelector('#carta-maquina')
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = '<div id="opcoes" class="carta-status">'
  var opcoesTexto = "";
  for (let atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      `<p>${atributo} ${cartaMaquina.atributos[atributo]}</p>`
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.querySelectorAll(".atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var htmlResultado
  exibirCartaMaquina()

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = '<p class="resultado-final">Venceu</p>'
  } else if (valorCartaJogador < valorCartaMaquina) {
    htmlResultado = '<p class="resultado-final">Perdeu</p>'
  } else {
    htmlResultado = '<p class="resultado-final">Empatou</p>'
  }
  divResultado.innerHTML = htmlResultado
  document.querySelector("#btnSortear").disabled = false;
  document.querySelector("#btnJogar").disabled = true;
}
