import gameLoop from './gameLoop';

export default function renderBoards(gameBoards) {
  const domGameboards = document.querySelector('.gameboards');
  domGameboards.innerHTML = '';

  gameBoards.forEach((gameBoard) => {
    const newDOMBoard = document.createElement('div');
    newDOMBoard.classList.toggle('board');

    gameBoard.board.forEach((row) => {
      const domRow = document.createElement('div');
      domRow.classList.toggle('row');

      row.forEach((cell) => {
        const domCell = document.createElement('button');
        domCell.classList.toggle('cell');

        // populate domCells with something to indicate presence of ship
        if (typeof cell[0] === 'object') domCell.textContent = 'S';

        const y = gameBoard.board.indexOf(row);
        const x = gameBoard.board[y].indexOf(cell);

        gameBoard.attacksReceived.forEach((attack) => {
          if (attack[0] === x && attack[1] === y) {
            if (domCell.textContent === 'S') domCell.textContent = 'X';
            else domCell.textContent = 'O';
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

    domGameboards.appendChild(newDOMBoard);
  });
}
