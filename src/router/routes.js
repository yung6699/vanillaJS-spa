import HomeView from '/src/views/HomeView.js'
// import HistoryView from '/src/views/HistoryView.js'
// import ThrillerView from '/src/views/ThrillerView.js'

export default [
  { path: '/', view: HomeView },
  { path: "/:genre", view: HomeView },
];
