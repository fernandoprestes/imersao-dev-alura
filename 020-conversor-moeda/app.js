const btnInDollar = document.querySelector('.buttonDollar')
const btnInEuro = document.querySelector('.buttonEuro')

btnInDollar.addEventListener('click', function(event) {
  event.preventDefault();
  var value = document.querySelector('.realToDollar').value;
  price('USD-BRL', value, '.inDollar')
});

btnInEuro.addEventListener('click', function(event) {
  event.preventDefault();
  var value = document.querySelector('.realToEuro').value;
  price('EUR-BRL', value, '.inEuro')
});

async function price(amount, value, tagHTML){
  await fetch(`https://economia.awesomeapi.com.br/json/daily/${amount}/1`)
  .then((resp) => resp.json())
  .then((data) => {
    var transaction = value * data[0].bid
    document.querySelector(tagHTML).textContent = transaction.toFixed(2)
  })
}