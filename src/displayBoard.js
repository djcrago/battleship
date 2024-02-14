export default function displayBoard(player) {
  const domGameboards = document.querySelector('.gameboards');

  const domBoard = document.createElement('div');
  domBoard.classList.toggle('board');

  const name = document.createElement('h3');
  // used?
  name.classList.toggle('player-name');
  name.textContent = player.name;
  domBoard.appendChild(name);

  player.playerGameboard.board.forEach((row) => {
    const domRow = document.createElement('div');
    domRow.classList.toggle('row');
    row.forEach((cell) => {
      const domCell = document.createElement('button');
      domCell.classList.toggle('cell');
      if (cell[0] !== undefined) domCell.textContent = 'S';
      domRow.appendChild(domCell);
    });
    domBoard.appendChild(domRow);
  });

  domGameboards.appendChild(domBoard);
}
