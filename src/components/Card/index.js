import AbstractComponent from "../AbstractComponent.js";

export default class Card extends AbstractComponent{
  constructor({ movie }) {
    super();
    this.movie = movie;
  }

  render () {
    const {title, medium_cover_image: poster, genres = [], synopsis} = this.movie;
    const genresString = genres.map( (genre) => `<span class="Movie__Genre">${genre}</span>`).join('');
    return `
     <div class="Movie">
      <div class="Movie__Column">
        <img src=${poster} alt=${title} title=${title} class="Movie__Poster"/>
      </div>
      <div class="Movie__Column">
        <h1>${title}</h1>
        <div class="Movie__Genres">
          ${genresString}
        </div>
        <div class="Movie__Synopsis">
           ${synopsis}
        </div>
      </div>
    </div>
    `
  }
}
