'use strict:';
const markO = document.querySelector('.mark--o');
const markX = document.querySelector('.mark--x');
const gameBoard = (() => {
  let emptyScore = new Array(9);
  let score = [`x`, , `o`, , `x`, , `x`, `o`];
  return {
    score,
    emptyScore,
  };
})();
const gameController = (() => {})();

const Player = (playerName, playerNumber) => {
  const getName = () => playerName;
  const getMarker = () => {
    if (playerNumber === 1) playerMarker = markX;
    else playerMarker = markO;
  };
  let playerMove = () => {};

  return { getName, getMarker };
};

console.table(gameBoard.emptyScore.length);
