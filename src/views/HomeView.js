import AbstractView from "./AbstractView.js";
import Button from "../components/Button/index.js";

const HOME_VIEW_TITLE = 'Home';

export default class HomeView extends AbstractView{
  constructor(params) {
    super();
    this.setTitle(HOME_VIEW_TITLE);
    this.setComponents();
  }

  setComponents () {
    this.goToListbutton = new Button({ target: this.$viewContainer, onclick: () => window.router.navigateTo('/list') });
  }

  render () {
    // this.$viewContainer.innerHTML = `<h1>Home View</h1>`
    this.goToListbutton.render();
  }
}
