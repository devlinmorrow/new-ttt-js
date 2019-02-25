//@format

const Board = require('./board');

class Game {
  constructor(playerOne, playerTwo) {
    this.board = new Board();
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.activePlayer = this.playerOne;
  }

  playAllTurns() {
    while (!this.isOver()) {
      this.playTurn();
      this.alternatePlayer();
    }
  }

  playTurn() {
    const choice = this.activePlayer.getTile();
    this.board.setMark(choice, this.activePlayer.mark);
  }

  alternatePlayer() {
    this.activePlayer == this.playerOne
      ? (this.activePlayer = this.playerTwo)
      : (this.activePlayer = this.playerOne);
  }

  isOver() {
    return this.board.isDraw();
  }
}

module.exports = Game;
