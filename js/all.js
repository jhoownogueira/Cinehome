"use strict";var areaSlideTrending=document.getElementById("trending-home"),areaSlideTV=document.getElementById("series-populares-home"),areaSlideFilmes=document.getElementById("filmes-populares-home"),initListTrendingMovies=function(){axios({method:"GET",url:"https://api.themoviedb.org/3/trending/movie/day?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR"}).then(function(e){e=e.data.results;console.log(e),e.forEach(function(e){var e={nome:e.title,info:e.overview,image:e.poster_path},i=document.createElement("div");i.classList="swiper-slide",i.style.backgroundImage="url('https://image.tmdb.org/t/p/original/".concat(e.image,"')"),i.innerHTML="<h1>".concat(e.nome,"</h1>\n                               <p>").concat(e.info,'</p>\n                               <div class="buttons-slides">\n                                    <div class="buttons">\n                                        <button class="primary-button">Assista agora</button>\n                                        <button class="secondary-button">\n                                            <img src="img/icon-favoritar.svg" alt="">\n                                        </button>\n                                    </div>\n                                </div>'),areaSlideTrending.appendChild(i)})})},initListPopularTV=function(){axios({method:"GET",url:"https://api.themoviedb.org/3/tv/popular?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1"}).then(function(e){e=e.data.results;console.log(e),e.forEach(function(e){var e={nome:e.name,ano:e.first_air_date.slice(0,4),image:e.poster_path},i=document.createElement("div");i.classList="swiper-slide",i.innerHTML='<div class="card-content">\n                                    <div class="image-mask" style="background-image: url(\'https://image.tmdb.org/t/p/original/'.concat(e.image,'\');">\n                                    </div>\n                                    <div class="info-card">\n                                        <h3>').concat(e.nome,"</h3>\n                                        <span>").concat(e.ano,"</span>\n                                    </div>\n                                </div>"),areaSlideTV.appendChild(i)})})},initListPopularMovies=function(){axios({method:"GET",url:"https://api.themoviedb.org/3/movie/popular?api_key=93f7813158e109c144b2cfefacb802be&language=pt-BR&page=1"}).then(function(e){e=e.data.results;console.log(e),e.forEach(function(e){var e={nome:e.title,ano:e.release_date.slice(0,4),image:e.poster_path},i=document.createElement("div");i.classList="swiper-slide",i.innerHTML='<div class="card-content">\n                                    <div class="image-mask" style="background-image: url(\'https://image.tmdb.org/t/p/original/'.concat(e.image,'\');">\n                                    </div>\n                                    <div class="info-card">\n                                        <h3>').concat(e.nome,"</h3>\n                                        <span>").concat(e.ano,"</span>\n                                    </div>\n                                </div>"),areaSlideFilmes.appendChild(i)})})},menuHamburguer=(initListTrendingMovies(),initListPopularTV(),initListPopularMovies(),document.querySelector(".menu-hamburguer")),btnHamburguer=document.getElementById("btn-hamburguer");function toggleClass(e){e.classList.toggle("active")}btnHamburguer.addEventListener("click",function(){toggleClass(menuHamburguer)});var sliderPrincipal=new Swiper("#slider-principal",{loop:!0,loopedSlides:20,observer:!0,shortSwipes:!1,longSwipes:!1,autoHeight:!0,observeParents:!0,effect:"fade",autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),sliderVideos=new Swiper(".slider-videos",{observer:!0,observeParents:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{600:{slidesPerView:1.8,spaceBetween:16},800:{slidesPerView:2.2,spaceBetween:8},1024:{slidesPerView:3.5,spaceBetween:16},1278:{slidesPerView:4.2,spaceBetween:16},1366:{slidesPerView:4.8,spaceBetween:16},1512:{slidesPerView:7.5,spaceBetween:0}}});