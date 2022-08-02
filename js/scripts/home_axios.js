const todasListas = document.getElementById("listas-home");
const primeiraLista = document.getElementById("primeira-lista");
const segundaLista = document.getElementById("segunda-lista");
const terceiraLista = document.getElementById("terceira-lista");
const quartaLista = document.getElementById("quarta-lista");
const sliderHome = document.getElementById("slider-home");

const titlePrimeiraLista = document.getElementById("primeira-lista-title");
const titleSegundaLista = document.getElementById("segunda-lista-title");
const titleTerceiraLista = document.getElementById("terceira-lista-title");
const titleQuartaLista = document.getElementById("quarta-lista-title");

const detailsPoster = document.getElementById("details-poster");
const detailsNome = document.getElementById("details-nome");
const detailsSinopse = document.getElementById("details-sinopse");
const detailsMeterCircle = document.getElementById("meter-circle");
const detailsMeterPontuacao = document.getElementById("meter-pontuacao");
const btnVoltar = document.getElementById("btn-voltar");

const clickHome = document.getElementById("home-page");
const clickMovies = document.getElementById("movies-page");
const clickSeries = document.getElementById("series-page");


const limparListas = () => {

  sliderHome.innerHTML = "";
  primeiraLista.innerHTML = "";
  segundaLista.innerHTML = "";
  terceiraLista.innerHTML = "";
  quartaLista.innerHTML = ""; 
  clickHome.classList.remove('active');
  clickMovies.classList.remove('active');
  clickSeries.classList.remove('active');
    
};
const initHomePage = () => {

  // Slider Principal Base Html
  let containerGrid = document.createElement("div");
  containerGrid.classList = "container-grid";
  containerGrid.innerHTML = `<div class="swiper content-slides">
                                <div class="swiper-wrapper" id="trending-home">
                                </div>
                              </div>`
  sliderHome.appendChild(containerGrid);
  const areaSlideTrending = document.getElementById("trending-home");
  // End

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

        primeiraLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#primeira-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/tv/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.name,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
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

        segundaLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#segunda-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/movie/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.title,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
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

        terceiraLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#terceira-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/tv/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.name,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
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

        quartaLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#quarta-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/movie/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.title,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
      detalharItensLista();
    });
  };

  initListTrendingMovies();
  initListPopularTV();
  initListPopularMovies();
  initListHighTV();
  initListHighMovies();
  clickHome.classList.add("active");
};
const initMoviesPage = () => {

  titlePrimeiraLista.innerText = "Em alta";
  const initListTrendingMovies = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1",
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

        primeiraLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#primeira-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/movie/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.title,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
      detalharItensLista();
    });
  };

  titleSegundaLista.innerText = "Populares";
  const initListPopularesMovies = () => {
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

        segundaLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#segunda-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/movie/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.title,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
      detalharItensLista();
    });
  };

  titleTerceiraLista.innerText = "Os mais votados";
  const initListMaisVotadosMovies = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1",
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

        terceiraLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#terceira-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/movie/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.title,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
      detalharItensLista();
    });
  };

  titleQuartaLista.innerText = "Aguardados"
  const initListAguardadosMovies = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1",
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

        quartaLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#quarta-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/movie/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.title,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
      detalharItensLista();
    });
  };

  initListTrendingMovies();
  initListPopularesMovies();
  initListMaisVotadosMovies();
  initListAguardadosMovies();
};
const initSeriesPage = () => {

  titlePrimeiraLista.innerText = "No ar hoje";
  const initListNoArHoje = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/airing_today?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1",
    }).then((json) => {
      let { results } = json.data;
      console.log(results);
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

        primeiraLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#primeira-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/tv/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.name,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
      detalharItensLista();
    });
  };

  titleSegundaLista.innerText = "No ar esta semana";
  const initListNoArSemana = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/on_the_air?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1",
    }).then((json) => {
      let { results } = json.data;
      console.log(results);
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

        segundaLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#segunda-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/tv/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.name,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
      detalharItensLista();
    });
  };

  titleTerceiraLista.innerText = "Populares";
  const initListPopulares = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/popular?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1",
    }).then((json) => {
      let { results } = json.data;
      console.log(results);
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

        terceiraLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#terceira-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/tv/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.name,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
      detalharItensLista();
    });
  };

  titleQuartaLista.innerText = "Mais votadas"
  const initListMaisVotadas = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/top_rated?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1",
    }).then((json) => {
      let { results } = json.data;
      console.log(results);
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

        quartaLista.appendChild(swiperSlide);
      });

      const detalharItensLista = () => {
        const cardsSelection = document.querySelectorAll(
          "#quarta-lista .swiper-slide .card-content"
        );
        cardsSelection.forEach((index) => {
          index.addEventListener("click", () => {
            let idCardSelection = index.children[1].children[2].textContent;

            axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/tv/${idCardSelection}?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR`,
            }).then((json) => {
              const infoDetails = {
                nome: json.data.name,
                sinopse: json.data.overview,
                poster: json.data.backdrop_path,
                data: json.data.release_date,
                pontuação: json.data.vote_average,
                pontuacaoNum: json.data.vote_average.toFixed(2),
              };
              infoDetails.pontuação = 360 - infoDetails.pontuação * 18.5;
              document.documentElement.classList.add("open-modal");

              detailsPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoDetails.poster}')`;
              detailsNome.innerText = `${infoDetails.nome}`;
              detailsSinopse.innerText = `${infoDetails.sinopse}`;
              detailsMeterCircle.style.strokeDashoffset = `${infoDetails.pontuação}`;
              detailsMeterPontuacao.innerText = `${infoDetails.pontuacaoNum}`;

              btnVoltar.addEventListener("click", () => {
                document.documentElement.classList.remove("open-modal");
              });
            });
          });
        });
      };
      detalharItensLista();
    });
  };

  initListNoArHoje();
  initListNoArSemana();
  initListPopulares();
  initListMaisVotadas();

};


const clickHomePage = () => {
  clickHome.addEventListener("click", (e) => {
    location.reload();
  });
};
const clickMoviesPage = () => {
  clickMovies.addEventListener("click", (e) => {
    limparListas();
    sliderHome.innerHTML = "";
    clickMovies.classList.add('active');
    initMoviesPage();
  });
};
const clickSeriesPage = () => {
  clickSeries.addEventListener("click", (e) => {
    limparListas();
    sliderHome.innerHTML = "";
    clickSeries.classList.add('active');
    initSeriesPage();
  });
};


initHomePage();
clickHomePage();
clickMoviesPage();
clickSeriesPage();





