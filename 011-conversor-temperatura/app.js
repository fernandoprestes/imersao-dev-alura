const btn = document.querySelector('.button')

btn.addEventListener('click', function(event) {
  event.preventDefault();
  var temperature = document.querySelector('.celsius').value;
  var convert = (temperature * 9/5) + 32
  document.querySelector('.fahrenheit').textContent = convert.toFixed(1);
});