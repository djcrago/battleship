import gameboard from './gameboard';

export default function player(computer) {
  const playerGameboard = gameboard();

  function takeTurn(enemy, coordinates) {
    if (!computer) return enemy.playerGameboard.receiveAttack(coordinates);

    if (computer) {
      let randomCoordinates = getRandomCoordinates();
      let result = enemy.playerGameboard.receiveAttack(randomCoordinates);
      if (result !== null) return result;
      while (result === null) {
        randomCoordinates = getRandomCoordinates();
        result = enemy.playerGameboard.receiveAttack(randomCoordinates);
      }
      return result;
    }
  }

  function getRandomCoordinates() {
    const randomX = Math.floor(Math.random() * 9);
    const randomY = Math.floor(Math.random() * 9);
    const randomCoordinates = [randomX, randomY];
    return randomCoordinates;
  }

  return { playerGameboard, takeTurn };
}
