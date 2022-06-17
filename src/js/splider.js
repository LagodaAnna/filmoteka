import { Splide } from '@splidejs/splide';

export const splide = new Splide('.splide', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage: 10,
  autoScroll: {
    speed: 1,
  },
});

export function spliderCardTemplate(posterPath, title, arrGenre, releaseDate) {
  return `<li class="splide__slide">
     <div class ="splider-image-container"> <img src="${posterPath}" alt="${title}" class="splider-film-image" /></div>
      <p class="splider-film-title">${title}</p>
      <p class="splider-film-genre">${[
        ...arrGenre,
      ]}<span> | </span><span class="splider-film-year">${releaseDate}</span></p>
    </li>`;
}
