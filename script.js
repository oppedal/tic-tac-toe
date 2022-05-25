'use strict:';

const markO = document.querySelector('.mark--o');
const markX = document.querySelector('.mark--x');
const gameBoard = (() => {
  let emptyScore = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let score = [`x`, , `o`, , `x`, , `x`, `o`];
  return {
    score,
    emptyScore,
  };
})();
const gameController = (() => {
  const boardDivs = document.querySelectorAll('.board');
  boardDivs.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.add('.mark--o');
      console.log(button.classList);
    });
  });
  return boardDivs;
})();

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
