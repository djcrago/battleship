const domPlayer1 = document.querySelector('.player1');
const domPlayer2 = document.querySelector('.player2');

export default function displayNames(player1, player2) {
  domPlayer1.textContent = player1.name;
  domPlayer2.textContent = player2.name;
}
