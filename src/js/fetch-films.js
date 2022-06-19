export default class MovieAPIService {
  constructor() {
    this.API_KEY = 'eb27e8cbb5d4491c458165c6bd3dc0ba';
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.POPULAR_URL = `${this.BASE_URL}trending/movie/day?api_key=${this.API_KEY}`;
    this.SEARCH_URL = `${this.BASE_URL}search/movie?api_key=${this.API_KEY}`;
    this.BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
    this.GENRE_URL = `${this.BASE_URL}genre/movie/list?api_key=${this.API_KEY}&language=en-US`;
    this._query = '';
    this._genres = {};
  }

  async fetchMostPopularFilms() {
    const response = await fetch(`${this.POPULAR_URL}`);
    const data = await response.json();
    return data;
  }

  async searchFilmByTitle() {
    const response = await fetch(`${this.SEARCH_URL}&query=${this._query}`);
    const data = await response.json();
    return data;
  }

  async fetchFilmDetails(movieID) {
    const response = await fetch(
      `${this.BASE_URL}movie/${movieID}?api_key=${this.API_KEY}&language=en-US`
    );
    const data = await response.json();
    return {
      ...data,
      posterURI: `${this.BASE_IMG_URL}${data.poster_path}`,
    };
  }

  //возвращает данные с постером
  async getMostPopularFilms() {
    const movieList = await this.fetchMostPopularFilms();
    return this.#updateDataImage(movieList);
  }

  //возвращает данные с постером
  async getFilmsByTitle() {
    const movieList = await this.searchFilmByTitle();
    return this.#updateDataImage(movieList);
  }

  //модифицирует адрес постера, чтобы он подгружался
  #updateDataImage(data) {
    return data.results.map(item => {
      return {
        ...item,
        posterURI: `${this.BASE_IMG_URL}${item.poster_path}`,
      };
    });
  }

  async fetchGenres() {
    const response = await fetch(this.GENRE_URL);
    const data = await response.json();
    return data;
  }

  get query() {
    return this._query;
  }

  set query(newQuery) {
    this._query = newQuery;
  }
}
