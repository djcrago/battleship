import displayBoard from './displayBoard';
import gameboard from './gameboard';
import player from './player';

export default function gameLoop() {
  const player1 = player('Computer', 'computer');
  const player1GameBoard = gameboard();
  const player2 = player('Player 1');
  const player2GameBoard = gameboard();

  player1GameBoard.placeShip([0, 0, 4, 0]);
  player1GameBoard.placeShip([3, 2, 6, 2]);
  player1GameBoard.placeShip([1, 3, 1, 5]);
  player1GameBoard.placeShip([5, 7, 5, 8]);
  player1GameBoard.placeShip([7, 7, 9, 7]);

  player2GameBoard.placeShip([1, 2, 1, 4]);
  player2GameBoard.placeShip([9, 9, 5, 9]);
  player2GameBoard.placeShip([6, 2, 6, 5]);
  player2GameBoard.placeShip([7, 7, 8, 7]);
  player2GameBoard.placeShip([4, 1, 4, 3]);

  displayBoard(player1GameBoard);

  displayBoard(player2GameBoard);
}
