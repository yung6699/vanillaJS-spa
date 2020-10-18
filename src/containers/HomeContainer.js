import Button from "../components/Button/index.js";
import AbstractContainer from "./AbstractContainer.js";

export default class HomeContainer extends AbstractContainer{
  constructor(viewElem) {
    super(viewElem);
    this.init();
  }

  init () {
    const target = this.$container;
    this.setComponents('button', new Button({
      target,
      onclick: () => window.router.navigateTo('/list')
    }));
  }

  render () {
    const { button } = this.components;
    button.render();
  }
}
