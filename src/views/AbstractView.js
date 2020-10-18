export default class {
  constructor() {
    this.$routerView = window.router.$routerView;
    this.$viewContainer = document.createElement('div');
    this.$routerView.appendChild(this.$viewContainer);
  }

  setTitle(title) {
    document.title = title;
  }

}
