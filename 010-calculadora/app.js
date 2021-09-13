var nome = 'Pedro Paulo'
var notaPrimeiroBimestre = 7
var notaSegundoBimestre = 8
var notaTerceiroBimestre = 9
var notaQuartoBimestre = 10
var notaSomada =
  notaPrimeiroBimestre +
  notaSegundoBimestre +
  notaTerceiroBimestre +
  notaQuartoBimestre
var notaFinal = notaSomada / 4

//console.log("Bem vindo " + nome)
//console.log(notaFinal.toFixed(0)) >> "8"
//console.log(notaFinal) >> 8.25
//alert(notaFinal)

const htmlNome = document.querySelector('.user-nome')
const htmlResult = document.querySelector('.user-result')

htmlNome.innerHTML = nome + ' foi:'

if (notaFinal > 7) {
  htmlResult.innerHTML = 'Aprovado'
  htmlResult.style.color = '#0DF00E'
} else {
  htmlResult.innerHTML = 'Reprovado'
  htmlResult.style.color = '#F01717'
}
