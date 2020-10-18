import AbstractView from "./AbstractView.js";

const LIST_VIEW_TITLE = 'List';

export default class ListView extends AbstractView{
  constructor(params) {
    super();
    this.setTitle(LIST_VIEW_TITLE);
  }

  render () {
    this.$viewContainer.innerHTML = `<h1>Test</h1>`
  }

}
