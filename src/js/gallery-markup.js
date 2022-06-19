import genres from './genres.json';
const poster = require('../images/no-poster.png');

//конвертирует массив объектов жанров в объект
const convertGenres = genres.genres.reduce((acc, item) => {
  return {
    ...acc,
    [item.id]: item.name,
  };
}, {});

export default class GalleryMarkup {
  #data;
  #Template;

  //поля: селектор для отрисовки, данные из АПИ и шаблон для отрисовки
  constructor(root) {
    this.root = root;
    this.#data = [];
    this.#Template = {};
  }

  createPostersMarkup() {
    //при отрисовке идет проверка, если не пришло инфо о дате или постер - подменяется  значением по умолчанию
    const markup = this.#data
      .map(item => {
        item.release_date = item.release_date?.slice(0, 4) || 'Unknown';
        if (item.posterURI.slice(-4) === 'null') {
          item.posterURI = poster;
        }
        return this.#Template(
          item.id,
          item.posterURI,
          item.original_title,
          this.updateGenres(item.genre_ids),
          item.release_date
        );
      })
      .join('');
    this.root.innerHTML = markup;
  }

  updateGenres(genres_id) {
    if (!genres_id.length) {
      return 'Unknown';
    }

    const genresList = [];
    for (let i = 0; i < genres_id.length; i++) {
      if (genresList.length < 2) {
        genresList.push(convertGenres[genres_id[i]]);
      } else {
        genresList.push('other');
        break;
      }
    }
    return genresList.join(', ');
  }

  set data(newData) {
    this.#data = newData;
  }

  get data() {
    return this.#data;
  }

  set template(newTpl) {
    this.#Template = newTpl;
  }

  get template() {
    return this.#Template;
  }
}

//ROGUES FROM THE NORTH
