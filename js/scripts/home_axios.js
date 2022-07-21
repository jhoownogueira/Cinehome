
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
            ano: index.first_air_date.slice(0,4),
            image: index.poster_path,
        }

        createCardSeriesPopulares(infoCard.nome, infoCard.ano, infoCard.image);
    })
})

// Home - Filmes Populares
    // Create Card By Api
const areaFilmesPopulares = document.getElementById('filmes-populares-home');

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
            ano: index.release_date.slice(0,4),
            image: index.poster_path,
        }

        createCardFilmesPopulares(infoCard.nome, infoCard.ano, infoCard.image);
    })
})

const areaSlideTrending = document.getElementById('trending-home');
console.log(areaSlideTrending)

function createSlideTrending(nome, info, image) {
    let swiper = document.createElement('div');
    swiper.classList = 'swiper-slide';
    swiper.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${image}')`;
    areaSlideTrending.appendChild(swiper);
    let titulo = document.createElement('h1');
    titulo.innerText = `${nome}`;
    swiper.appendChild(titulo);
    let sinopse = document.createElement('p');
    sinopse.innerText = `${info}`;
    swiper.appendChild(sinopse);
    let buttonsDivSlide = document.createElement('div');
    buttonsDivSlide.classList = 'buttons-slides';
    swiper.appendChild(buttonsDivSlide);
    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList = 'buttons';
    buttonsDivSlide.appendChild(buttonsDiv);
    let buttonsAssista = document.createElement('button');
    buttonsAssista.classList = 'primary-button';
    buttonsAssista.innerText = 'Assista agora';
    buttonsDiv.appendChild(buttonsAssista);
    let buttonsAddList = document.createElement('button');
    buttonsAddList.classList = 'secondary-button';
    buttonsAddList.innerHTML = '<img src="img/icon-favoritar.svg" alt="">';
    buttonsDiv.appendChild(buttonsAddList);

}

axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR',
})
.then(json => {

    const {results} = json.data;
    results.forEach(index => {

        const infoSlide = {
            nome: index.title,
            info: index.overview,
            image: index.poster_path,
        }

        createSlideTrending(infoSlide.nome, infoSlide.info, infoSlide.image);

    })
})
