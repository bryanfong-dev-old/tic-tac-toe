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
    const { active, moves, board, turn } = this.props;

    if (active) {
      if (moves >= 3) {
        const winner = checkWinner(board)
        this.props.declareWinner(winner);
      }
      if (turn === 'X') {
        const index = cpuNextMove(board);
        this.props.placeMarker(index);
      }
      if (moves === 9) {
        this.props.checkForDraw();
      }
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