const urlImgDefault = "https://image.tmdb.org/t/p/w500/";
const apiKey = '' /** insert apikey */
const urlApi =
  `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=`;

const btn = document.querySelector('.button')
const textAlert = document.querySelector('.txtAlert')

var listaFilmes = [];

btn.addEventListener('click', adicionarFilme)

function adicionarFilme() {
  textAlert.textContent = ''
  let nomeFilme = document.querySelector("#filme").value;
  buscarFilme(nomeFilme);
}

function buscarFilme(nomeFilme) {
  let divImg = document.querySelector(".movie-list");
  fetch(`${urlApi}${nomeFilme.toLowerCase()}`, { method: "GET" })
    .then(resp => resp.json())
    .then((data) => {
      if (data.total_results > 0) {
        if (isAdded(data.results[0].title)) {
          textAlert.textContent = "Filme já está na lista!"
        } else {
          listaFilmes.push(data.results[0].title);
          divImg.innerHTML +=
            htmlImg(urlImgDefault + data.results[0].poster_path, data.results[0].title);
          document.querySelector("#filme").value = "";
        }
      } else {
        textAlert.textContent = "Esse filme não existe!"
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function htmlImg(urlFilme, urlNomeFilme) {
  return `
    <div class="movie-item">
      <a class="movie-banner" title='${urlNomeFilme}'>
        <img src="${urlFilme}">
      </a>
      <p class="movie-title">${urlNomeFilme}</p>
    </div>
  `;
}

function isAdded(nomeFilme) {
  return listaFilmes.includes(nomeFilme);
}