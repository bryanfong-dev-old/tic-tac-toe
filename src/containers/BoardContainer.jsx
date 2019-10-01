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

const mapStateToProps = store => ({
  board: store.game.board,
  active: store.game.active,
  moves: store.game.moves,
  turn: store.game.turn,
})

const mapDispatchToProps = dispatch => ({
  placeMove: (index) => dispatch(actions.placeMove(index)),
  checkForWinner: () => dispatch(actions.checkForWinner()),
  checkForDraw: () => dispatch(actions.checkForDraw()),
})

class BoardContainer extends React.Component {
  componentDidUpdate() {
    if (this.props.active && this.props.moves >= 3) {
      this.props.checkForWinner();
      this.props.checkForDraw();
    }
    if (this.props.turn === 'X') {
      const index = cpuNextMove(this.props.board);
      this.props.placeMove(index);
    }
  }

  render({ board, placeMove } = this.props) {
    const boxes = board.map((val, index) =>
      <Square placeMove={placeMove} key={index} index={index} val={val} />
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
  placeMove: PropTypes.func,
  checkForWinner: PropTypes.func,
  checkForDraw: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);