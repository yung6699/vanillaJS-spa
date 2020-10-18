
export default class {
  constructor() {
    this.components = {};
    this.$routerView = window.router.$routerView;
    this.$viewElement = document.createElement('div');
    this.$routerView.appendChild(this.$viewElement);
  }

  setTitle(title) {
    document.title = title;
  }

  setComponents (key, component) {
    this.components[key] = component;
  }
}
