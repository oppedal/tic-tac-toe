'use strict:';

const gameBoard = (() => {
  const line_1 = [1, 2, 3];
  const line_2 = [4, 5, 6];
  const line_3 = [7, 8, 9];
  let board;

  return {
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
})();

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const gameController = (() => {
  const boardDivs = document.querySelectorAll('.board');
  let activeMarker = `o`;
  let activeMarkerClass = `mark--${activeMarker}`;
  let numFromClass;
  boardDivs.forEach((button) => {
    button.addEventListener('click', () => {
      // console.log(gameBoard.board);
      button.classList.add(`${activeMarkerClass}`);
      //Get the last number from the boardDivs.//
      const getNumFromClass = button.classList[1];
      numFromClass = getNumFromClass.charAt(getNumFromClass.length - 1);
      board.forEach((item, i) => {
        if (item === numFromClass) {
          board[i] = `${activeMarker}`;
        }
        console.log(board);
      });
    });
  });

  return {
    activeMarker,
    boardDivs,
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
