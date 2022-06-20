import MovieAPIService from './fetch-films';
import StorageAPI from './library';

const movieAPI = new MovieAPIService();
const storageAPI = new StorageAPI();

export function fillMovieDetailsToModal(id) {
  movieAPI
    .fetchFilmDetails(id)
    .then(data => {
      const modalMarkup = createMovieDetailsMarkup(data);
      document.querySelector('.modal__container').innerHTML = modalMarkup;
      const addToWatchedBtn = document.querySelector('.modal__button-watched');
      addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick);
    })
    .catch(error => console.log(error));
}

function onAddToWatchedBtnClick(evt) {
  console.log(evt.target.closest('.modal__movie-container'));
  const movieId = evt.target.closest('.modal__movie-container').dataset.id;
  console.log(movieId);
  storageAPI.addToWatched(movieId);
  console.log(storageAPI.getFilmsId());
  // const id = evt.target.closest('.modal__movie-container').dataset.id;
  // document.querySelector(`[data-id="${id}"]`);
  // console.log(document.querySelectorAll(`[data-id="${id}"]`));
}

function createMovieDetailsMarkup(movie) {
  const genres =
    movie.genres.length > 0
      ? movie.genres.map(item => item.name).join(', ')
      : 'Unknown';
  return ` <div class="modal__movie-container" data-id="${movie.id}">
  <div class="modal__movie-poster-container">
        <img
          src="${movie.posterURI}"
          alt="${movie.original_title}"
          class="modal__poster"
        />
      </div>
      <div class="modal__movie-description-container">
        <h2 class="modal__movie-title">${movie.original_title}</h2>
        <ul class="modal__movie-list">
          <li class="modal__movie-item">
            <p class="modal__movie-item-right">Vote / Votes</p>
            <p class="modal__movie-item-left">${movie.vote_average} / ${movie.vote_count}</p>
          </li>
          <li class="modal__movie-item">
            <p class="modal__movie-item-right">Popularity</p>
            <p class="modal__movie-item-left">${movie.popularity}</p>
          </li>
          <li class="modal__movie-item">
            <p class="modal__movie-item-right">Original Title</p>
            <p class="modal__movie-item-left modal__movie-left-title">
              ${movie.original_title}
            </p>
          </li>
          <li class="modal__movie-item">
            <p class="modal__movie-item-right">Genre</p>
            <p class="modal__movie-item-left">${genres}</p>
          </li>
          <li class="modal__movie-item">
            <p class="modal__movie-item-right">Trailer</p>
            <p class="modal__movie-item-left">some text</p>
          </li>
        </ul>
        <p class="modal__about-title">ABOUT</p>
        <p class="modal-about-text">
          ${movie.overview}
        </p>
        <div class="modal__buttons__container">
          <button class="modal__button-watched">add to watched</button>
          <button class="modal__button-queue">add to queue</button>
        </div>
      </div>
      </div>`;
}
