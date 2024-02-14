import gameboard from './gameboard';

const testGameboard = gameboard();

test('Place ships at specific coordinates', () => {
  testGameboard.placeShip([0, 0, 4, 0]);

  expect(testGameboard.board[0][0][0]).toHaveProperty('hit');
});

testGameboard.placeShip([3, 2, 6, 2]);
testGameboard.placeShip([1, 3, 1, 5]);
testGameboard.placeShip([5, 7, 5, 8]);
testGameboard.placeShip([7, 7, 9, 7]);
testGameboard.placeShip([4, 1, 4, 3]);

test('Hit a ship', () => {
  testGameboard.receiveAttack([0, 0]);
  expect(testGameboard.board[0][0][0].isSunk()).toBe(false);
});

test('Record coordinates of missed shot', () => {
  testGameboard.receiveAttack([9, 0]);
  expect(testGameboard.board[0][9][0]).toEqual('X');
});

test('Sink a ship', () => {
  testGameboard.receiveAttack([1, 0]);
  testGameboard.receiveAttack([2, 0]);
  testGameboard.receiveAttack([3, 0]);
  testGameboard.receiveAttack([4, 0]);
  expect(testGameboard.board[0][1][0].isSunk()).toBe(true);
});

test('Check if all ships are sunk', () => {
  expect(testGameboard.fleetIsSunk()).toBe(false);
});

test('Hitting different ships', () => {
  expect(testGameboard.board[7][5][0].isSunk()).toBe(false);
});

// state of testGameboard.board after above tests
// 'S' === the ship object at that cell
// [      0      1      2      3      4      5      6      7      8      9
// 0 - [['S'], ['S'], ['S'], ['S'], ['S'], [   ], [   ], [   ], [   ], ['X']],
// 1 - [[   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ]],
// 2 - [[   ], [   ], [   ], ['S'], ['S'], ['S'], ['S'], [   ], [   ], [   ]],
// 3 - [[   ], ['S'], [   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ]],
// 4 - [[   ], ['S'], [   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ]],
// 5 - [[   ], ['S'], [   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ]],
// 6 - [[   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ]],
// 7 - [[   ], [   ], [   ], [   ], [   ], ['S'], [   ], ['S'], ['S'], ['S']],
// 8 - [[   ], [   ], [   ], [   ], [   ], ['S'], [   ], [   ], [   ], [   ]],
// 9 - [[   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ], [   ]]
// ]
