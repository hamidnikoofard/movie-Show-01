const humbergerMenuEL = document.querySelector(".humberger-menu")
const menuListMobileEL = document.querySelector('.menu-list')
const closeMenuEL = document.querySelector('.close-menu')
humbergerMenuEL.addEventListener("click" , ()=> {
    menuListMobileEL.classList.add('active')
})
closeMenuEL.addEventListener('click' , () => {
    menuListMobileEL.classList.remove('active')
})


// slider img subheader
const imgslaider = ["assets/img/5cc6a29a812e0.jpg", "assets/img/5cc6a29a812e0.jpg", "assets/img/5cc6a29a812e0.jpg"]
const sliderImgEL = document.querySelector(".slider-subheader")
imgslaider.forEach((img) => {
    const imgHTML = 
    `
     <div>
        <div class="slider-img ">
            <img src="${img}" alt="">
        </div>
        <div class="title-header-page-2">
            <h1>Avengers : Endgame</h1>
            <p class="d-non">With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.</p>
            <div class="btn-img-slider flex-col">
                <div>
                    <button class="play-btn"><i class="fa-solid fa-play"></i> Play Now</button>
                </div>
                <div>
                    <button class="btn-img"><i class="fa-solid fa-plus"></i></button>
                    <button class="btn-img"><i class="fa-solid fa-thumbs-up"></i></button>
                    <button class="btn-img"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        </div>
    </div>

    `
    sliderImgEL.innerHTML += imgHTML
})
$('.owl-carousel-5').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODNmMTU2MjViZjM0N2E1NWE2NWFlODdkNTM0N2YzNyIsIm5iZiI6MTcyNTc4NzYyNy4wMTMwMjEsInN1YiI6IjY2ZGQ2M2E3MmM3YWVkMmFiNGVlNDNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JIZqeUsbxCAn1WFZHSk9kCgyIok2Fw7J_xGEkzajtMI'
    }
};

const urlGener = "https://api.themoviedb.org/3/genre/movie/list"



const getDataMovies = async (url) => {
    try {
        const response = await fetch(url, options);
        const genre = await response.json();
        console.log(genre); 
        return genre; 
    } catch (error) {
        console.error( error);
    }
}


const movieGenreEL = document.querySelector('.our-genres-box')
const tvGenreEL = document.querySelector('.our-genres-box-tv')
getDataMovies(urlGener).then((genres) => {
    let  generHTML = ''
    genres.genres.forEach((item) => {
        generHTML = `
        <div class="movie-box">
            <img src="assets/img/Container.png" alt="" class="img-width">
            <div class="movie-genre">
                <span>${item.name}</span>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>   
        `
        movieGenreEL.innerHTML += generHTML
        tvGenreEL.innerHTML += generHTML
    })
    $('.owl-carousel-2').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

})

const topTenGenreEL = document.querySelector('.top-10-box')
const topTentvEL = document.querySelector('.top-10-genres-box-tv')
getDataMovies(urlGener).then((genres) => {
    let  generHTML = ''
    genres.genres.slice(0 , 10).forEach((item) => {
        generHTML = `
        <div class="movie-box">
            <img src="assets/img/Container.png" alt="" class="img-width">
            <div class="movie-genre">
                <span>${item.name}</span>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>   
        `
        topTenGenreEL.innerHTML += generHTML
        topTentvEL.innerHTML += generHTML
    })
    $('.owl-carousel-3').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

})



const urlNewReleases = "https://api.themoviedb.org/3/movie/now_playing"
const newReleasesEL = document.querySelector(".new-releases-movie")
getDataMovies(urlNewReleases).then((releases) => {
    let daterelHTML = ""
    releases.results.slice(0 , 6).forEach((movie) => {
        let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        daterelHTML += 
        `
        <div class="movie-box-releases">
            <img src="${posterUrl}" alt="" class="img-size">
            <p class="date-release">Released at ${movie.release_date}</p>
        </div>
        `

        newReleasesEL.innerHTML += daterelHTML
    })

    $('.owl-carousel-4').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

})


const trendingUrl = "https://api.themoviedb.org/3/trending/movie/day"
const trendingMovieEL = document.querySelector(".trending-now-movie")

