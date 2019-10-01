/**
 * ************************************
 *
 * @module  ScoreContainer
 * @description stateful component that renders the score board
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Score from '../components/Score';
import Button from '../components/Button';
import GameMessage from '../components/GameMessage';
import PropTypes from 'prop-types';

const mapStateToProps = store => (
  {
    p1: store.game.p1_score,
    cpu: store.game.cpu_score,
    winner: store.game.winner,
    turn: store.game.turn,
  }
)

const mapDispatchToProps = dispatch => ({
  newGame: () => dispatch(actions.newGame()),
})

class ScoreContainer extends React.Component {
  render({ p1, cpu, winner, turn, newGame } = this.props) {
    return (
      <div id="game-info">
        <div id="message">
          {/* conditional rendering depending on the value of winner */}
          {winner === "X" && <GameMessage message="X Wins!" />}
          {winner === "O" && <GameMessage message="O Wins!" />}
          {winner === "Tie" && <GameMessage message="Tie Game!" />}
          {winner === "" && <GameMessage message={turn + '\'s Turn!'} />}
        </div>
        <div id="score">
          <Score player="P1" score={p1} />
          <Score player="CPU" score={cpu} />
        </div>
        {/* conditional rendering for replay button to appear when game is over */}
        {winner !== "" && <Button text="Play Again" func={newGame} />}
      </div>
    );
  }
}

ScoreContainer.propTypes = {
  p1: PropTypes.number,
  cpu: PropTypes.number,
  winner: PropTypes.string,
  turn: PropTypes.string,
  newGame: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer);