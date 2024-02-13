import ship from './ship';

const testShip = ship(2);

test('isSunk === false', () => {
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
});

test('isSunk === true', () => {
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
