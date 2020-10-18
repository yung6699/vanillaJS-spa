export default class {
  constructor(viewElem) {
    this.$target = viewElem;
    this.$container = document.createElement('div');
    this.$container.classList.add('container');
    this.$target.appendChild(this.$container);
    this.components = {}
  }

  setComponents (key, component) {
    this.components[key] = component;
  }

}
