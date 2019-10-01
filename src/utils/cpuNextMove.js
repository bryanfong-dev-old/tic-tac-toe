/**
 * ************************************
 *
 * @module cpuNextMove
 * @description custom algo that finds the CPUs next month
 * @param {array} board - takes the board an argument  
 * @return {number} index for the next move
 *
 * ************************************
 */

import checkWinner from './checkWinner';

//returns an array with the empty indexes as values
//spots that are filled will be skipped.
function findAvailSpots(board) {
  return board.reduce((acc, curr, index) => {
    if (curr === '') acc.push(index);
    return acc;
  }, [])
}

// This custom algo finds all empty spaces
// First, it will find all of the winning moves
// Then, it will find moves that it needs to block
// If none, then it will pick a random empty space for its next move.
function cpuNextMove(board) {
  const spots = findAvailSpots(board);
  let win = [];
  let block = [];

  for (let i = 0; i < spots.length; i++) {
    let copy = JSON.parse(JSON.stringify(board));
    copy[spots[i]] = 'X';
    if (checkWinner(copy) === 'X') win.push(spots[i]);
    copy[spots[i]] = 'O';
    if (checkWinner(copy) === 'O') block.push(spots[i]);
  }

  if (win.length > 0) return win[0];
  else if (block.length > 0) return block[0];
  //place in the middle slot if it is empty as its first move (more challenging)
  if (spots.includes(4)) return 4;
  const index = Math.floor(Math.random() * spots.length);
  return spots[index];
}

export default cpuNextMove;