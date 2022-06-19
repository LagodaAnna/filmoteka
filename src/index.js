import MovieAPIService from './js/fetch-films';
import StorageAPI from './js/library';
import GalleryMarkup from './js/gallery-markup';
import galleryItemTpl from './js/card-template';
import { splide, spliderCardTemplate } from './js/splider';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { fillMovieDetailsToModal } from './js/modal';
const bodyScrollLock = require('body-scroll-lock');

const root = document.querySelector('.js-films-container');
const spliderList = document.querySelector('.splide__list');
const form = document.querySelector('[name="searchForm"]');
const libraryBtn = document.querySelector('.js-library-btn');
const homeBtn = document.querySelector('.js-home-btn');
const headerLogo = document.querySelector('.js-header-logo');
const header = document.querySelector('.header');
const libraryBtnContainer = document.querySelector('.js-library-buttons');
const backdrop = document.querySelector('.backdrop');
const modalCloseBtn = document.querySelector('.modal__close-btn');

const movieAPI = new MovieAPIService();
const storageAPI = new StorageAPI();
const spliderMarkup = new GalleryMarkup(spliderList);
const homePageMarkup = new GalleryMarkup(root);

libraryBtn.addEventListener('click', onLibraryBtnClick);
homeBtn.addEventListener('click', onHomeBtnClick);
headerLogo.addEventListener('click', onHomeBtnClick);
form.addEventListener('submit', onSubmit);
root.addEventListener('click', onCardClick);
spliderList.addEventListener('click', onCardClick);
modalCloseBtn.addEventListener('click', modalClose);
backdrop.addEventListener('click', onBackDropClick);

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

movieAPI
  .getMostPopularFilms()
  .then(data => {
    spliderMarkup.data = data;
    spliderMarkup.template = spliderCardTemplate;
    spliderMarkup.createPostersMarkup();
    splide.mount({ AutoScroll });
  })
  .catch(error => console.log(error));

movieAPI
  .getMostPopularFilms()
  .then(data => {
    homePageMarkup.data = data;
    homePageMarkup.template = galleryItemTpl;
    homePageMarkup.createPostersMarkup();
  })
  .catch(error => console.log(error));

function onSubmit(evt) {
  evt.preventDefault();
  movieAPI.query = evt.target.elements.searchInput.value;
  movieAPI
    .getFilmsByTitle()
    .then(data => {
      homePageMarkup.data = data;
      homePageMarkup.createPostersMarkup();
    })
    .catch(error => console.log(error));
}

function onCardClick(evt) {
  if (!!evt.target.closest('li')) {
    const id = evt.target.closest('li').dataset.id;
    fillMovieDetailsToModal(id);
    backdrop.classList.remove('is-hidden');
    bodyScrollLock.disableBodyScroll(document.body);
    splide.Components.AutoScroll.pause();
    storageAPI.addToWatched(id);
  }
}

function modalClose() {
  backdrop.classList.add('is-hidden');
  bodyScrollLock.enableBodyScroll(document.body);
  splide.Components.AutoScroll.play();
}

function onBackDropClick(evt) {
  if (evt.target.classList.contains('backdrop')) {
    modalClose();
  }
}

// movieAPI.fetchMostPopularFilms().then(res => console.log(res));

// document.addEventListener('DOMContentLoaded', () => {

// movieAPI.fetchFilmDetails(615469).then(console.log);
//Angel the Kickboxer
