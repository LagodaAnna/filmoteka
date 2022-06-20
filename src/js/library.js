import MovieAPIService from './fetch-films';
const movieAPI = new MovieAPIService();

export default class StorageAPI {
  constructor() {
    this.WATCHED_KEY = 'watched';
    this.QUEUE_KEY = 'queue';
  }

  addToWatched(id) {
    movieAPI.fetchFilmDetails(id).then(data => {
      let watchedList = [];
      let dataFromStorage;
      try {
        dataFromStorage = JSON.parse(localStorage.getItem(this.WATCHED_KEY));
        if (dataFromStorage) {
          console.log(watchedList);
          watchedList.push(...dataFromStorage, data);
        } else {
          watchedList.push(data);
        }
        localStorage.setItem(this.WATCHED_KEY, JSON.stringify(watchedList));
      } catch (error) {
        console.log(error);
      }
    });
  }

  deleteFromWatched(id) {
    try {
      let listWatched = JSON.parse(localStorage.getItem(this.WATCHED_KEY));
      let newListWatched = [];
      if (listWatched) {
        newListWatched = listWatched.filter(movie => movie.id !== id);
        localStorage.setItem(this.WATCHED_KEY, JSON.stringify(newListWatched));
      }
    } catch (error) {
      console.log(error);
    }
  }

  getFromWatched() {
    try {
      let listWatched = JSON.parse(localStorage.getItem(this.WATCHED_KEY));
      console.log(listWatched);
      return listWatched;
    } catch (error) {
      console.log(error);
    }
  }

  getFilmsId() {
    let filmsId = [];
    try {
      let listWatched = JSON.parse(localStorage.getItem(this.WATCHED_KEY));
      if (listWatched) {
        filmsId = listWatched.map(movie => movie.id);
        return filmsId;
      }
    } catch (error) {
      console.log(error);
    }
  }

  addToQueue() {}

  getFromQueue() {}
}
