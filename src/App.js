import React from 'react';
import Board from './Board.js'
import './App.css';

function App(props){
  let board = [
    ['x','',''],
    ['x','',''],
    ['','','']
  ];

  return(
    <div className="App">
      <div className="App-header">
        <Board board={board}/>
      </div>
    </div>
  );
}

export default App;
