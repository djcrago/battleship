import ship from './ship';

export default function gameboard() {
  const board = [];

  for (let i = 0; i < 10; i += 1) {
    const row = [];

    for (let j = 0; j < 10; j += 1) {
      const cell = [];
      row.push(cell);
    }

    board.push(row);
  }

  function placeShip(coordinates = [0, 0, 0, 0]) {
    const xStart = coordinates[0];
    const yStart = coordinates[1];
    const xEnd = coordinates[2];
    const yEnd = coordinates[3];

    for (let yIfOccupied = yStart; yIfOccupied <= yEnd; yIfOccupied += 1) {
      for (let xIfOccupied = xStart; xIfOccupied <= xEnd; xIfOccupied += 1) {
        if (board[yIfOccupied][xIfOccupied][0] === 'S') return;
      }
    }

    for (let y = yStart; y <= yEnd; y += 1) {
      for (let x = xStart; x <= xEnd; x += 1) {
        board[y][x][0] = 'S';
      }
    }
  }

  return { board, placeShip };
}
