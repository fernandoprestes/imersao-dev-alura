let numeroSecreto = (Math.random() * 10).toFixed()
let tentativas = 0

const htmlResultado = document.querySelector('.form-message')
const htmlAlert = document.querySelector('.form-alert')
const btnAdivinhar = document.querySelector('#button-guess')
const btnSortear = document.querySelector('#button-draw')

btnSortear.disabled = true

//veja o numero sorteado
// console.log(numeroSecreto)

btnAdivinhar.addEventListener('click', function (event) {
  event.preventDefault()
  tentativas++

  let numeroDigitado = document.querySelector('.main-input').value
  document.querySelector('.main-input').value = ''
  document.querySelector('.main-result').textContent = numeroDigitado

  //quantas tentativas tem
  // console.log('T: ' + tentativas)

  adivinhar(numeroDigitado)
})

let txtMensagem = ''
let txtAlert = ''

function adivinhar(numeroDigitado) {
  if (tentativas < 3) {
    if (numeroDigitado > numeroSecreto) {
      txtMensagem = 'O numero secreto é menor'
      txtAlert = 'Voce tem ' + (3 - tentativas) + ' tentativas'
    } else if (numeroDigitado < numeroSecreto) {
      txtMensagem = 'O numero secreto é maior'
      txtAlert = 'Voce tem ' + (3 - tentativas) + ' tentativas'
    } else {
      txtMensagem = 'Voce acertou!'
      txtAlert = 'Sortear novo numero?'
      btnDisable()
    }
  } else if (tentativas == 3) {
    if (numeroDigitado > numeroSecreto) {
      txtMensagem = 'Fim de jogo! O numero secreto era: ' + numeroSecreto
      txtAlert = 'Sortear novo numero?'
      btnDisable()
    } else if (numeroDigitado < numeroSecreto) {
      txtMensagem = 'Fim de jogo! O numero secreto era: ' + numeroSecreto
      txtAlert = 'Sortear novo numero?'
      btnDisable()
    } else {
      txtMensagem = 'Voce acertou!'
      txtAlert = 'Sortear novo numero?'
      btnDisable()
    }
  } else {
    txtMensagem = 'Voce não acetou! Fim de jogo!'
    txtAlert = 'Novo Jogo?'
    btnDisable()
  }

  htmlResultado.innerHTML = txtMensagem
  htmlAlert.innerHTML = txtAlert
}

function novoJogo() {
  btnSortear.addEventListener('click', function (event) {
    event.preventDefault()
    numeroSecreto = (Math.random() * 10).toFixed()
    return numeroSecreto
  })
}

function btnDisable() {
  btnAdivinhar.disabled = true
  btnSortear.disabled = false
}
