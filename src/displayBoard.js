export default function displayBoard(gameBoard) {
  const domGameboards = document.querySelector('.gameboards');

  const newDOMBoard = document.createElement('div');
  newDOMBoard.classList.toggle('board');

  gameBoard.board.forEach((row) => {
    const domRow = document.createElement('div');
    domRow.classList.toggle('row');

    row.forEach((cell) => {
      const domCell = document.createElement('button');
      domCell.classList.toggle('cell');

      // populate domCells with something to indicate presence of ship
      if (cell[0] !== undefined) domCell.textContent = 'S';

      domCell.addEventListener('click', () => {
        const y = gameBoard.board.indexOf(row);
        const x = gameBoard.board[y].indexOf(cell);
        gameBoard.receiveAttack([x, y]);
        domCell.textContent = 'X';
      });

      domRow.appendChild(domCell);
    });

    newDOMBoard.appendChild(domRow);
  });

  domGameboards.appendChild(newDOMBoard);
}
