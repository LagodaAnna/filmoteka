export default class MovieAPIService {
  constructor() {
    this.API_KEY = 'eb27e8cbb5d4491c458165c6bd3dc0ba';
    this.POPULAR_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.API_KEY}`;
    this.SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}`;
    this.BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
    this._query = '';
  }

  async fetchMostPopularFilms() {
    const response = await fetch(`${this.POPULAR_URL}`);
    const data = await response.json();
    return this.#updateDataImage(data);
  }

  async searchFilmByTitle() {
    const response = await fetch(`${this.SEARCH_URL}&query=${this._query}`);
    const data = await response.json();
    return this.#updateDataImage(data);
  }

  #updateDataImage(data) {
    return data.results.map(item => {
      return {
        ...item,
        posterURI: `${this.BASE_IMG_URL}${item.poster_path}`,
      };
    });
  }

  get query() {
    return this._query;
  }

  set query(newQuery) {
    this._query = newQuery;
  }
}
