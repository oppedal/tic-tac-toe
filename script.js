'use strict:';

const gameBoard = (() => {
  const line_1 = [1, 2, 3];
  const line_2 = [4, 5, 6];
  const line_3 = [7, 8, 9];
  let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return {
    board,
  };
})();
console.log(gameBoard.board.indexOf(2 + 1));
const gameController = (() => {
  const boardDivs = document.querySelectorAll('.board');

  let activeMarkerClass = `mark--o`;
  let activeMarker = `o`;
  boardDivs.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.add(`${activeMarkerClass}`);

      console.log(button.classList);
    });
  });

  return {
    activeMarker,
  };
})();

// const line_1 = [1, 2, 3];
// line_1.forEach((item, i) => {
//   if (item === 1) {
//     line_1[i] = `${gameController.activeMarker}`;
//   }
// });
// console.log(line_1);

const Player = (playerName, playerNumber) => {
  const getName = () => playerName;
  const getMarker = () => {
    if (playerNumber === 1) playerMarker = markX;
    else playerMarker = markO;
  };
  let playerMove = () => {};

  return { getName, getMarker };
};
