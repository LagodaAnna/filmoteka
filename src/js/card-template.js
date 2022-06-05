export default function cardTemplate(posterPath, title, arrGenre, releaseDate) {
  return `<div class="card-container">
      <img src="${posterPath}" alt="${title}" class="film-image" />
      <p class="film-title">${title}</p>
      <p class="film-genre">${[
        ...arrGenre,
      ]}<span> | </span><span class="film-year">${releaseDate}</span></p>
    </div>`;
}
