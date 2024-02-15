import renderBoard from './renderBoard';

const domGameboards = document.querySelector('.gameboards');

export default function renderBoards(gameboards) {
  domGameboards.innerHTML = '';

  const domComputerBoard = renderBoard(gameboards[0], 'computer');
  const domPlayerBoard = renderBoard(gameboards[1]);

  domGameboards.appendChild(domComputerBoard);
  domGameboards.appendChild(domPlayerBoard);
}
