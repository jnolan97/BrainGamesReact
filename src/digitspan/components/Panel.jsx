import React from 'react';
import Button from '@mui/material/Button';
import '../../styles/main.css';
export default function Panel(props) {
  const panel_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      {panel_array.map(btn => (
        <div className='button-group' style={{ display: 'inline-block', flexDirection: 'row' }}>
          <Button variant="outlined" color="primary" id={btn} key={btn.toString()} sx={{
            width: 90,
            height: 90,
            display: "block",
            borderRadius: "50%",
            mr: 2
          }}
            onClick={props.handleClick}>
            {btn}
          </Button>
        </div>
      ))}
    </div>
  )
}