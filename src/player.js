import gameboard from './gameboard';

export default function player(name, computer) {
  function takeTurn(enemyGameboard, coordinates) {
    let result;

    if (!computer) result = enemyGameboard.receiveAttack(coordinates);

    if (computer) {
      let randomCoordinates = getRandomCoordinates();
      result = enemyGameboard.receiveAttack(randomCoordinates);
      while (result === null) {
        randomCoordinates = getRandomCoordinates();
        result = enemyGameboard.receiveAttack(randomCoordinates);
      }
      return result;
    }

    return result;
  }

  function getRandomCoordinates() {
    const randomX = Math.floor(Math.random() * 9);
    const randomY = Math.floor(Math.random() * 9);
    const randomCoordinates = [randomX, randomY];
    return randomCoordinates;
  }

  return { name, takeTurn };
}
