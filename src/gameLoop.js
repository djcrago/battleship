import displayBoard from './displayBoard';
import player from './player';

export default function gameLoop() {
  const player1 = player('Computer', 'computer');
  const player2 = player('Player 1');

  player1.playerGameboard.placeShip([0, 0, 4, 0]);
  player1.playerGameboard.placeShip([3, 2, 6, 2]);
  player1.playerGameboard.placeShip([1, 3, 1, 5]);
  player1.playerGameboard.placeShip([5, 7, 5, 8]);
  player1.playerGameboard.placeShip([7, 7, 9, 7]);

  player2.playerGameboard.placeShip([1, 2, 1, 4]);
  player2.playerGameboard.placeShip([9, 9, 5, 9]);
  player2.playerGameboard.placeShip([6, 2, 6, 5]);
  player2.playerGameboard.placeShip([7, 7, 8, 7]);
  player2.playerGameboard.placeShip([4, 1, 4, 3]);

  displayBoard(player1);

  displayBoard(player2);
}
