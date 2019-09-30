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

})

class BoardContainer extends React.Component {
  render({ board } = this.props) {
    const boxes = board.map((value, index) => <Box key={index} value={value} />)

    return (
      <div id="board">
        {boxes}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);