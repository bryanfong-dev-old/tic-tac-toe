import React from "react";
import BoardContainer from './containers/BoardContainer';
import ScoreContainer from "./containers/ScoreContainer";


const App = () => (
  <div className="container">
    <h1 id="title">Tic Tac Toe</h1>
    <BoardContainer />
    <ScoreContainer />
  </div>
)

export default App;