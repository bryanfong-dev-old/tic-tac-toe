import React from 'react';
import Box from '../components/Box';

class BoardContainer extends React.Component {
  render() {
    const boxes = [];
    for (let i = 0; i < 9; i++) {
      boxes.push(<Box />)
    }

    return (
      <div id="board">
        {boxes}
      </div>
    )
  }
}

export default BoardContainer;