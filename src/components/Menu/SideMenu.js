export default class SideMenu {
  constructor() {
    this.menuList = [
      { title: 'Top 20', path: '/'},
      { title: '역사', path: '/history'},
      { title: '스릴러', path: '/thriller'},
    ]
  }

  render () {
    const navLinks = this.menuList.map(item => {
      return `<div class="nav__link"><a href="${item.path}" data-link>${item.title}</a></div>`
    }).join("");

    return `
     <div class="nav">
       ${navLinks}
     </div>
    `
  }
}
