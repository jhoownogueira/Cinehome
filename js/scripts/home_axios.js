
// Home - Series Populares
    // Create Card By Api
const areaSeriesPopulares = document.getElementById('series-populares-home');

function createCardSeriesPopulares(nome, ano, imagem) {
    let swiper = document.createElement('div');
    swiper.classList = 'swiper-slide';
    areaSeriesPopulares.appendChild(swiper);
    let card = document.createElement('button');
    card.classList = 'card-content';
    swiper.appendChild(card);
    let imageSerie = document.createElement('div');
    imageSerie.classList = 'image-mask';
    imageSerie.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${imagem}')`;
    card.appendChild(imageSerie);
    let infoCardSerie = document.createElement('div');
    infoCardSerie.classList = 'info-card';
    card.appendChild(infoCardSerie);
    let nomeSerie = document.createElement('h3');
    nomeSerie.innerText = `${nome}`;
    infoCardSerie.appendChild(nomeSerie);
    let anoSerie = document.createElement('span');
    anoSerie.innerText = `${ano}`;
    infoCardSerie.append(anoSerie);
  
}
    // Requisição Lista Series Populares By Api
axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/popular?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1',
})
.then(json => {

    const {results} = json.data;
    results.forEach(index => {
        
        const infoCard = {
            nome: index.name,
            ano: index.first_air_date,
            image: index.poster_path,
        }

        createCardSeriesPopulares(infoCard.nome, infoCard.ano, infoCard.image);
    })
})

// Home - Filmes Populares
    // Create Card By Api
const areaFilmesPopulares = document.getElementById('filmes-populares-home');
console.log(areaFilmesPopulares)

function createCardFilmesPopulares(nome, ano, imagem) {
    let swiper = document.createElement('div');
    swiper.classList = 'swiper-slide';
    areaFilmesPopulares.appendChild(swiper);
    let card = document.createElement('button');
    card.classList = 'card-content';
    swiper.appendChild(card);
    let imageSerie = document.createElement('div');
    imageSerie.classList = 'image-mask';
    imageSerie.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${imagem}')`;
    card.appendChild(imageSerie);
    let infoCardSerie = document.createElement('div');
    infoCardSerie.classList = 'info-card';
    card.appendChild(infoCardSerie);
    let nomeSerie = document.createElement('h3');
    nomeSerie.innerText = `${nome}`;
    infoCardSerie.appendChild(nomeSerie);
    let anoSerie = document.createElement('span');
    anoSerie.innerText = `${ano}`;
    infoCardSerie.append(anoSerie);
  
}

    // Requisição Lista Filmes Populares By Api
axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1',
})
.then(json => {

    const {results} = json.data;
    results.forEach(index => {

        const infoCard = {
            nome: index.title,
            ano: index.release_date,
            image: index.poster_path,
        }

        createCardFilmesPopulares(infoCard.nome, infoCard.ano, infoCard.image);
    })
})