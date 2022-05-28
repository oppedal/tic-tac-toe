'use strict:';

const gameBoard = (() => {
  const line_1 = [1, 2, 3];
  const line_2 = [4, 5, 6];
  const line_3 = [7, 8, 9];
  let board;

  return {
    boardTwo: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
})();
const gameController = (() => {
  const boardDivs = document.querySelectorAll('.board');
  let activeMarker = `o`;
  let activeMarkerClass = `mark--${activeMarker}`;
  let numFromClass;
  boardDivs.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.add(`${activeMarkerClass}`);
      //Get the last number from the boardDivs.//
      const getNumFromClass = button.classList[1];
      numFromClass = Number(getNumFromClass.charAt(getNumFromClass.length - 1));
      gameBoard.board.forEach((item, i) => {
        if (item === numFromClass) {
          gameBoard.board[i] = `${activeMarker}`;
        }
      });
      console.log(gameBoard.board);
      const equal = (a1, a2, ...indexes) =>
        indexes.every((i) => a1[i] === a2[i]);

      let answer_1 = equal([...gameBoard.board], [...win_1], 0, 1, 2);
      let answer_2 = equal([...gameBoard.board], [...win_2], 3, 4, 5);
      let answer_3 = equal([...gameBoard.board], [...win_3], 6, 7, 8);
      let answer_4 = equal([...gameBoard.board], [...win_4], 1, 4, 7);
      let answer_5 = equal([...gameBoard.board], [...win_5], 2, 5, 8);
      let answer_6 = equal([...gameBoard.board], [...win_6], 3, 6, 9);
      let answer_7 = equal([...gameBoard.board], [...win_7], 1, 5, 9);
      let answer_8 = equal([...gameBoard.board], [...win_8], 3, 5, 7);

      const findWinner = {
        answer_1,
        answer_2,
        answer_3,
        // answer_4,
        // answer_5,
        answer_6,
        // answer_7,
        // answer_8,
      };
      const checkWinner = Object.values(findWinner).some((val) => {
        if (val === true) {
          console.log(`winner`);
        }
      });
      // if (checkWinner) console.log(`Winner winner!`);
      // console.log(gameBoard.board);
    });
  });

  return {
    activeMarker,
    boardDivs,
    numFromClass,
  };
})();

console.log(gameController.activeMarker);
const win_1 = [
  gameController.activeMarker,
  gameController.activeMarker,
  gameController.activeMarker,
  4,
  5,
  6,
  7,
  8,
  9,
];
const win_31 = [
  gameController.activeMarker,
  gameController.activeMarker,
  gameController.activeMarker,
  4,
  5,
  6,
  7,
  8,
  9,
];
const win_2 = [
  1,
  2,
  3,
  gameController.activeMarker,
  gameController.activeMarker,
  gameController.activeMarker,
  7,
  8,
  9,
];
const win_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  gameController.activeMarker,
  gameController.activeMarker,
  gameController.activeMarker,
];
const win_4 = [
  gameController.activeMarker,
  2,
  3,
  gameController.activeMarker,
  5,
  6,
  gameController.activeMarker,
  8,
  9,
];

const win_5 = [
  1,
  gameController.activeMarker,
  3,
  4,
  gameController.activeMarker,
  6,
  7,
  gameController.activeMarker,
  9,
];
const win_6 = [
  1,
  2,
  gameController.activeMarker,
  4,
  5,
  gameController.activeMarker,
  7,
  8,
  gameController.activeMarker,
];
const win_7 = [
  gameController.activeMarker,
  2,
  3,
  4,
  gameController.activeMarker,
  6,
  7,
  8,
  gameController.activeMarker,
];
const win_8 = [
  1,
  2,
  gameController.activeMarker,
  4,
  gameController.activeMarker,
  6,
  gameController.activeMarker,
  8,
  9,
];

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
