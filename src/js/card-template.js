export default function cardTemplate(posterPath, title, arrGenre, releaseDate) {
  return `<li class="card-item">
    <div class="card-image-container"><img src="${posterPath}" alt="${title}" class="film-image" /></div>
      <p class="film-title">${title}</p>
      <p class="film-genre">${[
        ...arrGenre,
      ]}<span> | </span><span class="film-year">${releaseDate}</span></p>
    </li>`;
}
