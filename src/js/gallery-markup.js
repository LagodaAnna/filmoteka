export default class GalleryMarkup {
  #data;
  #Template;

  constructor(root) {
    this.root = root;
    this.#data = [];
    this.#Template = {};
  }

  createPostersMarkup() {
    const markup = this.#data
      .map(item => {
        return this.#Template(
          item.posterURI,
          item.original_title,
          item.genre_ids,
          item.release_date
        );
      })
      .join('');

    this.root.innerHTML = markup;
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
