const domMessage = document.querySelector('.message');

export default function renderMessage(message) {
  domMessage.textContent = message;
}
