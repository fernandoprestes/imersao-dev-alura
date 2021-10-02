const btn = document.querySelector('.button')
const btnReset = document.querySelector('.reset')

btn.addEventListener('click', function (event) {
  event.preventDefault()
  var nome = document.querySelector('#form-name').value
  var notaPrimeiro = document.querySelector('#form-firstGrade').value
  var notaSegundo = document.querySelector('#form-secondGrade').value
  var notaTerceiro = document.querySelector('#form-thirdGrade').value
  var notaQuarto = document.querySelector('#form-fourthGrade').value
  var notaSomada =
    Number(notaPrimeiro) +
    Number(notaSegundo) +
    Number(notaTerceiro) +
    Number(notaQuarto)
  var notaFinal = notaSomada / 4

  if(!nome || !notaPrimeiro || !notaSegundo || !notaTerceiro || !notaQuarto){
    alert("Preencha com todos os campos!")
    console.log("não tem os campos preenchidos!")
  }else{
    var htmlNome = document.querySelector('.user-nome')
    var htmlResult = document.querySelector('.user-result')
  
    if (notaFinal > 7) {
      htmlNome.textContent = 'Parabéns ' + nome
      htmlResult.textContent = 'Aprovado!'
      htmlResult.style.color = '#0DF00E'
    } else {
      htmlNome.textContent = 'Não foi dessa vez ' + nome
      htmlResult.textContent = 'Reprovado'
      htmlResult.style.color = '#F01717'
    }
  }
})

btnReset.addEventListener('click', function (event) {
  event.preventDefault()
  var nome = (document.querySelector('#form-name').value = '')
  var notaPrimeiro = (document.querySelector('#form-firstGrade').value = '')
  var notaSegundo = (document.querySelector('#form-secondGrade').value = '')
  var notaTerceiro = (document.querySelector('#form-thirdGrade').value = '')
  var notaQuarto = (document.querySelector('#form-fourthGrade').value = '')
  var htmlNome = (document.querySelector('.user-nome').textContent = '')
  var htmlResult = (document.querySelector('.user-result').textContent = '')
})
