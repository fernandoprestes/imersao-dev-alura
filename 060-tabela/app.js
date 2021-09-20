var player1 = {
  nome: "Jogador1",
  vitoria: 0,
  empate: 0,
  derrotas: 0,
  pontos: 0
};

var player2 = {
  nome: "Jogador2",
  vitoria: 0,
  empate: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(player) {
  var pontos = player.vitoria * 3 + player.empate;
  return pontos;
}

let players = [player1, player2];

exibeJogadoresNaTela(players);

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].pontos = calculaPontos(jogadores[i])
    elemento += `<tr>
        <td>${jogadores[i].nome}</td>
        <td>${jogadores[i].vitoria}</td>
        <td>${jogadores[i].empate}</td>
        <td>${jogadores[i].derrotas}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button class="button" onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button class="button" onClick="adicionarEmpate()">Empate</button></td>
        <td><button class="button" onClick="adicionarDerrota(${i})">Derrota</button></td>
      </tr>`;
  }
  var tabelaJogadores = document.querySelector(".player-area");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(indice) {
  var jogador = players[indice];
  jogador.vitoria++;
  exibeJogadoresNaTela(players);
}

function adicionarEmpate() {
  player1.empate++
  player2.empate++
  exibeJogadoresNaTela(players);
}
function adicionarDerrota(indice) {
  var jogador = players[indice];
  jogador.derrotas++;
  exibeJogadoresNaTela(players);
}