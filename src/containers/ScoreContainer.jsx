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
  render() {
    return (
      <div id="score">
        <Score name="P1" score={this.props.p1} />
        <Score name="CPU" score={this.props.cpu} />
      </div>
    );
  }
}



export default connect(mapStateToProps)(ScoreContainer);