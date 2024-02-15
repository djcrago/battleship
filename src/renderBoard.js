import gameLoop from './gameLoop';

export default function renderBoard(gameBoard, computer) {
  const newDOMBoard = document.createElement('div');
  newDOMBoard.classList.toggle('board');

  gameBoard.board.forEach((row) => {
    const domRow = document.createElement('div');
    domRow.classList.toggle('row');

    row.forEach((cell) => {
      const domCell = document.createElement('button');
      domCell.classList.toggle('cell');

      // populate domCells with something to indicate presence of ship
      if (!computer) {
        if (typeof cell[0] === 'object') domCell.textContent = 'S';
      }

      const y = gameBoard.board.indexOf(row);
      const x = gameBoard.board[y].indexOf(cell);

      gameBoard.attacksReceived.forEach((attack) => {
        if (attack[0] === x && attack[1] === y) {
          if (typeof cell[0] === 'object') {
            domCell.textContent = 'X';
            domCell.classList.toggle('hit');
          } else domCell.textContent = 'O';
        }
      });

      if (domCell.textContent !== 'O' && domCell.textContent !== 'X') {
        domCell.addEventListener('click', () => {
          gameBoard.receiveAttack([x, y]);
          gameLoop(gameBoard);
        });
      }

      domRow.appendChild(domCell);
    });

    newDOMBoard.appendChild(domRow);
  });

  return newDOMBoard;
}
