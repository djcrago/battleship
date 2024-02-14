export default function ship(length) {
  let hits = 0;

  function hit() {
    hits += 1;
  }

  function isSunk() {
    return hits === length;
  }

  return {
    hit,
    isSunk,
  };
}
