import { getTriends } from './services.js'


const slides = document.querySelectorAll('.slide');


let currentSlide = 0;
setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide showing';
}


const firstRender = (data) => {
  
  slides.forEach(slide => {
    slide.innerHTML = `
      <div class="container film-week__container" data-rating="${data.vote_average}">
        <div class="film-week__poster-wrapper">
          <img class="film-week__poster"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}"
          alt="${data.name || data.title}">
          <p class="film-week__title_origin">${data.original_name || data.original_title}</p>
        </div>
        <h2 class="film-week__title">${data.name || data.title}</h2>
        <a class="film-week__watch-trailer tube" href="https://youtu.be/V0hagz_8L3M"
        aria-label="смотреть трейлер"></a>
      </div>
    `
  })
}


const renderVideo = async () => {
  const data = await getTriends()
  let resultsFilm = data.results
  
  function cycle(i) {
    setInterval(() => {
      i++
      if (i == resultsFilm.length) {
        i = 0
      }

      cycle(i)
      firstRender(resultsFilm[i])
      return cycle
    }, 5000)  
  }
  cycle(0)  
}



export default renderVideo


