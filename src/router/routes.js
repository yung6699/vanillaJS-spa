import HomeView from '/src/views/HomeView.js'
import ListView from '/src/views/ListView.js'

export default [
  { path: '/', view: HomeView },
  { path: '/list', view: ListView }
];
