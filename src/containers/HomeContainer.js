import Button from "../components/Button";

class HomeContainer {
  constructor() {
    const viewContainer = document.createElement('div');
    this.button = new Button({ target: viewContainer, onclick: () => window.router.navigateTo('/list') });
    target.appendChild(viewContainer)

  }
}
