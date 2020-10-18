import AbstractComponent from '/src/components/AbstractComponent.js';

export default class Button extends AbstractComponent {
  constructor({ target, btnText = 'Button', className = '', onclick = () => console.log('onclick empty')}) {
    super();
    this._target = target;
    this._btnText = btnText;
    this._onclick = onclick;
    this._className = className;
  }

  mounted () {
    const element = this._target.querySelector(`.${this._className}`);
    element.addEventListener('click', () => this._onclick());
  }

  render () {
     return `<button class="${this._className}">${this._btnText }</button>`;
  }
}
