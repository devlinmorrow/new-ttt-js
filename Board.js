//@format

class Board {
  constructor() {
    this.grid = this.makeGrid();
  }

  makeGrid() {
    let grid = new Array(9);
    return grid.fill(' ');
  }

  setMark(position, mark) {
    this.grid[position - 1] = mark;
  }

  isDraw() {
    return !this.grid.includes(' ');
  }
}

module.exports = Board;
