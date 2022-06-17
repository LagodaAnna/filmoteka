import MovieAPIService from './js/fetch-films';
import GalleryMarkup from './js/gallery-markup';
import galleryItemTpl from './js/card-template';
import { splide, spliderCardTemplate } from './js/splider';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const root = document.querySelector('.js-films-container');
const spliderList = document.querySelector('.splide__list');
const form = document.querySelector('[name="searchForm"]');
const libraryBtn = document.querySelector('.js-library-btn');
const homeBtn = document.querySelector('.js-home-btn');
const headerLogo = document.querySelector('.js-header-logo');
const header = document.querySelector('.header');
const libraryBtnContainer = document.querySelector('.js-library-buttons');

libraryBtn.addEventListener('click', onLibraryBtnClick);
homeBtn.addEventListener('click', onHomeBtnClick);
headerLogo.addEventListener('click', onHomeBtnClick);

function onLibraryBtnClick() {
  form.classList.add('visually-hidden');
  header.classList.remove('home');
  header.classList.add('library');
  homeBtn.classList.remove('current-btn');
  libraryBtn.classList.add('current-btn');
  libraryBtnContainer.classList.remove('visually-hidden');
}

function onHomeBtnClick() {
  form.classList.remove('visually-hidden');
  header.classList.remove('library');
  header.classList.add('home');
  libraryBtn.classList.remove('current-btn');
  homeBtn.classList.add('current-btn');
  libraryBtnContainer.classList.add('visually-hidden');
}

const movieAPI = new MovieAPIService();
const spliderMarkup = new GalleryMarkup(spliderList);
const homePageMarkup = new GalleryMarkup(root);

movieAPI
  .fetchMostPopularFilms()
  .then(data => {
    spliderMarkup.data = data;
    spliderMarkup.template = spliderCardTemplate;
    spliderMarkup.createPostersMarkup();
    splide.mount({ AutoScroll });
  })
  .catch(error => console.log(error));

movieAPI
  .fetchMostPopularFilms()
  .then(data => {
    homePageMarkup.data = data;
    homePageMarkup.template = galleryItemTpl;
    homePageMarkup.createPostersMarkup();
  })
  .catch(error => console.log(error));

// function onSubmit(evt) {
//   evt.preventDefault();
//   movieAPI.query = evt.target.elements.searchInput.value;
//   movieAPI.searchFilmByTitle().then(data => {
//     galleryMarkup.data = data;
//     galleryMarkup.createPostersMarkup();
//     // slider();
//   });
// }

// form.addEventListener('submit', onSubmit);

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

// function slider() {
//   const splide = new Splide('.splide', {
//     type: 'loop',
//     drag: 'free',
//     focus: 'center',
//     pagination: false,
//     perPage: 3,
//     autoScroll: {
//       speed: 1,
//     },
//   });

//   splide.mount(window.splide.Extensions);
// }
