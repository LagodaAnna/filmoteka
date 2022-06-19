export default function cardTemplate(
  id,
  posterPath,
  title,
  genre,
  releaseDate
) {
  return `<li class="card-item" data-id=${id}>
    <div class="card-image-container"><img src="${posterPath}" alt="${title}" class="film-image" /></div>
      <p class="film-title">${title}</p>
      <p class="film-genre">${[
        genre,
      ]}<span> | </span><span class="film-year">${releaseDate}</span></p>
    </li>`;
}
