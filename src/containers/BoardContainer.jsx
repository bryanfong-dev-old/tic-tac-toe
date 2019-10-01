/**
 * ************************************
 *
 * @module  BoardContainer
 * @description stateful component that renders the game board
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Square from '../components/Square';
import PropTypes from 'prop-types';
import cpuNextMove from '../utils/cpuNextMove';
import checkWinner from '../utils/checkWinner';

const mapStateToProps = store => ({
  board: store.game.board,
  active: store.game.active,
  moves: store.game.moves,
  turn: store.game.turn,
})

const mapDispatchToProps = dispatch => ({
  placeMarker: (index) => dispatch(actions.placeMarker(index)),
  declareWinner: (winner) => dispatch(actions.declareWinner(winner)),
  checkForDraw: () => dispatch(actions.checkForDraw()),
})

class BoardContainer extends React.Component {
  componentDidUpdate() {
    //if game is active and there is 2 or more moves, start checking for winners
    if (this.props.active && this.props.moves >= 3) {
      const winner = checkWinner(this.props.board)
      this.props.declareWinner(winner);
    }
    //if 9 moves are made, check for a draw
    if (this.props.moves === 9) {
      this.props.checkForDraw();
    }
    //find cpu's next month and place marker for it when it is X's turn 
    if (this.props.turn === 'X') {
      const index = cpuNextMove(this.props.board);
      this.props.placeMarker(index);
    }
  }

  render({ board, placeMarker } = this.props) {
    const boxes = board.map((marker, index) =>
      <Square placeMarker={placeMarker} key={index} index={index} marker={marker} />
    )
    return (
      <div id="board">
        {boxes}
      </div>
    )
  }
}

BoardContainer.propTypes = {
  board: PropTypes.array,
  active: PropTypes.bool,
  moves: PropTypes.number,
  turn: PropTypes.string,
  placeMarker: PropTypes.func,
  declareWinner: PropTypes.func,
  checkForDraw: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);