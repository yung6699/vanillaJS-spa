import AbstractContainer from "./AbstractContainer.js";
import MovieCard from "/src/components/Card/index.js";
import { toCapitalize } from "/src/utils/text.js";

const MOVIE_CARD = 'MovieCard';

export default class HomeContainer extends AbstractContainer{
  constructor(viewElem, genre = '') {
    super(viewElem);
    this._genre = genre;
    this.beforeMounted();
  }

  beforeMounted () {
    // const target = this.$container;
    // const listBtn = new Button({
    //   target,
    //   btnText: '리스트 보기',
    //   className: 'list-btn',
    //   onclick: () => window.router.navigateTo('/list')
    // });
  }

  setState (state) {
    this._state = state;
    this.render();
  }

  makeMovieItemsHTML (movies) {
    return movies.map((movie) => {
      const movieCard = new MovieCard({ movie });
      this.setComponents(MOVIE_CARD, movieCard);
      return `${movieCard.render()}`
    }).join("")
  }

  render () {
    const target = this.$container;
    const title = (this._genre) ? toCapitalize(this._genre) : 'Top 20';
    const movies = this._state.movies;
    const movieItems = (movies.length > 0) ? this.makeMovieItemsHTML(movies) : '<div>데이터를 가져오는 중......</div>';
    target.innerHTML = `
      <header class="Movie-title">${title} Movies</header>
      <div class="Movie-list">
        ${movieItems}
      </div>  
    `;
    this.mounted();
  }
}
