export default class SideMenu {
  constructor() {
    this.menuList = [
      { title: 'Top 20', path: '/'},
      { title: 'History', path: '/history'},
      { title: 'Fantasy', path: '/fantasy' },
      { title: 'Thriller', path: '/thriller'},
      { title: 'Drama', path: '/drama'},
      { title: 'Action', path: '/action'},
      { title: 'Comedy', path: '/comedy'},
      { title: 'Crime', path: '/crime'},
      { title: 'Animation', path: '/animation'},
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
