const urlImgDefault = 'https://image.tmdb.org/t/p/w500/'
const apiKey = '' /** insert your apikey */
const urlApi = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=`

const btn = document.querySelector('.button')
const textAlert = document.querySelector('.txtAlert')

let divImg = document.querySelector('.movie-list')

let filmesIniciais = [
  {
    nome: 'Guerra nas Estrelas',
    img: 'dw7X9YPjjAfIxKHW04V64Bb9TB0.jpg'
  },
  {
    nome: 'Star Wars: A Ascensão Skywalker',
    img: 'uLlrDUtFG2tKtDcJN6kBznlqqsp.jpg'
  },
  {
    nome: 'Star Wars: Os Últimos Jedi',
    img: '5dGufuaIG5vNcxPm8QPij5MSPeQ.jpg'
  }
]

var listaFilmesAdicionados = []

for (let i = 0; i < filmesIniciais.length; i++) {
  listarFilmes(filmesIniciais[i].img, filmesIniciais[i].nome)
}

btn.addEventListener('click', adicionarFilme)

function adicionarFilme() {
  textAlert.textContent = ''
  let nomeFilme = document.querySelector('#filme').value
  buscarFilme(nomeFilme)
}

function listarFilmes(banner, titulo){
  divImg.innerHTML += htmlImg(banner, titulo)
  listaFilmesAdicionados.push(titulo)
}

function buscarFilme(nomeFilme) {
  fetch(`${urlApi}${nomeFilme.toLowerCase()}`, { method: 'GET' })
    .then(resp => resp.json())
    .then(data => {
      if (data.total_results > 0) {
        if (isAdded(data.results[0].title)) {
          textAlert.textContent = 'Filme já está na lista!'
        } else {
          listarFilmes(data.results[0].poster_path, data.results[0].title)
          document.querySelector('#filme').value = ''
        }
      } else {
        textAlert.textContent = 'Esse filme não existe!'
      }
    })
    .catch(error => {
      console.log(error)
    })
}

function htmlImg(urlFilme, urlNomeFilme) {
  return `
    <div class="movie-item">
      <a class="movie-banner" title='${urlNomeFilme}'>
        <img src="${urlImgDefault + urlFilme}" alt="banner do filme ${urlNomeFilme}">
      </a>
      <p class="movie-title">${urlNomeFilme}</p>
    </div>
  `
}

function isAdded(nomeFilme) {
  return listaFilmesAdicionados.includes(nomeFilme)
}
