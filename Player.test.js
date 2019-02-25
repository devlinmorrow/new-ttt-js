//@format

const Player = require('./Player');

describe('Player', () => {
  it('return tile choice', () => {
    player = new Player([1, 2, 3], 'X');

    expect(player.getTile()).toEqual(1);
    expect(player.getTile()).toEqual(2);
  });
});
