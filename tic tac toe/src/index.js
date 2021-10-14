const View = require('./ttt-view')
const Game = require('../ttt_node/game')

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const el = document.querySelector('.ttt')
  const view = new View(game, el)
});
