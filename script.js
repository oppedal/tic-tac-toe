'use strict:';
const changePlayerBtn = document.querySelector('.changeplayer');

const gameBoard = (() => {
  let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const winning = {
    win_o_1: ['o', 'o', 'o', 4, 5, 6, 7, 8, 9],
    win_o_2: [1, 2, 3, 'o', 'o', 'o', 7, 8, 9],
    win_o_3: [1, 2, 3, 4, 5, 6, 'o', 'o', 'o'],
    win_o_4: ['o', 2, 3, 'o', 5, 6, 'o', 8, 9],
    win_o_5: [1, 'o', 3, 4, 'o', 6, 7, 'o', 9],
    win_o_6: [1, 2, 'o', 4, 5, 'o', 7, 8, 'o'],
    win_o_7: ['o', 2, 3, 4, 'o', 6, 7, 8, 'o'],
    win_o_8: [1, 2, 'o', 4, 'o', 6, 'o', 8, 9],
    win_x_1: ['o', 'o', 'o', 4, 5, 6, 7, 8, 9],
    win_x_2: [1, 2, 3, 'x', 'x', 'x', 7, 8, 9],
    win_x_3: [1, 2, 3, 4, 5, 6, 'x', 'x', 'x'],
    win_x_4: ['x', 2, 3, 'x', 5, 6, 'x', 8, 9],
    win_x_5: [1, 'x', 3, 4, 'x', 6, 7, 'x', 9],
    win_x_6: [1, 2, 'x', 4, 5, 'x', 7, 8, 'x'],
    win_x_7: ['x', 2, 3, 4, 'x', 6, 7, 8, 'x'],
    win_x_8: [1, 2, 'x', 4, 'x', 6, 'x', 8, 9],
  };

  return {
    winning,
    board,
  };
})();
const gameController = (() => {
  const boardDivs = document.querySelectorAll('.board');
  let activeMarker = `o`;
  let activeMarkerClass = `mark--${activeMarker}`;
  let numFromClass;
  changePlayerBtn.addEventListener('click', () => {
    if (activeMarker === 'o') {
      activeMarker = 'x';
      activeMarkerClass = `mark--${activeMarker}`;
    } else {
      activeMarker = 'o';
      activeMarkerClass = `mark--${activeMarker}`;
    }
    console.log(activeMarker, activeMarkerClass);
  });
  boardDivs.forEach((button) => {
    button.addEventListener('click', () => {
      console.log(`Game board ${gameBoard.winning.win_o_1}`);
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

      let answer_o_1 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_o_1],
        0,
        1,
        2
      );
      let answer_o_2 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_o_2],
        3,
        4,
        5
      );
      let answer_o_3 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_o_3],
        6,
        7,
        8
      );
      let answer_o_4 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_o_4],
        0,
        4,
        6
      );
      let answer_o_5 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_o_5],
        1,
        4,
        7
      );
      let answer_o_6 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_o_6],
        2,
        5,
        8
      );
      let answer_o_7 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_o_7],
        0,
        4,
        8
      );
      let answer_o_8 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_o_8],
        2,
        4,
        6
      );
      let answer_x_1 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_x_1],
        0,
        1,
        2
      );
      let answer_x_2 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_x_2],
        3,
        4,
        5
      );
      let answer_x_3 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_x_3],
        6,
        7,
        8
      );
      let answer_x_4 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_x_4],
        0,
        4,
        6
      );
      let answer_x_5 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_x_5],
        1,
        4,
        7
      );
      let answer_x_6 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_x_6],
        2,
        5,
        8
      );
      let answer_x_7 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_x_7],
        0,
        4,
        8
      );
      let answer_x_8 = equal(
        [...gameBoard.board],
        [...gameBoard.winning.win_x_8],
        2,
        4,
        6
      );

      const findWinner = {
        answer_o_1,
        answer_o_2,
        answer_o_3,
        answer_o_4,
        answer_o_5,
        answer_o_6,
        answer_o_7,
        answer_o_8,
        answer_x_1,
        answer_x_2,
        answer_x_3,
        answer_x_4,
        answer_x_5,
        answer_x_6,
        answer_x_7,
        answer_x_8,
      };
      Object.values(findWinner).some((val) => {
        if (val === true) {
          console.log(`winner`);
        }
      });
    });
  });

  return {
    activeMarker,
    boardDivs,
    numFromClass,
    // checkWinner,
  };
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
