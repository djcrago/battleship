import renderBoards from './renderBoards';
import renderMessage from './renderMessage';
import gameboard from './gameboard';
import player from './player';
import displayNames from './displayNames';

const player1 = player('Player 1');
const player2 = player('Computer', 'computer');

const player1GameBoard = gameboard();
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

export default function gameLoop(currentPlayer = player1) {
  renderBoards([player2GameBoard, player1GameBoard]);
  displayNames(player1, player2);

  let message = `${currentPlayer.name}'s turn.`;
  renderMessage(message);

  if (currentPlayer === player2GameBoard) {
    message = `${player2.name}'s turn.`;
    renderMessage(message);
    if (player2GameBoard.fleetIsSunk()) {
      message = `${player1.name} wins!`;
      return renderMessage(message);
    }

    setTimeout(() => {
      player2.takeTurn(player1GameBoard);
      gameLoop(player1);
    }, 500);
  }

  if (currentPlayer === player1GameBoard) {
    if (player1GameBoard.fleetIsSunk()) {
      message = `${player2.name} is the Winner`;
      return renderMessage(message);
    }
  }
}
