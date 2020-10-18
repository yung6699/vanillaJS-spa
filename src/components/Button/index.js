export default class Button {
  constructor({ target, onclick = () => console.log('onclick empty')}) {
    const $parent = target;
    this._onclick = onclick;

    const $box = document.createElement('div');
    $parent.appendChild($box);
    this.targetElement = $box;
  }

  render () {
    this.targetElement.innerHTML = (`<button class="add-todo-btn">ADD</button>`);
    this.targetElement.querySelector( '.add-todo-btn' ).addEventListener('click', () => {
      this._onclick();
    });
  }
}
