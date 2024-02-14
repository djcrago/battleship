import gameboard from './gameboard';
import player from './player';

const player1 = player('1');
const player1Board = gameboard();
const playerAI = player('AI', true);
const playerAIBoard = gameboard();

test('Player attack the enemy gameboard', () => {
  expect(player1.takeTurn(playerAIBoard, [0, 0])).toEqual('Miss');
});

test('AI takes a turn', () => {
  expect(playerAI.takeTurn(player1Board)).toEqual('Miss');
});
