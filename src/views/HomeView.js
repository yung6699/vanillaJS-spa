import AbstractView from "./AbstractView.js";
import HomeContainer from "../containers/HomeContainer.js";

const HOME_VIEW_TITLE = 'Home';

export default class HomeView extends AbstractView{
  constructor(params) {
    super();
    this.init();
  }

  init () {
    const target = this.$viewElement;
    this.setTitle(HOME_VIEW_TITLE);
    this.setComponents('homeContainer', new HomeContainer(target));
  }


  render () {
    const { homeContainer } = this.components;
    homeContainer.render();
  }
}
