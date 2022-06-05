import React from 'react';

export default function Score(props) {

  return (
    <div className='score-text' style={{ background: 'red', marginTop: 20 }}>
      {props.gameOver === false ? props.level : 'Game over, better luck next time!'}
    </div>
  )
}