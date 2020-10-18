import Button from "../components/Button/index.js";
import AbstractContainer from "./AbstractContainer.js";
import MovieCard from "/src/components/Card/index.js";
import { afterRender } from "/src/utils/components.js";

const MOVIE_CARD = 'MovieCard';

export default class HomeContainer extends AbstractContainer{
  constructor(viewElem) {
    super(viewElem);
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

  mounted () {
    // const { components } = this;
    // afterRender(components);
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
    const movies = this._state.movies;
    const movieItems = (movies.length > 0) ? this.makeMovieItemsHTML(movies) : '<div>검색 결과가 없다.</div>';
    target.innerHTML = `
      <header></header>
      <div class="Movie-list">
        ${movieItems}
      </div>  
    `;
    this.mounted();
  }
}
