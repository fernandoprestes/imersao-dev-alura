const btn = document.querySelector('.button')

btn.addEventListener('click', function (event) {
  event.preventDefault()
  var temperature = document.querySelector('.celsius').value
  var convertF = (temperature * 9) / 5 + 32
  var convertK = Number(temperature) + 273.15
  document.querySelector('.fahrenheit').textContent = convertF.toFixed(2)
  document.querySelector('.kelvin').textContent = convertK.toFixed(2)
})
