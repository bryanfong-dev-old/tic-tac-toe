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

const mapStateToProps = store => (
  {
    p1: store.score.p1,
    cpu: store.score.cpu,
  }
)

class ScoreContainer extends React.Component {
  render({ p1, cpu } = this.props) {
    return (
      <div id="score">
        <Score name="P1" score={p1} />
        <Score name="CPU" score={cpu} />
      </div>
    );
  }
}



export default connect(mapStateToProps)(ScoreContainer);