let numeroSecreto = (Math.random() * 10).toFixed()
let tentativas = 0
let totalTentativas = 3

const htmlMensagem = document.querySelector('.form-message')
const htmlResult = document.querySelector('.main-result')
const htmlAlert = document.querySelector('.form-alert')
const htmlError = document.querySelector('.form-error')
const btnAdivinhar = document.querySelector('#button-guess')
const btnSortear = document.querySelector('#button-draw')

btnSortear.disabled = true

//veja o numero sorteado
// console.log(numeroSecreto)

btnAdivinhar.addEventListener('click', function (event) {
  event.preventDefault()

  let numeroDigitado = document.querySelector('.main-input').value
  document.querySelector('.main-input').value = ''
  if (numeroDigitado > 10) {
    htmlError.textContent = `Digite um numero entre 0 e 10!`
    htmlError.style.background = '#ff0000'
  } else {
    tentativas++
    htmlError.textContent = ''
    htmlError.style.background = ''
    htmlResult.textContent = numeroDigitado
    adivinhar(numeroDigitado)
  }
  //quantas tentativas tem
  // console.log('T: ' + tentativas)
})

let txtMensagem = ''
let txtAlert = ''

function adivinhar(numeroDigitado) {
  if (tentativas < 3) {
    if (numeroDigitado > numeroSecreto) {
      txtMensagem = 'O numero secreto é menor'
      txtAlert = 'Voce tem ' + (totalTentativas - tentativas) + ' tentativas'
    } else if (numeroDigitado < numeroSecreto) {
      txtMensagem = 'O numero secreto é maior'
      txtAlert = 'Voce tem ' + (totalTentativas - tentativas) + ' tentativas'
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

  htmlMensagem.innerHTML = txtMensagem
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
