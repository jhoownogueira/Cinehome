let areaSlideTrending = document.getElementById("trending-home");
let areaSlideTV = document.getElementById("series-populares-home");
let areaSlideFilmes = document.getElementById("filmes-populares-home");
let areaSlideHighTv = document.getElementById("series-alta-home");
let areaSlideHighFilmes = document.getElementById("filmes-alta-home");
let sliderHome = document.getElementById("slider-home");
let todasListas = document.getElementById("listas-home");

const initListTrendingMovies = () => {
  axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR",
  }).then((json) => {
    let { results } = json.data;
    results.forEach((index) => {
      const infoSlide = {
        nome: index.title,
        info: index.overview,
        image: index.backdrop_path,
      };

      let swiperSlide = document.createElement("div");

      swiperSlide.classList = "swiper-slide";
      swiperSlide.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoSlide.image}')`;
      swiperSlide.innerHTML = `<h1>${infoSlide.nome}</h1>
                               <p>${infoSlide.info}</p>
                               <div class="buttons-slides">
                                    <div class="buttons">
                                        <button class="primary-button">Detalhes</button>
                                    </div>
                                </div>`;

      areaSlideTrending.appendChild(swiperSlide);
    });
  });
};

const initListPopularTV = () => {
  axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/tv/popular?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1",
  }).then((json) => {
    let { results } = json.data;
    results.forEach((index) => {
      const infoCard = {
        nome: index.name,
        ano: index.first_air_date.slice(0, 4),
        image: index.poster_path,
      };

      let swiperSlide = document.createElement("div");

      swiperSlide.classList = "swiper-slide";
      swiperSlide.innerHTML = `<div class="card-content">
                                    <div class="image-mask" style="background-image: url('https://image.tmdb.org/t/p/original/${infoCard.image}');">
                                    </div>
                                    <div class="info-card">
                                        <h3>${infoCard.nome}</h3>
                                        <span>${infoCard.ano}</span>
                                    </div>
                                </div>`;

      areaSlideTV.appendChild(swiperSlide);
    });
  });
};

const initListPopularMovies = () => {
   axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1",
  }).then((json) => {
    let { results } = json.data;
    results.forEach((index) => {
      const infoCard = {
        nome: index.title,
        ano: index.release_date.slice(0, 4),
        image: index.poster_path,
      };

      let swiperSlide = document.createElement("div");

      swiperSlide.classList = "swiper-slide";
      swiperSlide.innerHTML = `<div class="card-content">
                                    <div class="image-mask" style="background-image: url('https://image.tmdb.org/t/p/original/${infoCard.image}');">
                                    </div>
                                    <div class="info-card">
                                        <h3>${infoCard.nome}</h3>
                                        <span>${infoCard.ano}</span>
                                    </div>
                                </div>`;

      areaSlideFilmes.appendChild(swiperSlide);
    });
  });
};

const initListHighTV = () => {
  axios({
   method: "GET",
   url: "https://api.themoviedb.org/3/trending/tv/day?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR",
 }).then((json) => {
   let { results } = json.data;
   console.log(results)
   results.forEach((index) => {
     const infoCard = {
       nome: index.name,
       ano: index.first_air_date.slice(0, 4),
       image: index.poster_path,
       id: index.id,
     };

     let swiperSlide = document.createElement("div");

     swiperSlide.classList = "swiper-slide";
     swiperSlide.innerHTML = `<div class="card-content">
                                   <div class="image-mask" style="background-image: url('https://image.tmdb.org/t/p/original/${infoCard.image}');">
                                   </div>
                                   <div class="info-card">
                                       <h3>${infoCard.nome}</h3>
                                       <span>${infoCard.ano}</span>
                                       <small>${infoCard.id}</small>
                                   </div>
                               </div>`;

     areaSlideHighTv.appendChild(swiperSlide);
   });
 });
};

const initListHighMovies = () => {
  axios({
   method: "GET",
   url: "https://api.themoviedb.org/3/trending/movie/day?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR",
 }).then((json) => {
   let { results } = json.data;
  
   results.forEach((index) => {
     const infoCard = {
       nome: index.title,
       ano: index.release_date.slice(0, 4),
       image: index.poster_path,
       id: index.id,
     };

     let swiperSlide = document.createElement("div");

     swiperSlide.classList = "swiper-slide";
     swiperSlide.innerHTML = `<div class="card-content">
                                   <div class="image-mask" style="background-image: url('https://image.tmdb.org/t/p/original/${infoCard.image}');">
                                   </div>
                                   <div class="info-card">
                                       <h3>${infoCard.nome}</h3>
                                       <span>${infoCard.ano}</span>
                                       <small>${infoCard.id}</small>
                                   </div>
                               </div>`;

     areaSlideHighFilmes.appendChild(swiperSlide);

   });
   const cardsSelection = document.querySelectorAll('#filmes-alta-home .swiper-slide .card-content');
   cardsSelection.forEach(index => {
    index.addEventListener('click', () => {
      let idCardSelection = index.children[1].children[2].textContent;

      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR` 
      })
      .then(json => {
        const infoDetais = {
          nome: json.data.title,
          sinopse: json.data.overview,
          poster: json.data.backdrop_path,
          data: json.data.release_date,
          pontuação: json.data.vote_average

        }
        console.log(infoDetais)
      })
      sliderHome.innerHTML = "";
      todasListas.innerHTML = "";

    })
   })
 });
};

initListTrendingMovies();
initListPopularTV();
initListPopularMovies();
initListHighTV();
initListHighMovies();


// https://api.themoviedb.org/3/movie/507086?api_key=93f7813158e109c144b2cfefacb802be

// https://api.themoviedb.org/3/tv/66732?api_key=93f7813158e109c144b2cfefacb802be

