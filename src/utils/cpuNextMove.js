/**
 * ************************************
 *
 * @module cpuNextMove
 * @description custom algo that finds all available moves and checks for if for next move wins for cpu and player. if none, the cpu will pick a random empty spot
 *
 * ************************************
 */


import checkWinner from './checkWinner';

function findAvailSpots(board) {
  return board.reduce((acc, curr, index) => {
    if (curr === '') acc.push(index);
    return acc;
  }, [])
}

function cpuNextMove(board, player) {
  const spots = findAvailSpots(board);
  console.log(spots)
  for (let i = 0; i < spots.length; i++) {
    let copy = JSON.parse(JSON.stringify(board));
    copy[spots[i]] = 'X';
    if (checkWinner(copy) === 'X') return spots[i]
    copy[spots[i]] = 'O';
    if (checkWinner(copy) === 'O') return spots[i]
  }
  return spots[Math.round(Math.random() * spots.length)];
}

export default cpuNextMove;