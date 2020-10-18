import Router from './router/index.js';

const ROUTER_VIEW = 'router-view';

export default class App {
  constructor(appElement) {
    const $appElement = appElement;
    const $routerView = document.createElement('div');
    $routerView.classList.add(ROUTER_VIEW);
    $appElement.appendChild($routerView);
    this.setRouter($routerView);
  }

  setRouter (routeViewElem) {
    window.router = new Router(routeViewElem);
  }

  render () {

  }
}
