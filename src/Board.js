import React from 'react';
import Square from './Square.js'
import './Board.css';

import './App.css';


function Board(props){
  return(
    <div className="board">
      {
        props.board.map((row, i) =>
          <div key={i} className="row">
            {
              row.map((sq, i) =>
                <Square key={i} row={row} square={sq} />
              )
            }
          </div>
        )
      }

    </div>
  )
}


// this should be deleted probably.
// <div className="row">
//   < Square />
//   < Square />
//   < Square />
// </div>
// <div className="row">
//   < Square />
//   < Square />
//   < Square />
// </div><div className="row">
//   < Square />
//   < Square />
//   < Square />
// </div>

export default Board;
