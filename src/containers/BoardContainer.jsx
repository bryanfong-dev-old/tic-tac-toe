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
import Box from '../components/Box';

const mapStateToProps = store => ({
  board: store.game.board,
})

const mapDispatchToProps = dispatch => ({
  placeMove: (index) => dispatch(actions.placeMove(index)),
  checkWinner: () => dispatch(actions.checkWinner()),
})

class BoardContainer extends React.Component {

  componentDidUpdate() {
    this.props.checkWinner();
  }

  render({ board, placeMove } = this.props) {
    const boxes = board.map((val, i) =>
      <Box placeMove={placeMove}
        key={i} i={i} val={val}
      />
    )

    return (
      <div id="board">
        {boxes}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);