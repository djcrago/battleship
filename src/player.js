export default function player(name) {
  function getRandomCoordinates() {
    const randomX = Math.floor(Math.random() * 9);
    const randomY = Math.floor(Math.random() * 9);
    const randomCoordinates = [randomX, randomY];
    return randomCoordinates;
  }

  function takeTurn(enemyGameboard, coordinates) {
    let result;

    if (coordinates) result = enemyGameboard.receiveAttack(coordinates);

    if (!coordinates) {
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

  return { name, takeTurn };
}
