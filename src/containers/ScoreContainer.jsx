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
import Score from '../components/Score';
import GameMessage from '../components/GameMessage';

const mapStateToProps = store => (
  {
    p1: store.score.p1,
    cpu: store.score.cpu,
    winner: store.game.winner,
    turn: store.game.turn,
  }
)


class ScoreContainer extends React.Component {
  render({ p1, cpu, winner, turn } = this.props) {
    return (
      <div id="game-info">
        <div id="message">
          {winner === "X" && <GameMessage message="X Wins!" />}
          {winner === "O" && <GameMessage message="O Wins!" />}
          {winner === "Tie" && <GameMessage message="Tie Game!" />}
          {winner === "" && <GameMessage message={turn + '\'s Turn!'} />}
        </div>
        <div id="score">
          <Score name="P1" score={p1} />
          <Score name="CPU" score={cpu} />
        </div>
      </div>
    );
  }
}



export default connect(mapStateToProps)(ScoreContainer);