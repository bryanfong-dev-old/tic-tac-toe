/**
 * ************************************
 *
 * @module checkWinner
 * @description helper function to check if there is a winner
 *
 * ************************************
 */

const winCombos = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]

const checkWinner = (board) => {
  for (let i = 0; i < winCombos.length; i++) {
    let combo = winCombos[i];
    if (board[combo[0]] !== '' || board[combo[1]] !== '' || board[combo[2]] !== '') {
      if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
        return board[combo[0]];
      }
    }
  }
  return;
}

export default checkWinner;