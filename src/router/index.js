import Routes from './routes.js'
import { eventHandler } from '/src/utils/event.js';

export default class Router {
  constructor(routerViewElm) {
    this.$routerView = routerViewElm;
    this.routes = Routes;
    this.init();
  }

  init () {
    window.addEventListener("popstate", this.routing.bind(this));
    document.addEventListener("DOMContentLoaded", () => {
      eventHandler(this);
      this.routing();
    });
  }

  removeAll () {
    const cell = document.querySelector(".router-view");
    while ( cell.hasChildNodes() ) { cell.removeChild( cell.firstChild ); }
  }

  routing (){
    const potentialMatches = this.routes.map(route => {
      const result = location.pathname.match(this.pathToRegex(route.path));
      return { route, result };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    // 매칭되는 라우터가 없을 경우 '/' 경로로 지
    if (!match) match = { route: this.routes[0], result: [ window.location.pathname ] };

    this.removeAll();

    const view = new match.route.view(this.getParams(match));
    view.render();
  };

  navigateTo (url) {
    window.history.pushState(null, null, url);
    this.routing();
  }

  pathToRegex (path) {
    return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
  }

  getParams (match) {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    return Object.fromEntries(keys.map((key, i) => [key, values[i]] ));
  }
}