getDataMovies(trendingUrl).then((releases) => {
    let results = releases.results    
    let daterelHTML = ""
    results.slice(0 , 6).forEach((movie) => {
        let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        daterelHTML += 
        `
        <div class="movie-box-releases">
            <img src="${posterUrl}" alt="" class="img-size">
                        <div class="footer-img">
                <div class="clock">
                    <i class="fa-solid fa-square-poll-vertical"></i>
                    <p>${movie.vote_average}</p> 
                </div>
                <div class="viewer">
                    <i class="fa-solid fa-eye"></i>
                    <p>${Math.floor(movie.popularity)}</p> 
                </div>
            </div>
        </div>
        `

        trendingMovieEL.innerHTML += daterelHTML
    })

    $('.owl-carousel-6').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

})

const urlMustWatch = "https://api.themoviedb.org/3/movie/top_rated"
const mustWatchEL = document.querySelector(".must-watch-movie")

getDataMovies(urlMustWatch).then((releases) => {
    let results = releases.results    
    let daterelHTML = ""
    results.slice(10 , 16).forEach((movie) => {
        let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        daterelHTML += 
        `
        <div class="movie-box-releases">
            <img src="${posterUrl}" alt="" class="img-size">
                        <div class="footer-img">
                <div class="clock">
                    <i class="fa-solid fa-square-poll-vertical"></i>
                    <p>${movie.vote_average}</p> 
                </div>
                <div class="viewer">
                    <i class="fa-solid fa-eye"></i>
                    <p>${Math.floor(movie.popularity)}</p> 
                </div>
            </div>
        </div>
        `

        mustWatchEL.innerHTML += daterelHTML
    })

    $('.owl-carousel-7').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

})



const urlTrendingTv = "https://api.themoviedb.org/3/trending/tv/week"
const trendingTvEL = document.querySelector(".trending-now-tv")
getDataMovies(urlTrendingTv).then((releases) => {
    let results = releases.results    
    let daterelHTML = ""
    results.slice(0 , 6).forEach((movie) => {
        let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        daterelHTML += 
        `
        <div class="movie-box-releases">
            <img src="${posterUrl}" alt="" class="img-size">
                        <div class="footer-img">
                <div class="clock">
                    <i class="fa-solid fa-square-poll-vertical"></i>
                    <p>${movie.vote_average}</p> 
                </div>
                <div class="viewer">
                    <i class="fa-solid fa-eye"></i>
                    <p>${Math.floor(movie.popularity)}</p> 
                </div>
            </div>
        </div>
        `

        trendingTvEL.innerHTML += daterelHTML
    })

    $('.owl-carousel-8').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

})



const urlNewReleasesTv = "https://api.themoviedb.org/3/tv/airing_today"
const newReleasesTvEL =document.querySelector(".new-releases-tv")
getDataMovies(urlNewReleasesTv).then((releases) => {
    let daterelHTML = ""
    releases.results.slice(0 , 6).forEach((movie) => {
        let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        daterelHTML += 
        `
        <div class="movie-box-releases">
            <img src="${posterUrl}" alt="" class="img-size">
            <p class="date-release">Released at ${movie.first_air_date}</p>
        </div>
        `

        newReleasesTvEL.innerHTML += daterelHTML
    })

    $('.owl-carousel-9').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

})


const mustWatchTvEL = document.querySelector(".must-watch-tv")
const urlMustWatchTv = "https://api.themoviedb.org/3/tv/top_rated"

getDataMovies(urlMustWatchTv).then((releases) => {
    let results = releases.results    
    let daterelHTML = ""
    results.slice(10 , 16).forEach((movie) => {
        let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        daterelHTML += 
        `
        <div class="movie-box-releases">
            <img src="${posterUrl}" alt="" class="img-size">
                        <div class="footer-img">
                <div class="clock">
                    <i class="fa-solid fa-square-poll-vertical"></i>
                    <p>${movie.vote_average}</p> 
                </div>
                <div class="viewer">
                    <i class="fa-solid fa-eye"></i>
                    <p>${Math.floor(movie.popularity)}</p> 
                </div>
            </div>
        </div>
        `

        mustWatchTvEL.innerHTML += daterelHTML
    })

    $('.owl-carousel-10').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

})


const movieBtnEl = document.querySelector(".movie-btn")
const tvBtnEl = document.querySelector(".tv-btn")
const movieSectionEL = document.querySelector(".movie-section")
const tvSectionEL = document.querySelector(".tv-section")

tvBtnEl.addEventListener("click" , () => {
    movieSectionEL.classList.remove("active")
    tvSectionEL.classList.add("active")
})
movieBtnEl.addEventListener("click" , () => {
    movieSectionEL.classList.add("active")
    tvSectionEL.classList.remove("active")
})