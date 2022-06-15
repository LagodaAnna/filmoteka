import MovieAPIService from './js/fetch-films';
import GalleryMarkup from './js/gallery-markup';
import galleryItemTpl from './js/card-template';

// const root = document.querySelector('.js-films-container');
const root = document.querySelector('.splide__list');
const form = document.querySelector('[name="searchForm"]');

const movieAPI = new MovieAPIService();
const galleryMarkup = new GalleryMarkup(root);

movieAPI.fetchMostPopularFilms().then(data => {
  galleryMarkup.data = data;
  galleryMarkup.template = galleryItemTpl;
  galleryMarkup.createPostersMarkup();
  slider();
});

function onSubmit(evt) {
  evt.preventDefault();
  movieAPI.query = evt.target.elements.searchInput.value;
  movieAPI.searchFilmByTitle().then(data => {
    galleryMarkup.data = data;
    galleryMarkup.createPostersMarkup();
    slider();
  });
}

form.addEventListener('submit', onSubmit);

// document.addEventListener('DOMContentLoaded', () => {
//   const splide = new Splide('.splide', {
//     type: 'loop',
//     drag: 'free',
//     focus: 'center',
//     perPage: 3,
//     autoScroll: {
//       speed: 2,
//     },
//   });

//   splide.mount(window.splide.Extensions);
// });

function slider() {
  const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    pagination: false,
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
  });

  splide.mount(window.splide.Extensions);
}
