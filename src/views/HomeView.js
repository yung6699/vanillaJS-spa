import AbstractView from "./AbstractView.js";
import HomeContainer from "../containers/HomeContainer.js";
import { fetchMovies } from '/src/api/index.js'
import { propsStateToComponents } from '/src/utils/components.js'

const HOME_VIEW_TITLE = 'Home';
const MOVIES = 'movies';
const HOME_CONTAINER = 'homeContainer';

export default class HomeView extends AbstractView{
  constructor(params) {
    super();

    this.setTitle(HOME_VIEW_TITLE);
    this.initComponent();
    this.initState();
    this.fetchMovies();
    propsStateToComponents(this.components, this.state);
  }

  initComponent () {
    const target = this.$viewElement;
    this.setComponents(HOME_CONTAINER, new HomeContainer(target));
  }

  initState () {
    this.state = {
      movies: []
    };
  }

  setState (key, value) {
    this.state[key] = value;
    propsStateToComponents(this.components, this.state);
  }

  async fetchMovies () {
    const { data } = await fetchMovies({ pageNum: 1 });
    const { movies } = data;
    this.setState(MOVIES, [ ...movies ])
  }

  render () {
    const { homeContainer } = this.components;
    homeContainer.render();
  }
}
