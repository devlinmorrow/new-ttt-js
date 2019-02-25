//@format

const Board = require('./Board');

describe('Board', () => {
  it('makes a new grid', () => {
    board = new Board();

    expect(board.grid).toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });

  it('sets mark', () => {
    board = new Board();

    board.setMark(1, 'X');

    expect(board.grid[0]).toEqual('X');
  });

  it('detects no draw', () => {
    board = new Board();

    expect(board.isDraw()).toEqual(false);
  });

  it('detects draw', () => {
    board = new Board();

    board.setMark(2, 'X');
    board.setMark(3, 'X');
    board.setMark(4, 'X');
    board.setMark(7, 'X');
    board.setMark(9, 'X');
    board.setMark(1, 'O');
    board.setMark(5, 'O');
    board.setMark(6, 'O');
    board.setMark(8, 'O');

    expect(board.isDraw()).toEqual(true);
  });
});
