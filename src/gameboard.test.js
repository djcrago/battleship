import gameboard from './gameboard';

const testGameboard = gameboard();

test('Prevent placing ships on occupied cell', () => {
  testGameboard.placeShip([0, 0, 4, 0]);
  testGameboard.placeShip([3, 2, 6, 2]);
  testGameboard.placeShip([1, 3, 1, 5]);
  testGameboard.placeShip([5, 7, 5, 8]);
  testGameboard.placeShip([7, 7, 9, 7]);
  testGameboard.placeShip([4, 1, 4, 3]);

  expect(testGameboard.board).toEqual([
    [['S'], ['S'], ['S'], ['S'], ['S'], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], ['S'], ['S'], ['S'], ['S'], [], [], []],
    [[], ['S'], [], [], [], [], [], [], [], []],
    [[], ['S'], [], [], [], [], [], [], [], []],
    [[], ['S'], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], ['S'], [], ['S'], ['S'], ['S']],
    [[], [], [], [], [], ['S'], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ]);
});

test('Place ships using factory fn', () => {});
