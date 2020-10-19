import Router from './router/index.js';
import SideMenu from '/src/components/Menu/SideMenu.js';

const ROUTER_VIEW = 'router-view';

export default class App {
  constructor(appElement) {
    this.render(appElement);
    this.setRouter();
  }

  setRouter () {
    const $routerView = document.querySelector(`.${ROUTER_VIEW}`);
    window.router = new Router($routerView);
  }

  render (appElement) {
    const $appElement = appElement;
    const $sideMenuElement = new SideMenu().render();
    $appElement.innerHTML = `
      <div class="view-wrapper">
        ${$sideMenuElement}
        <div class="${ROUTER_VIEW}"></div>
      </div>
    `;
  }
}
