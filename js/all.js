"use strict";var areaSlideTrending=document.getElementById("trending-home"),todasListas=document.getElementById("listas-home"),areaSlideTV=document.getElementById("series-populares-home"),areaSlideFilmes=document.getElementById("filmes-populares-home"),areaSlideHighTv=document.getElementById("series-alta-home"),areaSlideHighFilmes=document.getElementById("filmes-alta-home"),sliderHome=document.getElementById("slider-home"),details=document.getElementById("detalhes-filmes-series"),clickHome=document.getElementById("home-page"),initHomePage=function(){axios({method:"GET",url:"https://api.themoviedb.org/3/trending/movie/day?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR"}).then(function(e){e.data.results.forEach(function(e){var e={nome:e.title,info:e.overview,image:e.backdrop_path},t=document.createElement("div");t.classList="swiper-slide",t.style.backgroundImage="url('https://image.tmdb.org/t/p/original/".concat(e.image,"')"),t.innerHTML="<h1>".concat(e.nome,"</h1>\n                                 <p>").concat(e.info,"</p>"),areaSlideTrending.appendChild(t)})}),axios({method:"GET",url:"https://api.themoviedb.org/3/tv/popular?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1"}).then(function(e){e.data.results.forEach(function(e){var e={nome:e.name,ano:e.first_air_date.slice(0,4),image:e.poster_path,id:e.id},t=document.createElement("div");t.classList="swiper-slide",t.innerHTML='<div class="card-content">\n                                      <div class="image-mask" style="background-image: url(\'https://image.tmdb.org/t/p/original/'.concat(e.image,'\');">\n                                      </div>\n                                      <div class="info-card">\n                                          <h3>').concat(e.nome,"</h3>\n                                          <span>").concat(e.ano,"</span>\n                                          <small>").concat(e.id,"</small>\n                                      </div>\n                                  </div>"),areaSlideTV.appendChild(t)});document.querySelectorAll("#series-populares-home .swiper-slide .card-content").forEach(function(t){t.addEventListener("click",function(){var e=t.children[1].children[2].textContent;axios({method:"GET",url:"https://api.themoviedb.org/3/tv/".concat(e,"?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR")}).then(function(e){e={nome:e.data.name,sinopse:e.data.overview,poster:e.data.backdrop_path,data:e.data.release_date,"pontuação":e.data.vote_average};sliderHome.innerHTML="",todasListas.innerHTML="",todasListas.style.padding="0",details.innerHTML="",clickHome.classList.remove("active"),details.innerHTML='<div class="container-grid">\n                                  <div class="details-container">\n                                      <div class="details-content" style="background-image: url(\'https://image.tmdb.org/t/p/original/'.concat(e.poster,"');\">\n                                          <h1>").concat(e.nome,"</h1>\n                                          <p>").concat(e.sinopse,'</p>\n                                          <div class="buttons-slides">\n                                            <div class="buttons">\n                                              <button class="primary-button" id="return-button">Voltar</button>\n                                            </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>'),document.getElementById("return-button").addEventListener("click",function(){})})})})}),axios({method:"GET",url:"https://api.themoviedb.org/3/movie/popular?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1"}).then(function(e){e.data.results.forEach(function(e){var e={nome:e.title,ano:e.release_date.slice(0,4),image:e.poster_path,id:e.id},t=document.createElement("div");t.classList="swiper-slide",t.innerHTML='<div class="card-content">\n                                      <div class="image-mask" style="background-image: url(\'https://image.tmdb.org/t/p/original/'.concat(e.image,'\');">\n                                      </div>\n                                      <div class="info-card">\n                                          <h3>').concat(e.nome,"</h3>\n                                          <span>").concat(e.ano,"</span>\n                                          <small>").concat(e.id,"</small>\n                                      </div>\n                                  </div>"),areaSlideFilmes.appendChild(t)});document.querySelectorAll("#filmes-populares-home .swiper-slide .card-content").forEach(function(t){t.addEventListener("click",function(){var e=t.children[1].children[2].textContent;axios({method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e,"?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR")}).then(function(e){e={nome:e.data.title,sinopse:e.data.overview,poster:e.data.backdrop_path,data:e.data.release_date,"pontuação":e.data.vote_average};sliderHome.innerHTML="",todasListas.innerHTML="",todasListas.style.padding="0",details.innerHTML="",clickHome.classList.remove("active"),details.innerHTML='<div class="container-grid">\n                                  <div class="details-container">\n                                      <div class="details-content" style="background-image: url(\'https://image.tmdb.org/t/p/original/'.concat(e.poster,"');\">\n                                          <h1>").concat(e.nome,"</h1>\n                                          <p>").concat(e.sinopse,'</p>\n                                          <div class="buttons-slides">\n                                            <div class="buttons">\n                                              <button class="primary-button" id="return-button">Voltar</button>\n                                            </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>'),document.getElementById("return-button").addEventListener("click",function(){})})})})}),axios({method:"GET",url:"https://api.themoviedb.org/3/trending/tv/day?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR"}).then(function(e){e.data.results.forEach(function(e){var e={nome:e.name,ano:e.first_air_date.slice(0,4),image:e.poster_path,id:e.id},t=document.createElement("div");t.classList="swiper-slide",t.innerHTML='<div class="card-content">\n                                     <div class="image-mask" style="background-image: url(\'https://image.tmdb.org/t/p/original/'.concat(e.image,'\');">\n                                     </div>\n                                     <div class="info-card">\n                                         <h3>').concat(e.nome,"</h3>\n                                         <span>").concat(e.ano,"</span>\n                                         <small>").concat(e.id,"</small>\n                                     </div>\n                                 </div>"),areaSlideHighTv.appendChild(t)});document.querySelectorAll("#series-alta-home .swiper-slide .card-content").forEach(function(t){t.addEventListener("click",function(){var e=t.children[1].children[2].textContent;axios({method:"GET",url:"https://api.themoviedb.org/3/tv/".concat(e,"?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR")}).then(function(e){e={nome:e.data.name,sinopse:e.data.overview,poster:e.data.backdrop_path,data:e.data.release_date,"pontuação":e.data.vote_average};sliderHome.innerHTML="",todasListas.innerHTML="",todasListas.style.padding="0",details.innerHTML="",clickHome.classList.remove("active"),details.innerHTML='<div class="container-grid">\n                                  <div class="details-container">\n                                      <div class="details-content" style="background-image: url(\'https://image.tmdb.org/t/p/original/'.concat(e.poster,"');\">\n                                          <h1>").concat(e.nome,"</h1>\n                                          <p>").concat(e.sinopse,'</p>\n                                          <div class="buttons-slides">\n                                            <div class="buttons">\n                                              <button class="primary-button" id="return-button">Voltar</button>\n                                            </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>'),document.getElementById("return-button").addEventListener("click",function(){})})})})}),axios({method:"GET",url:"https://api.themoviedb.org/3/trending/movie/day?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR"}).then(function(e){e.data.results.forEach(function(e){var e={nome:e.title,ano:e.release_date.slice(0,4),image:e.poster_path,id:e.id},t=document.createElement("div");t.classList="swiper-slide",t.innerHTML='<div class="card-content">\n                                     <div class="image-mask" style="background-image: url(\'https://image.tmdb.org/t/p/original/'.concat(e.image,'\');">\n                                     </div>\n                                     <div class="info-card">\n                                         <h3>').concat(e.nome,"</h3>\n                                         <span>").concat(e.ano,"</span>\n                                         <small>").concat(e.id,"</small>\n                                     </div>\n                                 </div>"),areaSlideHighFilmes.appendChild(t)});document.querySelectorAll("#filmes-alta-home .swiper-slide .card-content").forEach(function(t){t.addEventListener("click",function(){var e=t.children[1].children[2].textContent;axios({method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e,"?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR")}).then(function(e){e={nome:e.data.title,sinopse:e.data.overview,poster:e.data.backdrop_path,data:e.data.release_date,"pontuação":e.data.vote_average};sliderHome.innerHTML="",todasListas.innerHTML="",todasListas.style.padding="0",details.innerHTML="",clickHome.classList.remove("active"),details.innerHTML='<div class="container-grid">\n                                  <div class="details-container">\n                                      <div class="details-content" style="background-image: url(\'https://image.tmdb.org/t/p/original/'.concat(e.poster,"');\">\n                                          <h1>").concat(e.nome,"</h1>\n                                          <p>").concat(e.sinopse,'</p>\n                                          <div class="buttons-slides">\n                                            <div class="buttons">\n                                              <button class="primary-button" id="return-button">Voltar</button>\n                                            </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>'),document.getElementById("return-button").addEventListener("click",function(){})})})})}),clickHome.classList.add("active")},clickHomePage=function(){clickHome.addEventListener("click",function(e){e.preventDefault,areaSlideTrending.innerHTML="",todasListas.innerHTML="",details.innerHTML="",initListTrendingMovies(),initListPopularTV(),initListPopularMovies(),initListHighTV(),initListHighMovies()})},menuHamburguer=(initHomePage(),clickHomePage(),document.querySelector(".menu-hamburguer")),btnHamburguer=document.getElementById("btn-hamburguer");function toggleClass(e){e.classList.toggle("active")}btnHamburguer.addEventListener("click",function(){toggleClass(menuHamburguer)});var sliderPrincipal=new Swiper("#slider-principal",{loop:!0,loopedSlides:20,observer:!0,shortSwipes:!1,longSwipes:!1,autoHeight:!0,observeParents:!0,effect:"fade",autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),sliderVideos=new Swiper(".slider-videos",{observer:!0,observeParents:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{600:{slidesPerView:1.8,spaceBetween:16},800:{slidesPerView:2.2,spaceBetween:8},1024:{slidesPerView:3.5,spaceBetween:16},1278:{slidesPerView:4.2,spaceBetween:16},1366:{slidesPerView:4.8,spaceBetween:16},1512:{slidesPerView:7.5,spaceBetween:0}}});