import React from 'react';

function Square (props) {
    return (
        <div className="square" onClick={() => props.handleClick(props)}>
          {props.square}
        </div>
    )
}

export default Square;
