import player from './player';

const player1 = player();
const playerAI = player(true);

test('Player attack the enemy gameboard', () => {
  expect(player1.takeTurn(playerAI, [0, 0])).toEqual('Miss');
});

test('AI takes a turn', () => {
  expect(playerAI.takeTurn(player1)).toEqual('Miss');
});
