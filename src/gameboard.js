import ship from './ship';

export default function gameboard() {
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    const row = [];
    for (let j = 0; j < 10; j += 1) {
      row.push([]);
    }
    board.push(row);
  }

  const ships = [];
  const attacksReceived = [];

  function placeShip(coordinates) {
    const xStart = coordinates[0];
    const yStart = coordinates[1];
    const xEnd = coordinates[2];
    const yEnd = coordinates[3];

    if (xEnd > xStart || yEnd > yStart) {
      for (let yIfOccupied = yStart; yIfOccupied <= yEnd; yIfOccupied += 1) {
        for (let xIfOccupied = xStart; xIfOccupied <= xEnd; xIfOccupied += 1) {
          if (board[yIfOccupied][xIfOccupied][0] !== undefined) return;
        }
      }

      let length = xEnd - xStart + 1;
      if (length === 1) length = yEnd - yStart + 1;

      const newShip = ship(length);
      ships.push(newShip);

      for (let y = yStart; y <= yEnd; y += 1) {
        for (let x = xStart; x <= xEnd; x += 1) {
          board[y][x][0] = newShip;
        }
      }
    }

    if (xEnd < xStart || yEnd < yStart) {
      for (let yIfOccupied = yEnd; yIfOccupied <= yStart; yIfOccupied += 1) {
        for (let xIfOccupied = xEnd; xIfOccupied <= xStart; xIfOccupied += 1) {
          if (board[yIfOccupied][xIfOccupied][0] !== undefined) return;
        }
      }

      let length = xStart - xEnd + 1;
      if (length === 1) length = yStart - yEnd + 1;

      const newShip = ship(length);
      ships.push(newShip);

      for (let y = yEnd; y <= yStart; y += 1) {
        for (let x = xEnd; x <= xStart; x += 1) {
          board[y][x][0] = newShip;
        }
      }
    }
  }

  function receiveAttack(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    const attackedCell = board[y][x];

    let newAttack = true;
    attacksReceived.forEach((attack) => {
      if (attack[0] === x && attack[1] === y) newAttack = false;
    });

    if (!newAttack) return null;

    if (newAttack) {
      attacksReceived.push([x, y]);
      if (attackedCell[0] !== undefined) {
        attackedCell[0].hit();
        return 'Hit';
      }
      // do something when an attack misses
      attackedCell[0] = 'X';
      return 'Miss';
    }
  }

  function fleetIsSunk() {
    let numberOfSunkenShips = 0;

    ships.forEach((shipInFleet) => {
      if (shipInFleet.isSunk()) numberOfSunkenShips += 1;
    });

    return numberOfSunkenShips === ships.length;
  }

  return { board, placeShip, receiveAttack, fleetIsSunk };
}
