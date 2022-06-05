import MovieAPIService from './js/fetch-films';
import GalleryMarkup from './js/gallery-markup';
import galleryItemTpl from './js/card-template';

const root = document.querySelector('.js-films-container');
const form = document.querySelector('[name="searchForm"]');

const movieAPI = new MovieAPIService();
const galleryMarkup = new GalleryMarkup(root);

movieAPI.fetchMostPopularFilms().then(data => {
  galleryMarkup.data = data;
  galleryMarkup.template = galleryItemTpl;
  galleryMarkup.createPostersMarkup();
});

function onSubmit(evt) {
  evt.preventDefault();
  movieAPI.query = evt.target.elements.searchInput.value;
  movieAPI.searchFilmByTitle().then(data => {
    galleryMarkup.data = data;
    galleryMarkup.createPostersMarkup();
  });
}

form.addEventListener('submit', onSubmit);
