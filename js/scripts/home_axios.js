const areaSlideTrending = document.getElementById("trending-home");
const todasListas = document.getElementById("listas-home");
const areaSlideTV = document.getElementById("series-populares-home");
const areaSlideFilmes = document.getElementById("filmes-populares-home");
const areaSlideHighTv = document.getElementById("series-alta-home");
const areaSlideHighFilmes = document.getElementById("filmes-alta-home");
const sliderHome = document.getElementById("slider-home");

const detailsPoster = document.getElementById("details-poster");
const detailsNome = document.getElementById("details-nome");
const detailsSinopse = document.getElementById("details-sinopse");
const detailsMeterCircle = document.getElementById("meter-circle");
const detailsMeterPontuacao = document.getElementById("meter-pontuacao");
const btnVoltar = document.getElementById("btn-voltar");

const clickHome = document.getElementById("home-page");


const initHomePage = () => {

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
                                 <p>${infoSlide.info}</p>`;

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

        areaSlideTV.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {

        const cardsSelection = document.querySelectorAll('#series-populares-home .swiper-slide .card-content');
        cardsSelection.forEach(index => {
          index.addEventListener('click', () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: 'GET',
              url: `https://api.themoviedb.org/3/tv/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`
            })
              .then(json => {
                const infoDetails = {
                  nome: json.data.name,
                  sinopse: json.data.overview,
                  poster: json.data.backdrop_path,
                  data: json.data.release_date,
                  pontuação: json.data.vote_average,
                  pontuacaoNum: json.data.vote_average.toFixed(2),

                }
                infoDetails.pontuação = (360 - (infoDetails.pontuação * 18.5));                
                document.documentElement.classList.add('open-modal');

                detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
                detailsNome.innerText = `${infoDetails.nome}`;
                detailsSinopse.innerText = `${infoDetails.sinopse}`;
                detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
                detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

                btnVoltar.addEventListener('click', () => {
                  document.documentElement.classList.remove('open-modal');
                }); 

              });
          })
        })
      }
      detalharItensLista();

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

        areaSlideFilmes.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {

        const cardsSelection = document.querySelectorAll('#filmes-populares-home .swiper-slide .card-content');
        cardsSelection.forEach(index => {
          index.addEventListener('click', () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: 'GET',
              url: `https://api.themoviedb.org/3/movie/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`
            })
              .then(json => {
                const infoDetails = {
                  nome: json.data.title,
                  sinopse: json.data.overview,
                  poster: json.data.backdrop_path,
                  data: json.data.release_date,
                  pontuação: json.data.vote_average,
                  pontuacaoNum: json.data.vote_average.toFixed(2),
                }
                infoDetails.pontuação = (360 - (infoDetails.pontuação * 18.5));
                document.documentElement.classList.add('open-modal');

                detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
                detailsNome.innerText = `${infoDetails.nome}`;
                detailsSinopse.innerText = `${infoDetails.sinopse}`;
                detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
                detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

                btnVoltar.addEventListener('click', () => {
                  document.documentElement.classList.remove('open-modal');
                }); 

              });
          })
        })
      }
      detalharItensLista();

    });
  };

  const initListHighTV = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/tv/day?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR",
    }).then((json) => {
      let { results } = json.data;

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

      const detalharItensLista = () => {

        const cardsSelection = document.querySelectorAll('#series-alta-home .swiper-slide .card-content');
        cardsSelection.forEach(index => {
          index.addEventListener('click', () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: 'GET',
              url: `https://api.themoviedb.org/3/tv/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`
            })
              .then(json => {
                const infoDetails = {
                  nome: json.data.name,
                  sinopse: json.data.overview,
                  poster: json.data.backdrop_path,
                  data: json.data.release_date,
                  pontuação: json.data.vote_average,
                  pontuacaoNum: json.data.vote_average.toFixed(2),

                }
                infoDetails.pontuação = (360 - (infoDetails.pontuação * 18.5));
                document.documentElement.classList.add('open-modal');

                detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
                detailsNome.innerText = `${infoDetails.nome}`;
                detailsSinopse.innerText = `${infoDetails.sinopse}`;
                detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
                detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

                btnVoltar.addEventListener('click', () => {
                  document.documentElement.classList.remove('open-modal');
                }); 

              });
          })
        })
      }
      detalharItensLista();

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

      const detalharItensLista = () => {

        const cardsSelection = document.querySelectorAll('#filmes-alta-home .swiper-slide .card-content');
        cardsSelection.forEach(index => {
          index.addEventListener('click', () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: 'GET',
              url: `https://api.themoviedb.org/3/movie/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`
            })
              .then(json => {
                const infoDetails = {
                  nome: json.data.title,
                  sinopse: json.data.overview,
                  poster: json.data.backdrop_path,
                  data: json.data.release_date,
                  pontuação: json.data.vote_average,
                  pontuacaoNum: json.data.vote_average.toFixed(2),

                }
                infoDetails.pontuação = (360 - (infoDetails.pontuação * 18.5));
                document.documentElement.classList.add('open-modal');

                detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
                detailsNome.innerText = `${infoDetails.nome}`;
                detailsSinopse.innerText = `${infoDetails.sinopse}`;
                detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
                detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

                btnVoltar.addEventListener('click', () => {
                  document.documentElement.classList.remove('open-modal');
                });              

              });
          })
        })
      }
      detalharItensLista();

    });
  };

  initListTrendingMovies();
  initListPopularTV();
  initListPopularMovies();
  initListHighTV();
  initListHighMovies();
  clickHome.classList.add('active');

}

const clickHomePage = () => {

  clickHome.addEventListener('click', (e) => {
    e.preventDefault;
    areaSlideTrending.innerHTML = "";
    todasListas.innerHTML = "";
    details.innerHTML = "";

    initHomePage();

  })

}



initHomePage();
clickHomePage();


