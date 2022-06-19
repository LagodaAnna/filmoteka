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
      } catch (error) {
        console.log(error);
      }

      if (dataFromStorage) {
        console.log(watchedList);
        watchedList.push(...dataFromStorage, data);
      } else {
        watchedList.push(data);
      }
      localStorage.setItem(this.WATCHED_KEY, JSON.stringify(watchedList));
    });
  }

  getFromWatched() {}

  addToQueue() {}

  getFromQueue() {}
}
