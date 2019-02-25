//@format

class Player {
  constructor(moves, mark) {
    this.moves = moves;
    this.counter = 0;
    this.mark = mark;
  }

  getTile() {
    this.counter++;
    return this.moves[this.counter - 1];
  }
}

module.exports = Player;
