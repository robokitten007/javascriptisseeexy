const Board = require('../ttt_node/board')
const Game = require('../ttt_node/game')

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    el.appendChild(this.setupBoard())
    this.bindEvents()
  }

  setupBoard() {
    let ul = document.createElement('ul')
    ul.className = 'ttt-board';
     let grids = [0,1,2,3,4,5,6,7,8]
     grids.forEach(grid =>{
       let li = document.createElement('li')
       li.id = `ttt${grid}`;
       li.className = 'ttt-square'
       ul.appendChild(li)

     })
     return ul

  }
  
  bindEvents() {
    let grids = document.querySelector('.ttt-board') 
    grids.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick(e) {
    
    let element = e.target;
    // if(element.tagName !== 'li'){
    //   return;
    // }
    if(element.innerHTML === 'x' || element.innerHTML === 'o'){
        alert('this move is invalid');
        return 
    }
    let pos = Number(element.id.slice(3))
    let row = Math.floor(pos/3)
    let col = pos%3
    element.innerHTML = this.game.currentPlayer

    if(element.innerHTML === 'x'){
      element.classList.add('x');
    }else {
      element.classList.add('0')
    }
    this.game.playMove([row,col])
    this.displayWinner()
  }

  makeMove(square) {}

  displayWinner(){
  if(this.game.winner()){
    alert(`congradulations to ${this.game.winner()}`)
  }
  }

}




module.exports = View;
