const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODNmMTU2MjViZjM0N2E1NWE2NWFlODdkNTM0N2YzNyIsIm5iZiI6MTcyNTc4NzYyNy4wMTMwMjEsInN1YiI6IjY2ZGQ2M2E3MmM3YWVkMmFiNGVlNDNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JIZqeUsbxCAn1WFZHSk9kCgyIok2Fw7J_xGEkzajtMI'
    }
};

const getDataMovies = async () => {
    try {
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list", options);
        const genre = await response.json();
        console.log(genre);
        
        return genre.genres; 
    } catch (error) {
        console.error( error);
    }
}


const movieGenreEL = document.querySelector('.explore-movie-box')

getDataMovies().then((genres) => {
    let  generHTML = ''
    genres.forEach((item) => {
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
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
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


const humbergerMenuEL = document.querySelector(".humberger-menu")
const menuListMobileEL = document.querySelector('.menu-list')
const closeMenuEL = document.querySelector('.close-menu')
humbergerMenuEL.addEventListener("click" , ()=> {
    menuListMobileEL.classList.add('active')
})
closeMenuEL.addEventListener('click' , () => {
    menuListMobileEL.classList.remove('active')
})


let BTNEL = document.querySelectorAll('.faq-button');
let answer = document.querySelectorAll('.an');

BTNEL.forEach((BTN, index) => {
  BTN.addEventListener('click', () => {
    answer[index].classList.toggle('answer');
  });
});